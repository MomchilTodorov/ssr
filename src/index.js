/* CommonJS modules (not needed after setting up Webpack on the server)
const express = require('express');
const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const Home = require('./client/components/Home').default; // access default export
*/

// Startup point for the server-side application (?)

import regeneratorRuntime from "regenerator-runtime";
import express from "express";
import { matchRoutes } from "react-router-config";
import proxy from "express-http-proxy";
import Routes from "./client/Routes.js";
import renderer from "./helpers/renderer.js";
import createStore from "./helpers/createStore.js";

const app = express();

app.use("/api", proxy("http://react-ssr-api.herokuapp.com"));
app.use(express.static("public"));
app.get("*", (req, res) => {
  const store = createStore(req);

  // mapping over all the matched routes/destructuring the route and returning an array of promises return from loadData functions
  const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => {
      return route.loadData ? route.loadData(store) : null;
    })
    .map((promise) => {
      if (promise) {
        return new Promise((resolve, rekect) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });

  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context);

    if (context.url) {
      return res.redirect(302, context.url);
    }

    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  });
});

const PORT = process.env.PORT || 3000;
app
  .listen(PORT, () => {
    console.log("listening...");
  })
  .on("error", (err) => {
    console.log(`Error Code: ${err.code}`);
  });
