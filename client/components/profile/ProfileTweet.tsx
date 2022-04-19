import Post from '../Post'

const style = {
  wrapper: `no-scrollbar`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
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

function ProfileTweet() {
  return (
    <div className={style.wrapper}>
      {tweets?.map((tweet, index) => (
        <Post
          key={index}
          displayName={tweet.displayName}
          userName={`${tweet.username.slice(0, 4)}...${tweet.username.slice(
            -4
          )}`}
          text={tweet.text}
          avatar={tweet.avatar}
          isProfileImageNft={tweet.isProfileImageNft}
          timestamp={tweet.timeStamp}
        />
      ))}
    </div>
  )
}

export default ProfileTweet
