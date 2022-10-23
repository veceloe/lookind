import React, {Component} from 'react';
import store from "./app-store.svg";
import google from "./google-play.svg";

class Footer extends Component {
    render() {
        return (
            <footer className="foot">
                <div className="foot-top">
                    <h4>Мой гардероб</h4>
                    <ul>
                        <li><a href="@">Каталог</a></li>
                        <li><a href="@">Акции</a></li>
                        <li><a href="@">Личный кабинет</a></li>
                    </ul>
                </div>
                <div className="foot-top">
                    <h4>Помощь</h4>
                    <ul>
                        <li><a href="@">Гарантия лучшей цены</a></li>
                        <li><a href="@">Гарантия оригинального качества</a></li>
                        <li><a href="@">Гарантийное обслуживание</a></li>
                    </ul>
                </div>
                <div className="foot-top">
                    <h4>О нас</h4>
                    <ul>
                        <li><a href="@">Наша команда</a></li>
                        <li><a href="@">Наши партнёры</a></li>
                        <li><a href="@">Вакансии</a></li>
                    </ul>
                </div>
                <div className="foot-top">
                    <h4>Контакты</h4>
                    <p>888888888</p>
                    <h4>Скачивайте наше приложение</h4>
                    <a href="@"><img src={store} alt="store" height="48%" width="48%"/></a>
                    <a className="Google-play" href="@"><img src={google} alt="google-play" height="48%" width="48%"/></a>
                </div>
            </footer>
        );
    }
}

export default Footer;