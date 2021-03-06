import React from 'react';

// const VideoListItem = (props) => {
//     const video = props.video;
const VideoListItem = ({video, onVideoSelect}) => {// {video} equivalent to 'const video = props.video;'
    

    const imageUrl = video.snippet.thumbnails.default.url;

    // console.log(video);
    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-list">
                    <img className="media-object" src={imageUrl} />
                </div>

                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
            Video
        </li>
    );
};

export default VideoListItem;