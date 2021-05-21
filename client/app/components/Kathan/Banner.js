import React from 'react'

import "./Banner.css"
export const Banner = () => {
    return (
        <div className="banner">
      <div className="bground">
        <h1>Every developer has a</h1>
        <h1>tab open to Stack Overflow</h1>
        <div className="data">
          <ul>
            <li>
            <h4>100+ million</h4>
              monthly visitors to Stack Overflow & Stack Exchange</li>
            <li>
            <h4>45.1+ billion</h4>
            Times a developer got help since 2008
            </li>
            <li>
            <h4>179% ROI</h4>
            from companies using Stack Overflow for Teams
            </li>
            <li>
            <h4>5,000+</h4>
            Stack Overflow for Teams instances active every day
            </li>
          </ul>
        </div>

      </div>
      
    </div>
    )
}
