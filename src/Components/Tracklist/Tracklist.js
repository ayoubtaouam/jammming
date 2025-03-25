import ListGroup from 'react-bootstrap/ListGroup';
import Track from "../Track/Track";
import Card from 'react-bootstrap/Card';

function Tracklist({tracks, playlist, setPlaylist}) {
    return (
        <Card className='bg-success text-light bg-opacity-75'>
            <Card.Header className='fw-bolder fs-2'>List of Tracks</Card.Header>
            <ListGroup variant='flush'>
                {
                    tracks.map((track, i) => <Track key={i} track={track} playlist={playlist} setPlaylist={setPlaylist} />)
                }
            </ListGroup>
        </Card>
    );
}

export default Tracklist;