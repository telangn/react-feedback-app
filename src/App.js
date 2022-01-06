import Header from './components/Header'
import FeedbackItem from './components/Feedback-Item'

function App() {
    return (
        <>
            <Header text='Feedback-UI'/>
            <div className='container'>
                <FeedbackItem />
            </div>
        </>
    )
}

export default App