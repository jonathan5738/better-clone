import React from 'react'
import {Link} from 'react-router-dom'
import '../css/Section1.css'
function Section1() {
  return (
    <section className="section1">
        <div className="grid-container">
        <div className="grid-box">
            <h3>Cash Offer</h3>
            <p>We bring the cash, you buy the home.</p>
            <ul>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" class="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                  </svg><span>Cash buyers are 4x more likely to win a bidding war</span>
                </li>

                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" class="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                   <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                 </svg><span>Save more by listing your home for free with Better Real Estate¹</span>
                 </li>
            </ul>
           
            <img src="https://better.com/_next/image?url=https%3A%2F%2Fmedia.better.com%2Fbetter-com%2F1657754577101%2Fhouse.jpg&w=640&q=75" alt="" />
            <Link to="#" className='btn-green-full'>Connect with an agent</Link>

        </div>

        <div className="grid-box">
            <h3>Mortgage loans</h3>
            <p>Low rates. Save thousands. Close fast.</p>
            <ul>
                <li><svg xmlns="http://www.w3.org/2000/svg" class="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
</svg>Look Before You Lock™</li>
                <li> <svg xmlns="http://www.w3.org/2000/svg" class="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
           </svg><span>Zero lender fees or commissions</span></li>

                <li><svg xmlns="http://www.w3.org/2000/svg" class="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
             </svg><span>24/7 support until you close</span></li>
            </ul>
              <img src="https://better.com/_next/image?url=https%3A%2F%2Fmedia.better.com%2Fbetter-com%2F1657754577101%2Fspokesperson.jpg&w=640&q=75" alt="" />
              <Link to="#" className='btn-green-full'>Get pre-approved</Link>
           
        </div>


        <div className="grid-box">
            <h3>Mortgage loans</h3>
            <p>Low rates. Save thousands. Close fast.</p>
            <ul>
                <li> <svg xmlns="http://www.w3.org/2000/svg" class="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
           </svg><span>$2k off Better Mortgage closing costs²</span></li>

                <li><svg xmlns="http://www.w3.org/2000/svg" class="check-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
             </svg><span>Non-commissioned Agents will find the best home, not the biggest one</span></li>
             
            </ul>
            
            <img src="https://better.com/_next/image?url=https%3A%2F%2Fmedia.better.com%2Fbetter-com%2F1657754577101%2Fcash-bag.jpg&w=640&q=75" alt="" />
            <Link to="#" className='btn-green-full'>Learn about Cash Offer</Link>
        </div>
        </div>
    </section>
  )
}

export default Section1