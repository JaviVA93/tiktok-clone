import { Heart } from "../../Icons/heartSvg"
import { Share } from "../../Icons/shareSvg";
import { SpeechBubble } from "../../Icons/speechBubbleSvg";
import styles from './styles.module.css';

export const VideoActions = (props:
    { isLiked: boolean, likes: number, numComments: number, shares: number }) => {
    const { isLiked, likes, numComments, shares } = props;
    const heartColor = (isLiked) ? '#FF5F5F' : '#FFF';

    const handleLike = () => {
        console.log('like')
    };

    const handleSeeComment = () => {
        console.log('comment')
    }

    const handleShare = () => {
        console.log('share')
    }

    return (
        <div className={styles.wrapper}>
            <button className={styles.iconWithNumber} onClick={handleLike}>
                <Heart color={heartColor} />
                <span>{likes}</span>
            </button>
            <button className={styles.iconWithNumber} onClick={handleSeeComment}>
                <SpeechBubble />
                <span>{numComments}</span>
            </button>
            <button className={styles.iconWithNumber} onClick={handleShare}>
                <Share />
                <span>{shares}</span>
            </button>
        </div>
    )
}