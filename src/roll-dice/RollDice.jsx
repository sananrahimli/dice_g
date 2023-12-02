import React, { useState } from 'react'
import styles from "./rolldice.module.scss";
import dice1 from './images/one.svg';
import dice2 from './images/two.svg';
import dice3 from './images/three.svg';
import dice4 from './images/four.svg';
import dice5 from './images/five.svg';
import dice6 from './images/six.svg';
import Modal from './Modal';

const RollDice = () => {
    const costi = [
      {id:1, name:'Bir', xal: 1, img: dice1},
      {id:2, name:'Iki', xal: 2, img: dice2},
      {id:3, name:'Uc', xal: 3, img: dice3},
      {id:4, name:'Dord', xal: 4, img: dice4},
      {id:5, name:'Besh', xal: 5, img: dice5},
      {id:6, name:'Alti', xal: 6, img: dice6},
    ]


    const [oyuncu, setOyuncu] = useState(costi[0])
    const [bot, setBot] = useState(costi[0])
    const [result, setResult] = useState([])
    const [status, setStatus] = useState('')



    const oyunaBashla = ()=>{
      const randomOyuncu = Math.floor(Math.random() * costi.length);
      setOyuncu(costi[randomOyuncu])
      const randomBot = Math.floor(Math.random() * costi.length);
      setBot(costi[randomBot])


      const audio = new Audio("https://bit.ly/dice-sound");
      audio.play();
      


      let newResult = [...result];

      if(costi[randomOyuncu].xal === costi[randomBot].xal) {
        const allWin =   <div>Hec hece! Bot: <img src={costi[randomBot].img} alt={costi[randomBot].name} titile={costi[randomBot].name} /> x Oyunçu: <img src={costi[randomOyuncu].img} alt={costi[randomOyuncu].name}  title={costi[randomOyuncu].name} /></div>
        setStatus(allWin);
        newResult.push(allWin);
      } else if (costi[randomOyuncu].xal > costi[randomBot].xal) {
        const userWIn = <div> Oyunçu galibdi! Xalı: <img src={costi[randomBot].img} alt={costi[randomBot].name} title={costi[randomBot].name} /> x Oyunçu: <img src={costi[randomOyuncu].img} alt={costi[randomOyuncu].name} title={costi[randomOyuncu].name} /></div>
        setStatus(userWIn)
        newResult.push(userWIn);

      } else if (costi[randomOyuncu].xal < costi[randomBot].xal) {
        const botWin = <div>Bot galibdi! Xalı: <img src={costi[randomBot].img} alt={costi[randomBot].name} title={costi[randomBot].name} /> x Oyunçu: <img src={costi[randomOyuncu].img} alt={costi[randomOyuncu].name} title={costi[randomOyuncu].name} /></div>
        setStatus(botWin)
        newResult.push(botWin);
        
      }




      // Cedvele Elave
      setResult(newResult)

    }

    const oyunuYenile = ()=>{
      setResult([]);
      setOyuncu(costi[0])
      setBot(costi[0])
      setStatus('')
    }



  return (
    <>
    <Modal text={status}/>
    <div className={styles.box}>
    <h1>Zər oyunu 🎲</h1>

    <div className={`${styles.game}`}>
    <div className={`${styles.flex} ${styles.dices}`}>
        <div className={styles.user}>
            <p>User</p>
            <img src={oyuncu.img} />
        </div>
        <div className={styles.bot}>            
          <p>Bot</p>
            <img src={bot.img} />
        </div>
    </div>
    <div className={styles.buttons}>
        <button className={styles.start} onClick={oyunaBashla} >Oyuna başla</button>
        <button className={styles.restart} onClick={oyunuYenile}  >Oyunu yenilə</button>
    </div>    
    <div className={styles.history}>
      <h2>Oyun cədvəli:</h2>
      <ul className={styles.flex}>
        {result.map((i,index)=>(
          <li key={index}>
              {i}
          </li>
        ))}
      </ul>
    </div>
    </div>
    </div>
    </>
  )
}

export default RollDice
