import styles from './styles.module.css';
import { useEffect, useRef, useState } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver'
import { VideoActions } from './Actions';

type videoData = {
    src: string; 
    isLiked: boolean;
    userName: string;
    description: string;
    song: string; 
    albumCover: string;
    numComments: number;
    likes: number;
    shares: number;
}

export default function VideoPlayer(props: videoData) {
    console.log(props);
    const {src, isLiked, userName, description, song, albumCover, numComments, likes, shares} = props;
    const [playing, setPlaying] = useState(false);
    const video = useRef<HTMLVideoElement>(null);
    const playerBtn = useRef<HTMLButtonElement>(null);
    const entry = useIntersectionObserver(video, { threshold: 0.2 });

    const handlePlay = () => {
        if (playing)
            pauseVideo();
        else 
            playVideo();

    }

    const playVideo = () => {
        video.current?.play();
        playerBtn.current?.classList.add(styles.hidden);
        setPlaying(!playing);
    }

    const pauseVideo = () => {
        video.current?.pause();
        playerBtn.current?.classList.remove(styles.hidden);
        setPlaying(!playing);
    }

    const stopVideo = () => {
        if (!video.current || !playerBtn.current)
            return;

        if (video.current.currentTime === 0 && !playing)
            return;
        
        video.current.pause();
        video.current.currentTime = 0;
        playerBtn.current.classList.remove(styles.hidden);
        setPlaying(!playing);
    }

    if (entry && !entry.isIntersecting && video.current) {
        stopVideo();
    }

    return (
        <div
            className={styles.wrapper}>
            <video
                ref={video}
                className={styles.video}
                src={src}
                controls={false}
                loop
                onClick={handlePlay}
            />
            <div className={styles.actionsWrapper}>
                <VideoActions {...{isLiked, likes, numComments, shares}}/>
            </div>
            <button
                ref={playerBtn}
                type='button'
                className={styles.playBtn}
                onClick={handlePlay}>
            </button>
        </div>
    )
}