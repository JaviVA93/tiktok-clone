import styles from './styles.module.css';

export const AlbumCover = (props: {image: string, musicLink: string, animationRunning: boolean}) => {
    const {image, musicLink, animationRunning} = props;

    const divStyle = {
        backgroundImage: `url(${image})`
    }

    let coverClasses = styles.cover + ' ';
    coverClasses += (animationRunning) ? styles.running : styles.paused
    
    return (
        <a href={musicLink} className={styles.coverWrapper}>
            <div className={styles.coverBorder}>
                <div className={coverClasses} style={divStyle}></div>
            </div>
        </a>
    )
}