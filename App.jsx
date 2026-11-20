import { useState } from 'react'
import HeaderCounter from './HeaderCounter.jsx'
import PostInput from './PostInput.jsx'
import FeedbackList from './FeedbackList.jsx'

function App() {
  const [feedbacks, setFeedbacks] = useState([
    {
      name: "sara",
      message: "Great explination of components!",
      likes: 5
    },
    {
      name: "omar",
      message: "Props finally make sense to me",
      likes: 2
    },
    {
      name: "Ali",
      message: "Can we do a lab on useState next Week?",
      likes: 7
    },
    {
      name: "You",
      message: "Thanks for the lab, this was fun!",
      likes: 0
    }
  ])

  return (
    <div>
      <HeaderCounter totalCount={feedbacks.length} />
      <PostInput feedbacks={feedbacks} setFeedbacks={setFeedbacks} />
      <FeedbackList list={feedbacks} />
    </div>
  )
}

export default App