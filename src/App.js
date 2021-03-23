import React, { Component } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export class App extends Component {
  state = {
    query: '',
  };

  handleChange = (actualEvent) => {
    const { value } = actualEvent.target;

    this.setState({
      query: value,
    });
  };

  render() {
    const filteredList = moviesFromServer.filter(
      movie => movie.title.toLowerCase().includes(
        this.state.query.toLowerCase(),
      )
      || movie.description.toLowerCase().includes(
        this.state.query.toLowerCase(),
      ),
    );

    return (
      <div className="page">
        <div className="page-content">
          <div className="box">
            <div className="field">
              <label htmlFor="search-query" className="label">
                Search movie
              </label>

              <div className="control">
                <input
                  type="text"
                  id="search-query"
                  className="input"
                  placeholder="Type search word"
                  value={this.state.query}
                  onChange={this.handleChange}
                />

              </div>
            </div>
          </div>
          <MoviesList movies={filteredList} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
