import logo from './lookind.png';
import person from './person.png';
import './App.css';
import front from './photo.png';
import post1 from './1.jpg'
import post2 from './2.png'

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
            <div className="container">
                <div className="header_row">
                    <div className="header_content">
                        <h1 className="header_title">Create a great first impression</h1>
                        <div className="header_text">Make outfits for every day and pick up a stylish wardrobe.</div>
                        <div className="header_btn">
                            <a href="src/App" className="button">Shop now</a>
                        </div>
                    </div>
                    <div className="header_photo">
                        <img src={front} height="95%" alt="front"/>
                    </div>
                </div>
            </div>
            <div className="section-blog">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-header_title">Blog Posts</h2>
                        <div className="section-header_description">
                            <p>Editor's picks</p>
                        </div>
                    </div>
                    <div className="posts-wrappers">
                        <div className="post">
                            <img src={post1} height="170px" alt="post1" className="post_img"/>
                            <div className="post_content">
                                <h4 className="post_title">Повседневный деловой стиль</h4>
                                <p className="post_text">Стиль очень похож на smart casual, но правила сочетанияразных видов одежды намного строже...</p>
                                <a href="#" className="post_read-more">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;