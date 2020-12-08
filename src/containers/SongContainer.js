import { useEffect, useState } from 'react';
import SongDetails from '../components/SongDetails'


const SongContainer = () => {

    const [songs, setSongs] = useState({});
    const [loaded, setLoaded] = useState(false);

    const getSongs = () => {
        fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
            .then(res => res.json())
            .then(data => setSongs(data.feed.entry))
            .then(() => setLoaded(true))
    }

    useEffect(() => {
        getSongs();
    }, []);

    return (
        <>
            <h1>here are the songs</h1>
            <SongDetails
                songs={songs}
                loaded={loaded} />
        </>
    )
}

export default SongContainer;