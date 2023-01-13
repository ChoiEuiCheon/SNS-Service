import React from 'react'
import './css/index.css'

function MainFeed() {
  return(
    <div className="mainfeed">
        <div className="wrapper">
            <div className="feed-list">
                <div className="write-feed">

                    <div className="profile-image"></div>
                    <div className="inp">
                        <input type="text" placeholder="오늘의 일상"/>
                    </div>

                    <div className="get-image">
                        <label htmlFor="get-image-input">
                            <img src="/assets/main/add-image.svg" alt="이미지 추가"></img>
                        </label>
                        <input id ="get-image-input" type="file"/>
                    </div>
                    
                </div>


                <div className="feed">
                    <div className="top">
                        <div className="profile-image">

                        </div>
                        <div className="profile-desc">
                            <div className="nickname">
                                choieuicheon
                            </div>
                            <div className="timestamp">
                                8:15 pm, yesterday
                            </div>
                        </div>
                    </div>
                    <div className="contents">
                        Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Reprehenderit molestias qui ipsa quia libero, 
                        pariatur debitis nihil unde quam minima voluptatem soluta nemo ab, 
                        repellat consequatur labore alias, velit aliquid.
                    </div>
                    <div className="bottom">
                        <div className="like">
                            <div className="assets">
                                <img src="/assets/feed/like-dac.svg" alt="좋아요"/>
                            </div>
                            <div className="count txt-bold">25k</div>
                        </div>
                        <div className="comment">
                            <div className="assets">
                                <img src="/assets/feed/comment.svg" alt="댓글"/></div>
                            <div className="count txt-bold">5k</div>
                        </div>
                    </div>
                </div>

                <div className="feed">
                    <div className="top">
                        <div className="profile-image">

                        </div>
                        <div className="profile-desc">
                            <div className="nickname">
                                choieuicheon
                            </div>
                            <div className="timestamp">
                                8:15 pm, yesterday
                            </div>
                        </div>
                    </div>
                    <div className="contents">
                        Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Reprehenderit molestias qui ipsa quia libero, 
                        pariatur debitis nihil unde quam minima voluptatem soluta nemo ab, 
                        repellat consequatur labore alias, velit aliquid.
                        <div className="image">

                        </div>
                    </div>
                    <div className="bottom">
                        <div className="like">
                            <div className="assets">
                                <img src="/assets/feed/like-dac.svg" alt="좋아요"/>
                            </div>
                            <div className="count txt-bold">25k</div>
                        </div>
                        <div className="comment">
                            <div className="assets">
                                <img src="/assets/feed/comment.svg" alt="댓글"/></div>
                            <div className="count txt-bold">5k</div>
                        </div>
                    </div>
                </div>

                <div className="feed">
                    <div className="top">
                        <div className="profile-image">

                        </div>
                        <div className="profile-desc">
                            <div className="nickname">
                                choieuicheon
                            </div>
                            <div className="timestamp">
                                8:15 pm, yesterday
                            </div>
                        </div>
                    </div>
                    <div className="contents">
                        Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Reprehenderit molestias qui ipsa quia libero, 
                        pariatur debitis nihil unde quam minima voluptatem soluta nemo ab, 
                        repellat consequatur labore alias, velit aliquid.
                    </div>
                    <div className="bottom">
                        <div className="like">
                            <div className="assets">
                                <img src="/assets/feed/like-dac.svg" alt="좋아요"/>
                            </div>
                            <div className="count txt-bold">25k</div>
                        </div>
                        <div className="comment">
                            <div className="assets">
                                <img src="/assets/feed/comment.svg" alt="댓글"/></div>
                            <div className="count txt-bold">5k</div>
                        </div>
                    </div>
                </div>

                <div className="feed">
                    <div className="top">
                        <div className="profile-image">

                        </div>
                        <div className="profile-desc">
                            <div className="nickname">
                                choieuicheon
                            </div>
                            <div className="timestamp">
                                8:15 pm, yesterday
                            </div>
                        </div>
                    </div>
                    <div className="contents">
                        Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Reprehenderit molestias qui ipsa quia libero, 
                        pariatur debitis nihil unde quam minima voluptatem soluta nemo ab, 
                        repellat consequatur labore alias, velit aliquid.
                        <div className="image">
                            
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="like">
                            <div className="assets">
                                <img src="/assets/feed/like-dac.svg" alt="좋아요"/>
                            </div>
                            <div className="count txt-bold">25k</div>
                        </div>
                        <div className="comment">
                            <div className="assets">
                                <img src="/assets/feed/comment.svg" alt="댓글"/></div>
                            <div className="count txt-bold">5k</div>
                        </div>
                    </div>
                </div>


            </div>

            <div className="friend-list">
                <div className="my-profile">
                    <div className="profile-image"></div>
                    <div className="nickname txt-bold">choieuicheon</div>
                </div>
                <div className="my-friends">
                    <div className="title txt-bold">friends</div>
                    <ul className="friend-list-wrapper">
                        <li className="friend">
                            <div className="profile-image"></div>
                            <div className="nickname txt-bold">nickname-1</div>
                        </li>
                        <li className="friend">
                            <div className="profile-image"></div>
                            <div className="nickname txt-bold">nickname-2</div>
                        </li>
                        <li className="friend">
                            <div className="profile-image"></div>
                            <div className="nickname txt-bold">nickname-3</div>
                        </li>
                        <li className="friend">
                            <div className="profile-image"></div>
                            <div className="nickname txt-bold">nickname-4</div>
                        </li>
                        <li className="friend">
                            <div className="profile-image"></div>
                            <div className="nickname txt-bold">nickname-5</div>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </div>);
}
export default MainFeed;
