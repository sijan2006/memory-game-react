import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Gamestart from './components/game.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Gamestart />

  </StrictMode>,
)
