
export type VideoData = {
    albumCover: string
    comments: number
    created_at: string | null
    description: string
    id: number
    likes: number
    shares: number
    song: string
    src: string
    updated_at: string | null
    user_id: string
    users: {
        id: string
        username: string
    } | {
        id: string
        username: string
    }[] |
    null
}