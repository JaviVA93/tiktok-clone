import { Heart } from "../../Icons/heartSvg"
import { Share } from "../../Icons/shareSvg";
import { SpeechBubble } from "../../Icons/speechBubbleSvg";
import styles from './styles.module.css';

export const VideoActions = ({isLiked = false}: {isLiked: boolean}) => {
    const heartColor = (isLiked) ? '#FF5F5F' : '#FFF';
    return (
        <div className={styles.wrapper}>
            <Heart color={heartColor}/>
            <SpeechBubble />
            <Share />
        </div>
    )
}