import ListGroup from 'react-bootstrap/ListGroup';

function Track({track, playlist, setPlaylist}) {

    const handleClick = () => {
        if (!playlist.includes(track)) {
            setPlaylist((prev) => [...prev, track]);
        }
    }

    return (
        <ListGroup.Item className='bg-success text-white'>
            <div className='d-flex flex-row justify-content-between'>
                <div className='m-2 h-100'>
                    <p className='fw-semibold m-1 fs-4'>{track.name}</p>
                    <p className='fw-medium m-1 d-inline'>{track.artists.map(artist => artist.name).join(", ")}</p>
                    <p className='fw-light m-1 d-inline'>{track.album.name}</p>
                </div>
                <div>
                    <p onClick={handleClick} className='fs-1 user-select-none'>+</p>
                </div>
            </div>

        </ListGroup.Item>
    );
}

export default Track;