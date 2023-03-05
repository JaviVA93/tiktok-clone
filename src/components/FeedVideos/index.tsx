import VideoPlayer from '../VideoPlayer';
import styles from './styles.module.css';


const VIDEOS = [
    {
        id: 'arst1234',
        src: 'https://assets.mixkit.co/videos/preview/mixkit-portrait-of-a-fashion-woman-with-silver-makeup-39875-large.mp4',
        userName: 'Lorem Ipsum',
        profileUrl: '#',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing',
        song: 'dźwięk oryginalny- Franek Bielak',
        albumCover: 'https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/f33fce7d398c4ce7a3b3e91b9aa84399~c5_100x100.jpeg',
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
        song: 'original sound- Smart Home',
        albumCover: 'https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/f33fce7d398c4ce7a3b3e91b9aa84399~c5_100x100.jpeg',
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