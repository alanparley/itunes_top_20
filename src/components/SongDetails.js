import Song from './Song'

const SongDetails = ({ songs, loaded }) => {

    if (!loaded) {
        return <p> loading...</p>
    }

    const songList = songs.map((song) => {
        return (
            <Song song={song} />
        )
    })


    return (
        <>
            <p>{songList}</p>

        </>
    )
}

export default SongDetails;