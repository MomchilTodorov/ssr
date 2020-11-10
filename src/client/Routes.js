import App from "./App";
import HomePage from "./pages/HomePage";
import MovieListPage from "./pages/MovieListPage";
import TvShowsPage from "./pages/TvShowsPage";

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
        ...MovieListPage,
        path: "/movies",
      },
      {
        ...TvShowsPage,
        path: "/tvshows",
      },
    ],
  },
];
