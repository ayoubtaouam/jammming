import ListGroup from 'react-bootstrap/ListGroup';
import Track from "../Track/Track";
import Card from 'react-bootstrap/Card';

function Tracklist({tracks}) {
    return (
        <Card className='bg-success text-light bg-opacity-75'>
            <Card.Header className='fw-bolder fs-2'>List of Tracks</Card.Header>
            <ListGroup variant='flush'>
                {
                    tracks.map((track, i) => <Track key={i} track={track} />)
                }
            </ListGroup>
        </Card>
    );
}

export default Tracklist;