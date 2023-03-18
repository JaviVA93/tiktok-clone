import { useEffect, useState } from 'react';
import VideoPlayer from '../VideoPlayer';
import styles from './styles.module.css';
import { getVideos } from '../../services/index.js'
import { VideoResponseSuccess } from '../../services/index'

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
    const [videos, settVideos] = useState<null | VideoResponseSuccess>(null);

    useEffect(() => {

        getVideos().then(response => {
            if (response.error)
                return;
            const videos = response.data;
            settVideos(videos);
        })

    }, [])

    if (!videos)
        return (
            <>Loading data</>
        )
    return (
        <>
            {videos.map(v => <VideoPlayer key={v.id} {...v} />)}
        </>
    )
}