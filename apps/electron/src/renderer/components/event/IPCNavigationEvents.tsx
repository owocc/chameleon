import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import channels from '../../../shared/lib/ipc-channels'

function IPCNavigationEvents() {
  //   const navigate = useNavigate()
  //   useEffect(() => {
  //     function goToLibrary() {
  //       navigate('/library')
  //     }
  //     function goToPlaylists() {
  //       navigate('/library')
  //     }
  //     function goToPlayingTrack() {
  //       playerAPI.jumpToPlayingTrack()
  //     }
  //     // Shortcuts from the application menu
  //     ipcRenderer.on(channels.MENU_GO_TO_LIBRARY, goToLibrary)
  //     ipcRenderer.on(channels.MENU_GO_TO_PLAYLISTS, goToPlaylists)
  //     ipcRenderer.on(channels.MENU_JUMP_TO_PLAYING_TRACK, goToPlayingTrack)
  //   }, [navigate])
}
