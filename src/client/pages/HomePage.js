import React from "react";

const Home = () => {
  return (
    <div className="center-align" style={{marginTop: '200px'}}>
      <h3>Welcome </h3>
      <p>Check out these awesome features</p>
    </div>
  );
};

//exporting the component and the loadData function (if present)
//in the form of an object(key:value pair)
// to avoid naming conflicts of different loadData function imports in Routes
export default {
  component: Home,
};
