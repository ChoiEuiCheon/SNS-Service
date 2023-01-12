import React from 'react'
import './css/index.css'

function MainFeed() {
  return(
    <div className="mainfeed">
        <div className="wrapper">
            <div className="feed-list">
                <div className="write-feed">

                    <div classnmae="profile-image"></div>
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
            </div>

            <div className="friend-list">

            </div>

        </div>
    </div>);
}
export default MainFeed;
