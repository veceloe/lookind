import React, {Component} from 'react';
import person from "./account.svg";
class Header extends Component {
    render() {
        return (
           <div>
               <div className="Header">
                   <a className="App-logo" href="@">
                       <p>l</p>
                       <p>o</p>
                       <p>o</p>
                       <p>k</p>
                       <p>i</p>
                       <p>n</p>
                       <p>d</p>
                   </a>
                   <div className="Dropdown">
                       <a className="HeaderEl">Каталог</a>
                       <div className="DropdownContent">
                           <a href="#">Для него</a>
                           <a href="#">Для неё</a>
                       </div>
                   </div>
                   <a className="HeaderEl" href="@">Стилист</a>
                   <a className="HeaderEl" href="@">О нас</a>
                   <a className='AccountLink' href="@" >
                       <div>
                           <img className="Account" src={person}  alt="Личный кабинет"/>
                       </div>
                   </a>
               </div>
           </div>
        );
    }
}

export default Header;