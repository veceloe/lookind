import logo from './lookind.png';
import person from './person.png';
import './App.css';

function App() {
    return (
        <div id="Main">
            <div className="header">
                <div className="header-kat">
                    <img src={logo} className="App-logo" alt="logo" height="11%" width="11%"/>
                    <a className="kat" href="@">Главная</a>
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
                        <img id="account" src={person} width="15%" height="10%" alt="person"/>
                        <p className="lkarea">Личный кабинет</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default App;