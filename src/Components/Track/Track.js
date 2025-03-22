import ListGroup from 'react-bootstrap/ListGroup';

function Track({track}) {
    return (
        <ListGroup.Item className='bg-success text-white'>
            <div className='d-flex flex-row justify-content-between'>
                <div className='m-2 h-100'>
                    <p className='fw-semibold m-1 fs-4'>{track.title}</p>
                    <p className='fw-medium m-1 d-inline'>{track.artist}</p>
                    <p className='fw-light m-1 d-inline'>{track.album}</p>
                </div>
                <div>
                    <p className='fs-1 user-select-none'>+</p>
                </div>
            </div>

        </ListGroup.Item>
    );
}

export default Track;