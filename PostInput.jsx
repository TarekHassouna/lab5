import { useState } from 'react'

function PostInput(props) {
  const feedbacks = props.feedbacks
  const setFeedbacks = props.setFeedbacks
  const [text, setText] = useState("")

  function handleInputChange(event) {
    setText(event.target.value)
  }

  function handlePost() {
    setFeedbacks([...feedbacks, { name: "You", message: text, likes: 2 }])
  }

  return (
    <>
      <input 
        placeholder="Write a comment" 
        onInput={handleInputChange} 
      />
      <button onClick={handlePost}>Post</button>
    </>
  )
}

export default PostInput