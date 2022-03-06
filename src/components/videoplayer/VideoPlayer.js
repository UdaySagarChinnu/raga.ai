import React from 'react'
import ReactPlayer from 'react-player/lazy'

function VideoPlayer(){
    return(
        <>
            <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing={true} controls={true} width={'100%'}/>
{/* 
            <video width="320" height="240" controls>
                <source src="movie.mp4" type="video/mp4">
                <source src="movie.ogg" type="video/ogg">
                Your browser does not support the video tag.
            </video> */}
        </>
    )
}

export default VideoPlayer;