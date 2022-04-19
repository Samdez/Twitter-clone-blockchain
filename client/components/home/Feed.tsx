import { BsStars } from 'react-icons/bs'
import Post from '../Post'
import TweetBox from './TweetBox'

const style = {
  wrapper: `flex-[2] border-r border-l border-[#38444d]`,
  header: `sticky top-0 b-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}

const tweets = [
  {
    id: 1,
    displayName: 'Da Pipouzzz',
    username: '0xCE16081e9fB8358d9D32C0B29a597E4620ED1F54',
    avatar: 'https://picsum.photos/200',
    text: 'gm',
    isProfileImageNft: true,
    timeStamp: new Date().toString(),
  },
]

function Feed() {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.headerTitle}>Home</div>
        <BsStars />
      </div>
      <TweetBox />
      {tweets.map((tweet) => (
        <Post
          key={tweet.id}
          displayName={tweet.displayName}
          userName={`${tweet.username.slice(0, 4)}...${tweet.username.slice(
            -4
          )}`}
          avatar={tweet.avatar}
          text={tweet.text}
          isProfileImageNft={tweet.isProfileImageNft}
          timestamp={tweet.timeStamp}
        />
      ))}
    </div>
  )
}

export default Feed
