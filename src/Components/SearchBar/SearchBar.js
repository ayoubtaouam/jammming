import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FormControl, FormGroup } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';

function SearchBar() {
    return (
            <div className='d-flex justify-content-center align-items-center pt-5'>
                <Form className='w-50'>
                    <FormGroup>
                        <InputGroup>
                            <FormControl type='text' placeholder='Dyask' />
                            <Button>Search</Button>
                        </InputGroup>
                    </FormGroup>
                </Form>
            </div>
    );
}

export default SearchBar;