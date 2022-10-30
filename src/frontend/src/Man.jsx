import React, {Component} from 'react';
import sneakers from "./blazer.png";
import like from "./like.png";
function Man() {
    return (
        <>
            <div className="name_category">
                <h1>Все кроссовки</h1>
            </div>
            <div className="wrapper">
                <div className="headerInfo">
                    <a className="New" href="/">НОВИНКИ</a>
                    <div className="Brand">
                        <a className="Brands" href="/">БРЕНДЫ</a>
                        <div className="DropdownBrands" >
                        </div>
                    </div>
                    <a className="Shoes" href="/">ОБУВЬ</a>
                    <a className="Clothes" href="/">ОДЕЖДА</a>
                    <a className="Accessories" href="/">АКСЕССУАРЫ</a>
                    <a className="Sale" href="/">РАСПРОДАЖА</a>
                </div>
                <div className="contentCatalog">
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