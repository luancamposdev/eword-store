import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyles from './styles/GlobalStyles'
import Router from './routes/routes'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <BrowserRouter>
        <Router />
        <GlobalStyles />
    </BrowserRouter>
)
