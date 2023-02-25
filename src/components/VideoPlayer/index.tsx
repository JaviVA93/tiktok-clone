import styles from './styles.module.css';
import { useRef, useState } from 'react';

const videoSrc = 'https://assets.mixkit.co/videos/preview/mixkit-portrait-of-a-fashion-woman-with-silver-makeup-39875-large.mp4'


export default function VideoPlayer() {
    const [playing, setPlaying] = useState(false);
    const video = useRef<HTMLVideoElement>(null);
    const handlePlay = () => {
        if (playing) {
            video.current?.pause();
            setPlaying(false);
        }
        if (!playing) {
            video.current?.play();
            setPlaying(true);
        }
    }
    
    return (
        <div className={styles.wrapper}>
            <video
                ref={video}
                className={styles.video}
                src={videoSrc}
                controls={false}
            />
            <button type='button' className={styles.playBtn} onClick={handlePlay}></button>
        </div>
    )
}