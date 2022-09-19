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
                <a className="kat" href="@">Каталог</a>
                <a className="kat" href="@">Lookind.AI</a>
                <a className="kat" href="@">О нас</a>
                <a className="lkarea" href="@"><img id="account" src={person} width="15%" height="10%"/><p>Личный кабинет</p></a>
            </div>
        </div>
    </div>
    );
}

export default App;