const songs = [
  {
    title: "Song One",
    artist: "Artist A",
    file: "songs/song1.mp3"
  },
  {
    title: "Song Two",
    artist: "Artist B",
    file: "songs/song2.mp3"
  },
  {
    title: "Song Three",
    artist: "Artist C",
    file: "songs/song3.mp3"
  }
];

let currentIndex = 0;
const audio = document.getElementById('audio');
const titleEl = document.getElementById('song-title');
const artistEl = document.getElementById('song-artist');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const playlistEl = document.getElementById('playlist');

// Load song
function loadSong(index) {
  const song = songs[index];
  audio.src = song.file;
  titleEl.textContent = song.title;
  artistEl.textContent = song.artist;
}

// Play or pause
playBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = '⏸️';
  } else {
    audio.pause();
    playBtn.textContent = '▶️';
  }
});

// Next
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % songs.length;
  loadSong(currentIndex);
  audio.play();
  playBtn.textContent = '⏸️';
});

// Previous
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + songs.length) % songs.length;
  loadSong(currentIndex);
  audio.play();
  playBtn.textContent = '⏸️';
});

// Playlist rendering
songs.forEach((song, index) => {
  const li = document.createElement('li');
  li.textContent = `${song.title} - ${song.artist}`;
  li.addEventListener('click', () => {
    currentIndex = index;
    loadSong(index);
    audio.play();
    playBtn.textContent = '⏸️';
  });
  playlistEl.appendChild(li);
});
