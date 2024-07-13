import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import CountContext from './components/ContextCount.jsx'
import { RecoilCount } from './components/RecoilCount.jsx'
import { RecoilRoot } from 'recoil'
import { Linkedin } from './components/LinkedIn.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <CountContext/>
    <RecoilRoot> 
        <RecoilCount />

    </RecoilRoot>
    <RecoilRoot>

       <Linkedin />
    </RecoilRoot>
  </React.StrictMode>
)

