import React from 'react'
import {Link} from 'react-router-dom'
import '../css/Section3.css'

function Section3() {
  return (
    <section className="section3">
        <div className="grid-container mt">
            <div className="grid-box">
                <h3>Insurance</h3>
                <p>We’ll shop for your insurance so it’s in one convenient place.</p>
                <ul>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" class="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg><span>Protect your home and yourself</span>
                    </li>

                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" class="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                    </svg><span>Find savings on home, auto, life insurance, and more</span>
                    </li>
                </ul>
            
                <img src="https://better.com/_next/image?url=https%3A%2F%2Fmedia.better.com%2Fbetter-com%2F1657754577101%2Fbetter-cover.jpg&w=640&q=75" alt="" />
                <Link to="#" className='btn-green-full'>Connect with an agent</Link>

            </div>


            <div className="grid-box">
            <h3>Home Card</h3>
            <p>Get up to $50,000 to use on moving, renovations, furniture & more.</p>
            <ul>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" class="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                  </svg><span>Low fixed rates starting at 8% APR⁴</span>
                </li>

                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" class="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                   <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                 </svg><span>Use only what you need</span>
                 </li>

                 <li>
                    <svg xmlns="http://www.w3.org/2000/svg" class="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                   <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                 </svg><span>Applying won’t affect your mortgage</span>
                 </li>

            </ul>
           
            <img src="https://better.com/_next/image?url=https%3A%2F%2Fmedia.better.com%2Fbetter-com%2F1657754577101%2Fhome-card.jpg&w=640&q=75" alt="" />
            <Link to="#" className='btn-green-full'>Connect with an agent</Link>

        </div>


        <div className="grid-box">
            <h3>Sell your home for free</h3>
            <p>Buy, sell, and finance to save thousands with our 0% listing fee.¹</p>
            <ul>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" class="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                  </svg><span>Buy before you sell</span>
                </li>

                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" class="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                   <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                 </svg><span>Stress-free homebuying</span>
                 </li>

                 <li>
                    <svg xmlns="http://www.w3.org/2000/svg" class="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                   <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                 </svg><span>Partner with expert local agents</span>
                 </li>

            </ul>
           
            <img src="https://better.com/_next/image?url=https%3A%2F%2Fmedia.better.com%2Fbetter-com%2F1657754577101%2Ffor-sale-sign.jpg&w=640&q=75" alt="" />
            <Link to="#" className='btn-green-full'>Connect with an agent</Link>

        </div>
        </div>
    </section>
  )
}

export default Section3