import { supabase } from './supabase'

export const getVideos = async () => {
    return await supabase
        .from('videos')
        .select(`*,
            users (
                id, 
                username
            )`)
}

type VideosResponse = Awaited<ReturnType<typeof getVideos>>
export type VideoResponseSuccess = VideosResponse['data']
export type VideoResponseError = VideosResponse['error']


export const isVideoLiked = async (videoId: number, userId: string) => {
    return await supabase.from('users_videos_likes')
    .select(`*`)
    .eq('video_id', videoId)
    .eq('user_id', userId);
}
