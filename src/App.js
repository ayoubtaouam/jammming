import Tracklist from './Components/Tracklist/Tracklist';
import SearchBar from './Components/SearchBar/SearchBar';
import Header from './Components/Header/Header';
import Playlist from './Components/Playlist/Playlist';
import Callback from './Components/Callback/Callback';
import Login from './Components/Login/Login';
import { useState } from 'react';


function App() {
  const [playlist, setPlaylist] = useState([]);
  const [tracklist, setTracklist] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [username, setUsername] = useState('');
  const [accessToken, setAccessToken] = useState('');

  const isLoggedIn = !!accessToken;
  
  if (window.location.pathname === '/callback' && accessToken === '') {
    return <Callback setAccessToken={setAccessToken} />
  }
  return (
    <>
      <Header />
      <div className={`bg-success bg-opacity-50 ${!tracklist.length ? 'vh-100' : ''}`}>
        {!isLoggedIn ? (
          <Login/>
        ) : 
        (<>
          <SearchBar setTracklist={setTracklist} keyword={keyword} setKeyword={setKeyword} setUsername={setUsername} accessToken={accessToken} />
          <div className='p-5 d-flex justify-content-between'>
            <div className='w-50 p-5'>
              <Tracklist playlist={playlist} setPlaylist={setPlaylist} tracks={tracklist} />
            </div>
            <div className='w-50 p-5'>
              <Playlist playlist={playlist} setPlaylist={setPlaylist} username={username} accessToken={accessToken} />
            </div>
          </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
