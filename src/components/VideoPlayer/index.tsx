import styles from './styles.module.css';
import { useRef, useState } from 'react';


export default function VideoPlayer({src}: {src: string}) {
    const [playing, setPlaying] = useState(false);
    const video = useRef<HTMLVideoElement>(null);
    const playerBtn = useRef<HTMLButtonElement>(null);

    const handlePlay = () => {
        if (playing) {
            video.current?.pause();
            playerBtn.current?.classList.remove(styles.hidden);
        }
        else {
            video.current?.play();
            playerBtn.current?.classList.add(styles.hidden);
        }
        setPlaying(!playing);
    }

    return (
        <div
            className={styles.wrapper}
            onClick={handlePlay} >
            <video
                ref={video}
                className={styles.video}
                src={src}
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