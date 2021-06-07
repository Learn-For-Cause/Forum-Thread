import React from "react";
import {useState, useEffect} from 'react';
import  "../BelowHeader/styleBelowHeader.scss"

const BelowHeader = () => {
    const arr = ["developer","data scientist", "system admin","mobile developer", "game developer"];
    var increaseByOne = 1;
    const [name, setName] = useState(arr[0]);
  useEffect(() => {
    
    const timer = setInterval(() => {
      setName(arr[increaseByOne%arr.length]);
      increaseByOne++;
    }, 2000);

    // Clearing the timer when component unmounts
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <div className="main-container">
        <div className="second-container">
          <div className="card-first">
            <div className="card-body">
            <svg  className="svg-first" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path d="M23.111 20.058l-4.977-4.977c.965-1.52 1.523-3.322 1.523-5.251 0-5.42-4.409-9.83-9.829-9.83-5.42 0-9.828 4.41-9.828 9.83s4.408 9.83 9.829 9.83c1.834 0 3.552-.505 5.022-1.383l5.021 5.021c2.144 2.141 5.384-1.096 3.239-3.24zm-20.064-10.228c0-3.739 3.043-6.782 6.782-6.782s6.782 3.042 6.782 6.782-3.043 6.782-6.782 6.782-6.782-3.043-6.782-6.782zm2.01-1.764c1.984-4.599 8.664-4.066 9.922.749-2.534-2.974-6.993-3.294-9.922-.749z"/></svg>
              <p className="card-text">
              Find the best answer to your technical question, help others answer theirs
              </p>
              <a href="#" className="card-link-1">
                Join the community
              </a>
              <div className="link-in-card-1">or <u><a href="#">search content</a></u></div>
              
             
            </div>

          </div>

          <div className="card-two">
            <div className="card-body">
            <svg className="svg-second" width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10 16c0-1.104.896-2 2-2s2 .896 2 2c0 .738-.404 1.376-1 1.723v2.277h-2v-2.277c-.596-.347-1-.985-1-1.723zm11-6v14h-18v-14h3v-4c0-3.313 2.687-6 6-6s6 2.687 6 6v4h3zm-13 0h8v-4c0-2.206-1.795-4-4-4s-4 1.794-4 4v4zm11 2h-14v10h14v-10z"/></svg>
              <p className="card-text">
              Want a secure, private space for your technical knowledge?
              </p>
              <a href="#" className="card-link-2">
                Create a free Team
              </a>
              <div className="link-in-card-2">or <u><a href="#">discover Teams</a></u></div>
              
            </div>
          </div>
        </div>
        <div className="third-container">
          <h1>Every <div className="changing-text slide-in slide-out">{name}</div> has a</h1><h1>tab open to Stack Overflow</h1>
        </div>
        <div className="fourth-container">
          <div className="first-box">
            <div className="first-box-first-div">100+ million</div>
            <div className="first-box-second-div">monthly visitors to Stack Overflow & Stack Exchange</div>
          </div>
          <div className="first-box">
            <div className="first-box-first-div">45.1+ billion</div>
            <div className="first-box-second-div">Times a developer got help since 2008</div>
          </div>
          <div className="first-box">
            <div className="first-box-first-div">179% ROI</div>
            <div className="first-box-second-div">from companies using Stack Overflow for Teams</div>
          </div >
          <div className="first-box">
            <div className="first-box-first-div">5,000+</div>
            <div className="first-box-second-div">Stack Overflow for Teams instances active every day</div>
          </div>
        </div>
        <svg className="bottom-svg-curve" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path className="bottom-curve" fill="#0099ff" fillOpacity="1" d="M0,256L120,229.3C240,203,480,149,720,149.3C960,149,1200,203,1320,229.3L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
      </div>
      
    </>
    
  );
};

export default BelowHeader;
