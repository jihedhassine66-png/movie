import React from 'react';
import Card from 'react-bootstrap/Card';

const MovieCard = ({ posterUrl, title, description, rating }) => {
  return (
    <Card className="card">
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <Card.Img variant="top" src={posterUrl} className="card-img-top" />
        <div className="rating-badge">
          ★ {rating}
        </div>
      </div>
      <Card.Body className="card-body">
        <Card.Title className="card-title">{title}</Card.Title>
        <Card.Text className="card-text">
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

MovieCard.defaultProps = {
  posterUrl: 'https://via.placeholder.com/200x300?text=No+Image',
  title: 'Untitled Movie',
  description: 'No description available.',
  rating: 0
};

export default MovieCard;