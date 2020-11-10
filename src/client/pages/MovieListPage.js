import "@babel/polyfill";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTvshows } from "../../actions";
import { fetchMovies } from "../../actions";

class MovieListPage extends Component {
  // Have state ready for both Movies and TvShows link clicks/direct requests
  componentDidMount() {
    this.props.fetchTvshows();
    this.props.fetchMovies();
  }

  renderData() {
    return this.props.movies.results.map((movie) => {
      return (
        <div class="card text-center m-3" style={{ width: "15rem" }}>
          <img class="card-img-top" alt="..." src={this.dynamicUrl(movie)} />
          <div class="card-body">
            <h5 class="card-title">{movie.title}</h5>
            <p class="card-text font-weight-light">{movie.release_date}</p>
            <a href={this.dynamicLink(movie)} class="btn btn-secondary">
              TMDB
            </a>
          </div>
        </div>
      );
    });
  }

  dynamicUrl(movie) {
    let url = "https://image.tmdb.org/t/p/w200/" + movie.poster_path;
    return url;
  }

  dynamicLink(movie) {
    let link = "https://www.themoviedb.org/movie/" + movie.id;
    return link;
  }

  render() {
    return (
      <div class="container">
        <div class="row">{this.renderData()}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { tvshows: state.tvshows, movies: state.movies };
}

function loadData(store) {
  return store.dispatch(fetchTvshows()), store.dispatch(fetchMovies());
}

//exporting the component and the loadData function (if present)
//in the form of an object(key:value pair)
// to avoid overlap of different loadData function imports in Routes

export default {
  loadData,
  component: connect(mapStateToProps, { fetchTvshows, fetchMovies })(
    MovieListPage
  ),
};
