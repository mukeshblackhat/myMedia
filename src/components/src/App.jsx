"use client";
import { useState } from 'react'
import Home from './Home'
import Profile from './Profile'
import styles from "../styles/app.module.css";

function App() {
  return (
    <>
    <div className={styles.flexContainer}>
      <div className={styles.topBar}>
        <div className={styles.navbarText}>MyMedia</div>
        {/* <div className={styles.lightModeText}>light mode</div> */}
      </div>
      <Home />
    </div>
  </>
  )
}

export default App
