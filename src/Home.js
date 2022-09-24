import React, {Component} from 'react';
import front from "./photo.png";
import post1 from "./1.png";
import post2 from './2.png'
import post3 from './3.png'
import post4 from './4.png'

class Home extends Component {
    render() {
        return (
            <div>
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
                        <div className="posts-wrapper">
                            <div className="post">
                                <img src={post1} height="170px" alt="post1" className="post_img"/>
                                <div className="post_content">
                                    <h4 className="post_title">Повседневный деловой стиль</h4>
                                    <p className="post_text">Стиль очень похож на smart casual, но правила сочетанияразных видов одежды намного строже...</p>
                                    <a href="#" className="post_read-more">Read more</a>
                                </div>
                            </div>
                            <div className="post">
                                <img src={post2} height="170px" alt="post2" className="post_img"/>
                                <div className="post_content">
                                    <h4 className="post_title">Повседневный стиль</h4>
                                    <p className="post_text">Этот стиль обычно сочетает в себе комфорт и индивидуальность, также подчеркивает элегантность образа...</p>
                                    <a href="#" className="post_read-more">Read more</a>
                                </div>
                            </div>
                            <div className="post">
                                <img src={post3} height="170px" alt="post3" className="post_img"/>
                                <div className="post_content">
                                    <h4 className="post_title">Уличный стиль</h4>
                                    <p className="post_text"> Уличный стиль одежды черпает вдохновение как из хип-хоп культуры, так и из стиля скейтеров...</p>
                                    <a href="#" className="post_read-more">Read more</a>
                                </div>
                            </div>
                            <div className="post">
                                <img src={post4} height="170px" alt="post4" className="post_img"/>
                                <div className="post_content">
                                    <h4 className="post_title">Спортивный стиль</h4>
                                    <p className="post_text">Спортивный стиль одежды выбирают не только для занятий в спорт-зале, но и для создания яркого сильного образа...</p>
                                    <a href="#" className="post_read-more">Read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;