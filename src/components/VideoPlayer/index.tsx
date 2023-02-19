const videoSrc = 'https://v16-webapp-prime.tiktok.com/video/tos/useast2a/tos-useast2a-pve-0068/osf8JQionLOriBK9QDbxA6gcLe8zkjBE1CoRUy/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=2730&bt=1365&cs=0&ds=3&ft=I~da4od2D12Nv1kJzZIxRtr_YlJG-UjNSmgpi9&mime_type=video_mp4&qs=0&rc=aDs7NzVmaGdnNmY0Nzc3PEBpM3hwOTQ6ZnI1aTMzNzczM0BiNWA2Ni9hNmAxXjY2MjFhYSNuX2BjcjRnaW1gLS1kMTZzcw%3D%3D&btag=80000&expire=1676858233&l=2023021919552184124644BFEA80C9894C&ply_type=2&policy=2&signature=4628cb91a446b84f3e940266a8021ca3&tk=tt_chain_token'


export default function VideoPlayer () {
    return (
        <video src={videoSrc} controls={false} />
    )
}