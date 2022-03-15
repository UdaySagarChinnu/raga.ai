import React, { useEffect } from 'react'
import ReactPlayer from 'react-player/lazy'

function VideoPlayer(props){
    useEffect(()=>{
        console.log("src",props.src)
    })
    return(
        <>
            <ReactPlayer url={props.src.video} playing={true} controls={true} width={'100%'}/>

        </>
    )
}

export default VideoPlayer;