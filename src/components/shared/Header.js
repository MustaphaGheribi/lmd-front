import React, { Component } from 'react';
import Nav from "./Nav";

class Header extends Component {
  
  render() {
    return (
      <header>
        <Nav/>
         <div className="head">
              <h1>Post what you need done and a doctor will talk to you with a price and date!r </h1>
              <div>
                <p>Integer posuere leo non erat ornare dictum id vitae magna. Proin consectetur iaculis nisi, ut convallis tortor tempor congue. Curabitur sit amet tempus felis. Duis tellus eros, pellentesque at rhoncus eu, maximus ut diam.</p>
                <div><a className="contact" href="#">Sign up</a></div>
              </div>
          </div>
      </header>
      
    );
  }
}

export default Header;
