import React, {Component} from 'react';
import person from "./person.png";
class Header extends Component {
    render() {
        return (
           <div>
               <div className="header">
                   <a className="App-logo" href="@">Lookind</a>
                   <div className="dropdown">
                       <a className="kat">Каталог</a>
                       <div className="dropdown-content">
                           <a href="#">Для него</a>
                           <a href="#">Для неё</a>
                       </div>
                   </div>
                   <a className="kat" href="@">Lookind.AI</a>
                   <a className="kat" href="@">О нас</a>
                   <a className='lkramka' href="@" >
                       <div>
                           <img id="account" src={person}  alt="person"/>
                           <p className="lkarea">Личный кабинет</p>
                       </div>
                   </a>
               </div>
           </div>
        );
    }
}

export default Header;