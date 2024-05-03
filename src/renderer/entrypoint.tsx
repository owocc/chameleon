import '../shared/themes/main.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import AppleLayout from './layouts/macos/MacosLayout'
import router from './views/router'
// const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppleLayout>
      <RouterProvider router={router} />
    </AppleLayout>
  </React.StrictMode>
)
