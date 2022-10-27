import React, {Component} from 'react';
class Stylist extends Component {
    render() {
        return (
            <div>
                <div className="header-back">
                    <div className="header-st">
                        <p>
                            Привет!👋
                        </p>
                        <p>
                            Я твой помощник в подборе твоего стиля.
                        </p>
                        <p>
                            Со мной выбор вещей станет гораздо проще, ведь в моей базе есть тысячи образов, которые смогут
                            порадовать вас.
                        </p>
                    </div>
                </div>
                 <div className="points">
                     <div className="Dropdown">
                         <a className="HeaderEl">Выберите пол</a>
                         <div className="DropdownContent">
                             <a href="#">Мужчина</a>
                             <a href="#">Женщина</a>
                         </div>
                     </div>
                     <div className="Dropdown">
                         <a className="HeaderEl">Какой стиль вы предпочитаете?</a>
                         <div className="DropdownContent">
                             <a href="#">Повседневный деловой</a>
                             <a href="#">Повседневный</a>
                             <a href="#">Уличный</a>
                             <a href="#">Спортивный</a>
                         </div>
                     </div>
                     <div className="Dropdown">
                         <a className="HeaderEl">Температурный режим</a>
                         <div className="DropdownContent">
                             <a href="#">Зима</a>
                             <a href="#">Весна</a>
                             <a href="#">Лето</a>
                             <a href="#">Осень</a>
                             <a href="#">Помещение</a>
                         </div>
                     </div>
                     <div className="Dropdown">
                         <a className="HeaderEl">Цветовая гамма</a>
                         <div className="DropdownContent">
                             <a href="#">Яркие цвета</a>
                             <a href="#">Классические цвета</a>
                         </div>
                     </div>
                 </div>
            </div>
        );
    }
}

export default Stylist;