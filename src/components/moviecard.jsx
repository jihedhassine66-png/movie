
import React from 'react';
import Card from 'react-bootstrap/Card';

const MovieCard = ({ posterUrl, title, children}) => {
  return (
    <Card className="card">
      <Card.Img variant="top" src={posterUrl} />
      <Card.Body className="card-body">
        <Card.Title className="card-title">{title}</Card.Title>
        <Card.Text className="card-text">
          {children}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
MovieCard.defaultProps = {
  posterUrl: 'https://via.placeholder.com/200x300?text=No+Image',
  title: 'Untitled Movie',
  children: 'No description available.'
};  

export default MovieCard;