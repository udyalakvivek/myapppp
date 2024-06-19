import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <div>
        <div>
          <nav>
            <ul style={{ display: 'flex', listStyle: 'none', justifyContent: 'space-around', fontSize: 25 }}>
              <li>Home</li>
              <li>About</li>
              <li>contact</li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}
export default Header