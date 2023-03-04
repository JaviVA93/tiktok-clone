import styles from './styles.module.css';

export const AlbumCover = (props: {image: string, musicLink: string}) => {
    const {image, musicLink} = props;

    const divStyle = {
        backgroundImage: `url(${image})`
    }
    
    return (
        <a href={musicLink} className={styles.coverWrapper}>
            <div className={styles.coverBorder}>
                <div className={styles.cover} style={divStyle}></div>
            </div>
        </a>
    )
}