import React, {Component} from 'react';
import person from "./person.png";
class Header extends Component {
    render() {
        return (
           <div>
               <div className="header">
                   <a className="App-logo" href="@">lookind</a>
                   <div className="dropdown">
                       <a className="HeaderEl">Каталог</a>
                       <div className="dropdown-content">
                           <a href="#">Для него</a>
                           <a href="#">Для неё</a>
                       </div>
                   </div>
                   <a className="HeaderEl" href="@">Lookind.AI</a>
                   <a className="HeaderEl" href="@">О нас</a>
                   <a className='AccountBorder' href="@" >
                       <div>
                           <img id="account" src={person}  alt="person"/>
                       </div>
                   </a>
               </div>
           </div>
        );
    }
}

export default Header;