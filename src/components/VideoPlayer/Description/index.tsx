import { SongTitle } from '../SongTitle';
import styles from './styles.module.css';

export const VideoDescription = (props: 
    { userName: string, profileUrl: string, description: string, song: string, playing: boolean }) => {
    const { userName, profileUrl, description, song, playing } = props;
    return (
        <footer className={styles.footer}>
            <a href={profileUrl}>@{userName}</a>
            <p>{description}</p>
            <SongTitle song={song} animationRunning={playing}/>
        </footer>
    )
}