import React, {Component} from 'react';
import front from "./photo.png";
import post1 from "./1.jpg";

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
}

export default Home;