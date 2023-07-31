"use client";
import { useState } from 'react'
import Home from './Home'
import Profile from './Profile'
import styles from "../styles/app.module.css";
import Link from 'next/link';

function App() {
  return (
    <>
    <div className={styles.flexContainer}>
      <div className={styles.topBar}>
        <Link className={styles.linkClass} href='/'>
        <div className={styles.navbarText}>MyMedia</div>
        </Link>
        {/* <div className={styles.lightModeText}>light mode</div> */}
      </div>
   
      <Home />
    </div>
  </>
  )
}

export default App
