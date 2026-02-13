import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
const AddMovie = ({ movies = [], setMovies, setShowAddForm }) => {
//add movie
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [posterUrl, setPosterUrl] = useState('');
    const [rating, setRating] = useState('');
    const handlesubmit = (e) => {
        e.preventDefault();
        const newMovie = {
            id: movies.length + 1,
            title,
            description,
            posterUrl,
            rating
        };
        setMovies([...movies, newMovie]);
        setTitle('');
        setDescription('');
        setPosterUrl('');
        setRating('');
        setShowAddForm(false);
    }


    return (
        <div>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter Movie Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control type="number" placeholder="Enter Movie Rating" value={rating} onChange={(e) => setRating(e.target.value)} />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>posterUrl</Form.Label>
                    <Form.Control placeholder="https://via.placeholder.com/200x300?text=No+Image" value={posterUrl} onChange={(e) => setPosterUrl(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Description</Form.Label>
                    <Form.Control placeholder="Enter Movie Description"  value={description} onChange={(e) => setDescription(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handlesubmit}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default AddMovie;