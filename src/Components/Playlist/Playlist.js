import { Card, ListGroup, Button, ListGroupItem, Form, FormControl } from "react-bootstrap";
import PlaylistTrack from "../PlaylistTrack/PlaylistTrack";
import './PlaylistStyles.css';
//import { useEffect } from "react";

function Playlist({playlist, setPlaylist, username, setUsername, accessToken}) {
    // const fetchUsername = async () => {
    //     try {
    //         const response  = await fetch('https://api.spotify.com/v1/me', {headers: {Authorization: `Bearer ${accessToken}`}})
    //         if (response.ok) {
    //             const responseJson = await response.json();
    //             setUsername(responseJson["display_name"]);
    //             console.log(username);
    //         }
    //     } catch(error) {
    //         console.log(error.message);
    //     }
        
    // }
    // useEffect(() => {
    //     fetchUsername();
    // })
    const handleClick = () => {
        setPlaylist([]);
    }

    return (
        <Card className="bg-success text-light bg-opacity-75">
            <Card.Header className="">
                <Form>
                    <FormControl type="text" 
                                 placeholder="Playlist name..." 
                                 className="bg-success bg-opacity-10 p-0 border border-0 text-light fw-bolder fs-2 focus-ring focus-ring-success custom-placeholder"></FormControl>
                </Form>
            </Card.Header>
            <ListGroup variant="flush">
                {
                    playlist.map((t, i) => <PlaylistTrack key={i} track={t} setPlaylist={setPlaylist} />)
                }
            </ListGroup>
            <ListGroupItem className="bg-success border border-0 d-flex justify-content-center p-3">
                <Button onClick={handleClick} variant="light" className="text-success" size="lg">Save your playlist</Button>
            </ListGroupItem>
        </Card>
    )
}

export default Playlist;