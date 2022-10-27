import React, {Component} from 'react';
import sneakers from "./blazer.png";
import like from "./like.png";
function Man() {
    return (
        <>
            <div className="wrapper">
                <div className="headerleft">
                    <div className="headerInfo">
                        <a className="New" href="/">Новинки</a>
                        <a className="Brands" href="/">Бренды</a>
                        <a className="Shoes" href="/">Обувь</a>
                        <a className="Clothes" href="/">Одежда</a>
                        <a className="Accessories" href="/">Аксессуары</a>
                        <a className="Sale" href="/">Распродажа</a>
                    </div>
                </div>
                <div className="content Catalog">
                    <h1>Все кроссовки</h1>
                    <div className="card">
                        <img src={sneakers} alt="blazer" width={133} height={112}/>
                        <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                        <div>
                            <div>
                                <span>Цена:</span>
                                <b>12990 руб.</b>
                            </div>
                            <button>
                                <img src={like} alt="like" width={11} height={10} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export {Man};