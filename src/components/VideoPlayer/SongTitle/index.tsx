import styles from './styles.module.css';

export const SongTitle = (props: { song: string, animationRunning: boolean }) => {
    const { song, animationRunning } = props;

    let songRowClasses = styles.songRow + ' ';
    songRowClasses += (animationRunning) ? styles.running : styles.paused

    return (
        <div className={styles.songTitleWrapper}>
            <div className={styles.musicIcon}></div>
            <div className={styles.songRowWrapper}>
                <div className={songRowClasses}>
                    <div>{song}</div>
                    <div>{song}</div>
                    <div>{song}</div>
                    <div>{song}</div>
                </div>
            </div>
        </div>
    )
}