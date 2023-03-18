import styles from './styles.module.css';
import { useEffect, useRef, useState } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver'
import { VideoActions } from './Actions';
import { VideoDescription } from './Description';
import { AlbumCover } from './AlbumCover';
import { SongTitle } from './SongTitle';
import { isVideoLiked, VideoResponseSuccess } from '../../services';

type VideoData = {
    albumCover: string
    comments: number
    created_at: string | null
    description: string
    id: number
    likes: number
    shares: number
    song: string
    src: string
    updated_at: string | null
    user_id: string
    users: {
        id: string
        username: string
    } | null
}

export default function VideoPlayer(props: VideoData) {
    const { src, users, description, song, albumCover, comments, likes, shares } = props;
    const numComments = comments;
    const userName = users?.username || 'N/A';
    const profileUrl = `/@${userName}`
    const [playing, setPlaying] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [isLikedRequested, setIsLikedRequesed] = useState(false);
    const video = useRef<HTMLVideoElement>(null);
    const playerBtn = useRef<HTMLButtonElement>(null);
    const ioEntry = useIntersectionObserver(video, { threshold: 0.2 });

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

    if (ioEntry && !ioEntry.isIntersecting && video.current) {
        stopVideo();
    }

    if (ioEntry && ioEntry.isIntersecting && props.users && !isLikedRequested) {
        setIsLikedRequesed(true);
        isVideoLiked(props.id, props.users?.id)
        .then( res => {
            console.log('request')
            if (res.data && res.data.length > 0)
                setIsLiked(true)

        });
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
                <VideoActions {...{ isLiked, likes, numComments, shares }} />
                <AlbumCover
                    image={albumCover}
                    musicLink={'#'}
                    animationRunning={playing} />
            </div>
            <div className={styles.descriptionWrapper}>
                <VideoDescription
                    userName={userName}
                    profileUrl={profileUrl}
                    description={description}
                    song={song}
                    playing={playing} />
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