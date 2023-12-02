import React from 'react'
import styles from './rolldice.module.scss'

const Modal = ({text}) => {
  return (
    <div>
      { text ? <div className={styles.status}>{text}</div> : '' }
    </div>
  )
}

export default Modal
