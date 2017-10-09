var playlist = new Object({ CCR: 'Cotton Fields' })

function updatePlaylist(playlist, artistName, songTitle) {
   playlist[artistName] = songTitle
  return playlist
}
