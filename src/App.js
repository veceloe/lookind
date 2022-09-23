import logo from './lookind.png';
import person from './person.png';
import './App.css';

function App() {
    return (
        <div id="Main">
                <div className="header">
                      <a className="App-logo" href="@">Lookind</a>
                        <div>
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

export default App;