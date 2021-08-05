import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import '../App.css';
import KingSglaive from './images/Kingsglaive_Final_Fantasy_XV.jpg'
import Final_Fantasy_Spirits from './images/Final_Fantasy_Spirits_Within.jpg'
import GhostInTheShell from './images/Ghost_In_The_Shell_2_0.jpg'
import Applessed_Alpha from './images/Appleseed_Alpha.jpg'
import Resident from './images/Resident_Evil_Vendetta.jpg'
class MovieCard extends React.Component {
  render() {
    const { props } = this;
    const { title, subtitle, storyline, imagePath, rating, id } = props.movie;
    console.log(imagePath)
    console.log(Final_Fantasy_Spirits)
    console.log(GhostInTheShell)
    console.log(KingSglaive)
    console.log(Resident)
    return (
      <div className="movie-card movie-card-body" data-testid="movie-card">
        <h4 className="movie-card-title" data-testid="movie-card-title">{title}</h4>
        <h5 className="movie-card-subtitle">{subtitle}</h5>
        <p className="movie-card-storyline">{storyline}</p>
        <img src={ imagePath } alt="" className="movie-card-image" />
        <Link to={ `/movies/${id}` } className="link-button"> More info </Link>
        <Rating rating={ rating } />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.string,
    id: PropTypes.number,

  }).isRequired,
};

export default MovieCard;
