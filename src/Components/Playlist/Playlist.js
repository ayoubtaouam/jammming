import { Card, ListGroup } from "react-bootstrap";
import Track from "../Track/Track";

function Playlist({tracks}) {
    return (
        <Card>
            <Card.Header></Card.Header>
            <ListGroup>
                {
                    tracks.map((t, i) => <Track key={i} track={t} />)
                }
            </ListGroup>
        </Card>
    )
}

export default Playlist;