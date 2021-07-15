import React from 'react';
import person from '../images/user.svg'
import folder from '../images/folder.svg'
import white from '../images/white.png'


const Header = () => {

  return (
    <header>
        <section id="header-grid">
            <article>
                <p>Hi There,</p>
                <h1>I Am a Developer</h1>
                <p>Welcome to my Portfolio Website.</p>
                <a className="scroll" href="#intro-background"><button><img src={person} alt="user icon"/>More About Me</button></a>
            </article>
            <img src={folder} class="folder" alt="folder"/>
            <img src={white} class="white-corner" alt="White Corner Design Element"/>
        </section>
    </header>
  );
}

export default Header;