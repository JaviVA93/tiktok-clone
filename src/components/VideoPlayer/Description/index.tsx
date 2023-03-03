import styles from './styles.module.css';

export const VideoDescription = (props: { userName: string, profileUrl: string, description: string }) => {
    const { userName, profileUrl, description } = props;
    return (
        <footer className={styles.footer}>
            <a href={profileUrl}>@{userName}</a>
            <p>{description}</p>
        </footer>
    )
}