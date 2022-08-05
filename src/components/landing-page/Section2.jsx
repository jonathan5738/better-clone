import React from 'react'
import '../css/Section2.css'

function Section2() {
  return (
    <section className="section2">
        <div className="section2-text">
             <h2>All-in-one is Better</h2>
             <p>We’re streamlining and simplifying how you find, buy, sell, refinance, and close a loan.
                 We’ll even give you $2,000 if we don’t close on time — that’s our Better Guarantee.³</p>
        </div>
        <div className="section2-box">
            <div className="section2-box1 full-card">
                <h3>Better+</h3>
                <ul>
                    <li>Better Cover | Insurance</li>
                    <li>Better Settlement Services | Title and Closing</li>
                </ul>
            </div>

            <div className="section2-box1 transp-card">
                <h3>Home Card</h3>
                <ul>
                    <li>Fund home improvements</li>
                    <li>Lower APR than personal loans</li>
                    <li>Only pay on what you spend</li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Section2