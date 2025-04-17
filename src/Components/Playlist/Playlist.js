import { Card, ListGroup, Button, ListGroupItem, Form, FormControl } from "react-bootstrap";
import PlaylistTrack from "../PlaylistTrack/PlaylistTrack";
import './PlaylistStyles.css';
import { useState } from "react";

function Playlist({playlist, setPlaylist, userId, accessToken}) {

    const [playlistName, setPlaylistName] = useState('');
    const uris = playlist.map(track => track.uri);

    const handleChange = ({target}) => {
        setPlaylistName(target.value);
    }
    const savePlaylist = async () => {
        try {
            const response = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`,
            {
                method: 'POST',
                headers: {Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: playlistName,
                    description: 'Playlist created by jammming',
                    public: false
                })
            }
            );
            if (response.ok) {
                const responseJson = await response.json();
                const playlistId = responseJson.id;
                const addTracks = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
                {
                    method: 'POST',
                    headers: {Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        uris,
                        position: 0
                    })
                }
                );
                if (addTracks.ok) {
                    const playlistResponse = await addTracks.json();
                    console.log(playlistResponse);
                }
            }
        } catch(error) {
            console.log(error.message);
        }
    }

    const handleClick = async () => {
        await savePlaylist();
        setPlaylist([]);
    }

    return (
        <Card className="bg-success text-light bg-opacity-75">
            <Card.Header className="">
                <Form>
                    <FormControl type="text" 
                                 onChange={handleChange}
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