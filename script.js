const songs = [
  { title: "Bài hát 1", artist: "Nghệ sĩ A", src: "songs/song1.mp3" },
  { title: "Bài hát 2", artist: "Nghệ sĩ B", src: "songs/song2.mp3" },
  { title: "Bài hát 3", artist: "Nghệ sĩ C", src: "songs/song3.mp3" },
  { title: "Bài hát 4", artist: "Nghệ sĩ D", src: "songs/song4.mp3" },
  { title: "Bài hát 5", artist: "Nghệ sĩ E", src: "songs/song5.mp3" }
];

let current = 0;
let isPlaying = false;
const audio = document.getElementById("audio");
const title = document.getElementById("song-title");
const artist = document.getElementById("song-artist");
const playBtn = document.getElementById("play-btn");

function loadSong(index) {
  title.textContent = songs[index].title;
  artist.textContent = songs[index].artist;
  audio.src = songs[index].src;
}

function togglePlay() {
  if (isPlaying) {
    audio.pause();
    playBtn.textContent = "▶️";
  } else {
    audio.play();
    playBtn.textContent = "⏸";
  }
  isPlaying = !isPlaying;
}

function nextSong() {
  current = (current + 1) % songs.length;
  loadSong(current);
  if (isPlaying) audio.play();
}

function prevSong() {
  current = (current - 1 + songs.length) % songs.length;
  loadSong(current);
  if (isPlaying) audio.play();
}

loadSong(current);
