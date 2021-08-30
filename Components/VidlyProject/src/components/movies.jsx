import { getMovies } from '../services/fakeMovieService';
import React, { Component }  from 'react';

class Movies extends Component {
  state = { 
    movies: getMovies()
  }

  handleDeleteRow(i) {
    let movies = [...this.state.movies]
    movies.splice(i, 1)
    this.setState({ 
      movies: movies
    })
  }

  render() { 
    const { movies } = this.state;

    if (this.state.movies.length === 0) {
      return <p className="errorMessage">There are no movies in the database</p>
    }

    return (
      <main className="container">
        <p>Showing {this.state.movies.length} movies in the database</p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {movies.map(movie => (
              <tr key={movie._id}>
                <td key={1}>{movie.title}</td>
                <td key={2}>{movie.genre.name}</td>
                <td key={3}>{movie.numberInStock}</td>
                <td key={4}>{movie.dailyRentalRate}</td>
                <td><button onClick={i => this.handleDeleteRow(i)} className="btn btn-danger">Delete</button></td>
            </tr>
            ))}
          </tbody>
        </table>
      </main>
    )
  }
}
 
export default Movies;