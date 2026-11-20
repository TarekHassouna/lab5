import { useState } from 'react'

function FeedbackCard(props) {
  const author = props.name
  const text = props.message
  const initialLikes = props.likes
  const [likeCount, setLikeCount] = useState(initialLikes)

  function incrementLike() {
    setLikeCount(likeCount + 1)
  }

  return (
    <div>
      <h3>{author}</h3>
      <h3>{text}</h3>
      <button onClick={incrementLike}>
        {likeCount} Likes
      </button>
    </div>
  )
}

export default FeedbackCard