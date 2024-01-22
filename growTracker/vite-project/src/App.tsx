import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Router from './features/global/router/Router'
import { Provider } from 'react-redux'
import { store } from './store/store'

function App() {

  return (
    <>
    <Provider store={store}>
    <Router/>

    </Provider>
   
    </>
  )
}

export default App
