import React from 'react'
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import logoWebSite from '../../assets/images';
export default function Header() {
  return (
    <div>
    <img src={logoWebSite.logo} alt="logo" className={styles.logo} />
    </div>
  )
}
