import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FormControl, FormGroup } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import { useEffect, useState } from 'react';

function SearchBar({setTracklist, keyword ,setKeyword}) {
    const [accessToken, setAccessToken] = useState('');

    const getAccessToken = async () => {
        const accessTokenRef = await fetch('https://accounts.spotify.com/api/token', {
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        },
                        body: new URLSearchParams({
                            'grant_type': 'client_credentials', 
                            'client_id': '',
                            'client_secret': '' 
                        })
                    })
                    if (accessTokenRef.ok) {
                        const jsonResponse = await accessTokenRef.json();
                        setAccessToken(jsonResponse["access_token"]);
                    }
    }

    useEffect(() => {
        if(!accessToken){
            getAccessToken();
        }
    }, [accessToken])

    const handleChange = ({target}) => {
        setKeyword(target.value);
    }
    
    const fetchData = async () => {
        const url = `https://api.spotify.com/v1/search?q=${encodeURIComponent(keyword)}&type=track`;
        try {
                const response = await fetch(url, {headers: {Authorization: `Bearer ${accessToken}`}});
                if (response.status === 401) {
                    const newtoken = await getAccessToken();
                    const retryFetch = await fetch(url, {headers: {Authorization: `Bearer ${newtoken}`}});
                    if (retryFetch.ok) {
                        const json = await retryFetch.json();
                        setTracklist(json.tracks.items);
                    }
                }
                else if (response.ok) {
                    const jsonResponse = await response.json();
                    const tracklist = jsonResponse.tracks.items;
                    setTracklist(tracklist)
                    console.log(tracklist);
                }
            } catch (error) {
                console.log(error.message);
            }
    }

    const isKeywordEmpty = !keyword;
    
    return (
            <div className='d-flex justify-content-center align-items-center pt-5'>
                <Form className='w-50'>
                    <FormGroup>
                        <InputGroup>
                            <FormControl onChange={handleChange} type='text' placeholder='Dyask' />
                            <Button onClick={fetchData} variant='success' disabled={isKeywordEmpty} >Search</Button>
                        </InputGroup>
                    </FormGroup>
                </Form>
            </div>
    );
}

export default SearchBar;