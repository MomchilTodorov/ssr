import React from "react";
import App from "./App";
import HomePage from "./pages/HomePage";
import UsersListPage from "./pages/UsersListPage";
import NotFoundPage from './pages/NotFoundPage'
import AdminsListPage from './pages/AdminsListPage';

//using spread operator for the components
//and loadData function(if available)
//because they are imported in object form now
export default [
  {
    ...App, //no path added to App, meaning it will always be displayed on screen
    routes: [
      {
        ...HomePage,
        path: "/",
        exact: true,
      },
      {
        ...AdminsListPage,
        path: "/admins"
      },
      {
        ...UsersListPage,
        path: "/users",
      },
      {
        ...NotFoundPage//will be shown if react router can't match any of the defined routes
      },
    ],
  },
];
