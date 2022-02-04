import React, {useState} from 'react';
import {Link} from 'react-router-dom';


function Nav_Bar() {
    const [click,setClick] = useState(false);
    const handleClick = () => setClick(!click)
    const closeMovile =() => setClick(false)
  return <>
  <header>
      <div>
          <nav>

          </nav>
      </div>
  </header>
  </>;
}

export default Nav_Bar;
