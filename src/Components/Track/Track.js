import { CardBody } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function Track({track}) {
    return (
        <Card bg='success' text='white' className='m-2'>
            <Card.Img />
            <CardBody>
                <Card.Title>{track.title}</Card.Title>
                <Card.Text>{track.artist}</Card.Text>
                <Card.Text>{track.album}</Card.Text>
            </CardBody>
        </Card>
    );
}

export default Track;