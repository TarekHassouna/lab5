import FeedbackCard from "./FeedbackCard.jsx"

function FeedbackList(props) {
  const list = props.list
  const feedbackItems = list.map((item) => (
    <FeedbackCard 
      key={item.name + item.message}
      name={item.name} 
      message={item.message} 
      likes={item.likes} 
    />
  ))

  return <>{feedbackItems}</>
}

export default FeedbackList