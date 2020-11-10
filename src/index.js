import "@babel/polyfill";
import express from "express";
import { applyMiddleware, createStore } from "redux";
import Routes from "./client/Routes";
import { matchRoutes } from "react-router-config";
import renderer from "./helpers/renderer.js";
import thunk from "redux-thunk";
import reducers from "./reducers";

const app = express();

app.use(express.static("public")); //treats the public(client side) directory as public, available to the outside world

// This is fired every time the server side receives a request

// We are going to fill these out in the sections to follow
app.get("*", (req, res) => {
  // Create a new Redux store instance
  const store = createStore(reducers, {}, applyMiddleware(thunk));

  const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => {
      return route.loadData ? route.loadData(store) : null;
    })
    .map((promise) => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });

  Promise.all(promises).then(() => {
    // Send the rendered page back to the client
    // Grab the initial state from our Redux store
    const context = {};
    //const finalState = store.getState();
    const content = renderer(req, store, context);
    res.send(content);
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Listening on port PORT");
});
