import React from 'react'
import '../css/Section4.css'
import {Link} from 'react-router-dom'

function Section4() {
 const onSubmit = (e) => {
     e.preventDefault()
     console.log('button clicked')
 }
  return (
    <section className="section4">
        <div className="section4-bannier">
            <p>Buying a new home? Increase your odds of a winning bid with our cash offer.</p>
            <Link to="#">Learn more</Link>
        </div>
        <div className="section4-grid">
             <div className="section4-grid-form">
                <h3 className='section4-h3'>Find the rate that’s right for you</h3>
                <p className='section4-p'>Compare today’s local rates, then choose the one you want</p>
                 <div className="section4-grid-form-box">
                    <p>Hey, we currently don’t have service in your area.
                         We will notify you when we are there.</p>
                    <form action="" onSubmit={onSubmit}>
                        <input type="text" placeholder='Email' />
                        <button className='submit-button'>Add email</button>
                    </form>
                 </div>
                 <Link to="#" className='btn-green-full-sm'>Personalize rate</Link>
             </div>
             <div className="section4-grid-img">
                <img src="https://media.better.com/pages/homepage/people-homes%20-%20people%20img.jpg" alt="" />
             </div>
        </div>
    </section>
  )
}

export default Section4