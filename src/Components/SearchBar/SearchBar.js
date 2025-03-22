import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FormControl, FormGroup } from 'react-bootstrap';

function SearchBar() {
    return (
            <div className='p-5'>
                <Form>
                    <FormGroup>
                        <FormControl type='text' placeholder='Dyask' />
                    </FormGroup>
                </Form>
                <Button>Search</Button>
            </div>
    );
}

export default SearchBar;