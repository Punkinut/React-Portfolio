import React from 'react'
import close from '../images/close.svg'

function MobileNav({viewNav, setNav}) {

const hideNav = () => {
    setNav('none')
  }

    return (
        <section className="navigation-section" style={{display: `${viewNav}`}}>
            <section className="mobile-links">
                <img src={close} class="cross" alt="Close Button" onClick={hideNav}/>
                <a href="#header-grid" class="nav-link" onClick={hideNav}>Home.</a>
                <a href="#intro-background" class="nav-link" onClick={hideNav}>About Me.</a>
                <a href="#works-grid" class="nav-link" onClick={hideNav}>Works.</a>
                <a href="#contact-background" class="nav-link" onClick={hideNav}>Contact.</a>
            </section>
        </section>
    )
}

export default MobileNav