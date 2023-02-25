import styles from './styles.module.css';
import { useRef, useState } from 'react';

const videoSrc = 'https://assets.mixkit.co/videos/preview/mixkit-portrait-of-a-fashion-woman-with-silver-makeup-39875-large.mp4'


export default function VideoPlayer() {
    const [playing, setPlaying] = useState(false);
    const video = useRef<HTMLVideoElement>(null);
    const playerBtn = useRef<HTMLButtonElement>(null);

    const handlePlay = () => {
        if (playing) {
            video.current?.pause();
            setPlaying(false);
            playerBtn.current?.classList.remove(styles.hidden);
        }
        if (!playing) {
            video.current?.play();
            setPlaying(true);
            playerBtn.current?.classList.add(styles.hidden);
        }
    }

    return (
        <div
            className={styles.wrapper}
            onClick={handlePlay} >
            <video
                ref={video}
                className={styles.video}
                src={videoSrc}
                controls={false}
                loop
            />
            <button
                ref={playerBtn}
                type='button'
                className={styles.playBtn}>
            </button>
        </div>
    )
}