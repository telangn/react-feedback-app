import {useState} from 'react'
import Header from './components/Header'
import FeedbackList from './components/Feedback-List'
import FeedbackData from './data/Feedback-Data'

function App() {

    const [feedback, setFeedback] = useState(FeedbackData)

    return (
        <>
            <Header text='Feedback-UI'/>
            <div className='container'>
                <FeedbackList feedback={feedback}/>
            </div>
        </>
    )
}

export default App