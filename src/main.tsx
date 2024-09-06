import './styles/global.css'
import { StrictMode } from 'react'
import { Blog } from './screens/Blog'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Blog />
  </StrictMode>,
)
