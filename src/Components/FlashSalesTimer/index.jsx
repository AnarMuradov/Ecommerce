import React, { useEffect, useState } from 'react'
import './style.scss'
const Timer = ({skidka}) => {
    const [time, setTime] = useState(0)

  useEffect(() => {
    setTimeout(()=>setTime(new Date(skidka).getTime() - new Date().getTime()),1000)
  }, [time,skidka])

  function toDays() {
    return Math.floor(time / (1000 * 60 * 60 * 24));
  }
  function toHours() {
    return Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  }
  function toMinutes() {
    return Math.floor((time% (1000 * 60 * 60)) / (1000 * 60));
  }
  function toSeconds() {
    return Math.floor((time % (1000 * 60)) / 1000);
  }

  return (
 
            <div className="time">
              <div className="time__box">
                <span className="time__name">Days</span>
                <span className="time__number">{toDays()}</span>
              </div>
              <div className="time__colon">:</div>
              <div className="time__box">
                <span className="time__name">Hours</span>
                <span className="time__number">{toHours()}</span>
              </div>
              <div className="time__colon">:</div>
              <div className="time__box">
                <span className="time__name">Minutes</span>
                <span className="time__number">{toMinutes()}</span>
              </div>
              <div className="time__colon">:</div>
              <div className="time__box">
                <span className="time__name">Seconds</span>
                <span className="time__number">{toSeconds()}</span>
              </div>
            </div>
    

  )
}

export default Timer