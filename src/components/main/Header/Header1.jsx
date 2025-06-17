import React from 'react'
import "./Header1.css"

const Header1 = () => {
  return (
        <div className="floating-menu">
      <div className="floating-box">
        <button className="menu-button" aria-label="Open Menu">
          <span>Menu</span>
          <span className="icon">
            <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
              <path strokeLinecap="square" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </span>
        </button>
        <a className="declare-link">Declare Now</a>
      </div>
    </div>
  )
}

export default Header1
