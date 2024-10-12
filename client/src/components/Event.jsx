import React, { useState, useEffect } from 'react'
import '../css/Event.css'
import { getEventsById } from '../services/EventsAPI'

const Event = ({ title, date, time, image }) => {
  const [event, setEvent] = useState([])

  return (
    <article className='event-information'>
      <img src={image} />

      <div className='event-information-overlay'>
        <div className='text'>
          <h3>{title}</h3>
          <p><i className="fa-regular fa-calendar fa-bounce"></i> {date} <br /> {time}</p>
        </div>
      </div>
    </article>
  )
}

export default Event