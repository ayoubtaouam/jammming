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
      <div className='bg-success-subtle'>
        <SearchBar />
        <div className='w-2 d-inline'>
          <Tracklist tracks={tracks} />
        </div>
        <div className='d-inline'>

        </div>
      </div>
    </>
  );
}

export default App;
