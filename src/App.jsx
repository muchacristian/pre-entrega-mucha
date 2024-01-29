
import styles from './app.module.css'

import React from 'react'
import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/Contenedor/ItemListContainer'

const App = () =>  {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={'Tienda de Guitarras'}/>
    </>
  )
}

export default App
