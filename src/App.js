import Button from 'react-bootstrap/Button';
import Tracklist from './Components/Tracklist/Tracklist';
import SearchBar from './Components/SearchBar/SearchBar';
import Header from './Components/Header/Header';


const tracks = [
  {
    title: 'sifawani',
    artist: 'chlmona',
    album: 'khloe'
  },
  {
    title: 'sifawani',
    artist: 'chlmona',
    album: 'khloe'
  },
  {
    title: 'sifawani',
    artist: 'chlmona',
    album: 'khloe'
  },
  {
    title: 'sifawani',
    artist: 'chlmona',
    album: 'khloe'
  },
  {
    title: 'sifawani',
    artist: 'chlmona',
    album: 'khloe'
  },
  {
    title: 'sifawani',
    artist: 'chlmona',
    album: 'khloe'
  },
  {
    title: 'sifawani',
    artist: 'chlmona',
    album: 'khloe'
  },
  {
    title: 'sifawani',
    artist: 'chlmona',
    album: 'khloe'
  },
  {
    title: 'sifawani',
    artist: 'chlmona',
    album: 'khloe'
  },
  {
    title: 'sifawani',
    artist: 'chlmona',
    album: 'khloe'
  }
]

function App() {
  return (
    <>
      <Header />
      <SearchBar />
      <Tracklist tracks={tracks} />
    </>
  );
}

export default App;
