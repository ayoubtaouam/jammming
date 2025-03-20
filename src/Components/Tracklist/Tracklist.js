import Track from "../Track/Track";

function Tracklist({tracks}) {
    return (
        <div>
            {
                tracks.map((track, i) => <Track key={i} track={track} />)
            }
        </div>
    );
}

export default Tracklist;