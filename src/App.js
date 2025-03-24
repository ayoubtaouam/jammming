import Tracklist from './Components/Tracklist/Tracklist';
import SearchBar from './Components/SearchBar/SearchBar';
import Header from './Components/Header/Header';
import Playlist from './Components/Playlist/Playlist';


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
      <div className='bg-success-subtle'>
        <SearchBar />
        <div className='p-5 d-flex justify-content-between'>
          <div className='w-50 p-5'>
            <Tracklist tracks={tracks} />
          </div>
          <div className='w-50 p-5'>
            <Playlist tracks={tracks} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
