import Tracklist from './Components/Tracklist/Tracklist';
import SearchBar from './Components/SearchBar/SearchBar';
import Header from './Components/Header/Header';
import Playlist from './Components/Playlist/Playlist';
import { useState } from 'react';


/*const tracks = [
  {
    title: 'disk1',
    artist: 'chlmona',
    album: 'khloe'
  },
  {
    title: 'disk2',
    artist: 'chlmona',
    album: 'khloe'
  },
  {
    title: 'disk3',
    artist: 'chlmona',
    album: 'khloe'
  },
  {
    title: 'disk4',
    artist: 'chlmona',
    album: 'khloe'
  },
  {
    title: 'disk5',
    artist: 'chlmona',
    album: 'khloe'
  },
  {
    title: 'disk6',
    artist: 'chlmona',
    album: 'khloe'
  },
  {
    title: 'disk7',
    artist: 'chlmona',
    album: 'khloe'
  },
  {
    title: 'disk8',
    artist: 'chlmona',
    album: 'khloe'
  },
  {
    title: 'disk9',
    artist: 'chlmona',
    album: 'khloe'
  },
  {
    title: 'disk10',
    artist: 'chlmona',
    album: 'khloe'
  }
]*/

function App() {
  const [playlist, setPlaylist] = useState([]);
  const [tracklist, setTracklist] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [username, setUsername] = useState('');
  const [accessToken, setAccessToken] = useState('');
  return (
    <>
      <Header />
      <div className={`bg-success bg-opacity-50 ${!tracklist.length ? 'vh-100' : ''}`}>
        <SearchBar setTracklist={setTracklist} keyword={keyword} setKeyword={setKeyword} setUsername={setUsername} accessToken={accessToken} setAccessToken={setAccessToken} />
        <div className='p-5 d-flex justify-content-between'>
          <div className='w-50 p-5'>
            <Tracklist playlist={playlist} setPlaylist={setPlaylist} tracks={tracklist} />
          </div>
          <div className='w-50 p-5'>
            <Playlist playlist={playlist} setPlaylist={setPlaylist} username={username} accessToken={accessToken} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
