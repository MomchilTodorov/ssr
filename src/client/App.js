import React from "react";
import { renderRoutes } from "react-router-config";
import Header from "./components/Header";
import { fetchCurrentUser } from "./actions";

const App = ({ route }) => {
  return (
    <div>
      <Header />
      {renderRoutes(route.routes)}
    </div>
  ); //attempting to route any nested children routes/components
};

export default {
  component: App,
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser()),
};
