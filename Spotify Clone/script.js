console.log("Hello Nomo Player")


async function getSongs() {

    let a = await fetch("http://127.0.0.1:5500/Spotify%20Clone/songs")

    let response = await a.text();
    console.log(response);

    let div = document.createElement('div');
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    // console.log(as)

    let songs = []
    let songsTitle = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href)
            songsTitle.push(element.title)
        }
    }
    // console.log(songs)
    return [songs, songsTitle]

}

async function main() {
    //Get the list of all songs
    let [songs, songsTitle] = await getSongs();
    console.log(songs)
    console.log(songsTitle);


    songUL = document.querySelector(".songList").getElementsByTagName("ul")[0]
    for (const title of songsTitle) {
        songUL.innerHTML = songUL.innerHTML + `   <li><img class="invert" src="resources/music.svg" alt="" />
        <div class="info">
            <div class="songName">${title}</div>
            <div class="songArtist">Artist</div>
        </div>  <img class="invert" src="resources/play.svg" alt="" />  
    </li>`;
    }

    //Playing song
    var audio = new Audio(songs[0]);
    // audio.play();
}

main()