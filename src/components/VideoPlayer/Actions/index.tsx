import { Heart } from "../../Icons/heartSvg"
import { Share } from "../../Icons/shareSvg";
import { SpeechBubble } from "../../Icons/speechBubbleSvg";
import styles from './styles.module.css';

export const VideoActions = (props:
    { isLiked: boolean, likes: number, numComments: number, shares: number }) => {
    const { isLiked, likes, numComments, shares } = props;
    const heartColor = (isLiked) ? '#FF5F5F' : '#FFF';
    return (
        <div className={styles.wrapper}>
            <div className={styles.iconWithNumber}>
                <Heart color={heartColor} />
                <span>{likes}</span>
            </div>
            <div className={styles.iconWithNumber}>
                <SpeechBubble />
                <span>{numComments}</span>
            </div>
            <div className={styles.iconWithNumber}>
                <Share />
                <span>{shares}</span>
            </div>
        </div>
    )
}