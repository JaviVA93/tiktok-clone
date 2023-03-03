import VideoPlayer from '../VideoPlayer';
import styles from './styles.module.css';


const VIDEOS = [
    {
        id: 'arst1234',
        src: 'https://assets.mixkit.co/videos/preview/mixkit-portrait-of-a-fashion-woman-with-silver-makeup-39875-large.mp4',
        userName: 'Lorem Ipsum',
        profileUrl: '#',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing',
        song: '',
        albumCover: '',
        numComments: 6,
        likes: 40,
        isLiked: true,
        shares: 13,
    },
    {
        id: '1234',
        src: 'https://assets.mixkit.co/videos/preview/mixkit-man-holding-neon-light-1238-large.mp4',
        userName: 'Dolor Sit',
        profileUrl: '#',
        description: 'Excepteur sint occaecat cupidatat non proident',
        song: '',
        albumCover: '',
        numComments: 9,
        likes: 64,
        isLiked: false,
        shares: 23,
    },
]
export default function FeedVideos() {
    return (
        <>
            {VIDEOS.map(v => <VideoPlayer key={v.id} {...v} />)}
        </>
    )
}