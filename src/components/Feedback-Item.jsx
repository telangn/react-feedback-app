import {useState} from 'react'

function FeedbackItem() {

    const [rating, setRating] = useState(7)
    const [text, setText] = useState('Feedback-Item-Card')
    const handleClick = () => {
        setRating((prev) => {
            return prev + 1
        })
        setText('Button has been clicked')
    }


    return (
        <div className='card'>
            <div className='num-display'>{rating}</div>
            <div className='text-display'>{text}</div>
            <button onClick={handleClick}>Button</button>
        </div>
    )
}

export default FeedbackItem