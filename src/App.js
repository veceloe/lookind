import logo from './logo.png';
import './App.css';

function App() {
    return (
        <div className="header">
            <div className="header-kat">
                <div className="header-logo">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <a className="kat" href="@">Главная</a>
                <a className="kat" href="@">Каталог</a>
                <a className="kat" href="@">Lookind.smart</a>
                <a className="kat" href="@">О нас</a>
                <div className="lk">
                    <a className="button" href="#">Личный кабинет</a>
                </div>
            </div>
        </div>
    );
}

export default App;