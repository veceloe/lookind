import React, {Component} from 'react';
import person from "./account.svg";
import {Routes, Route, Link} from "react-router-dom";
import {Home} from "./Home";
import {Home2} from "./Home2";
function Header(){
        return (
            <>
                <div>
                    <div className="Header">
                        <Link to="/" className="App-logo">
                            <p>l</p>
                            <p>o</p>
                            <p>o</p>
                            <p>k</p>
                            <p>i</p>
                            <p>n</p>
                            <p>d</p>
                        </Link>
                        <div className="Dropdown">
                            <a className="HeaderEl">Каталог</a>
                            <div className="DropdownContent">
                                <a href="#">Для него</a>
                                <a href="#">Для неё</a>
                            </div>
                        </div>
                        <a className="HeaderEl" href="/">Стилист</a>
                        <a className="HeaderEl" href="/about">О нас</a>
                        <a className='AccountLink' href="@" >
                            <div>
                                <img className="Account" src={person}  alt="Личный кабинет"/>
                            </div>
                        </a>
                    </div>
                </div>
                <Routes>
                    <Route path="/" element={<Home />}/>
                </Routes>
            </>
        );
}
export {Header};