const Song = ({ song }) => {

    return (
        <li>
            <h2>Title: {song["im:name"].label}</h2>
            <h3>Artist: {song["im:artist"].label}</h3>
            <img src={song['im:image'].label}></img>

        </li >
    )
}
export default Song