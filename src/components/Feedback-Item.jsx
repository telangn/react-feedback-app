import {FaTimes} from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from './shared/Card'

function FeedbackItem({item, handleDelete}) {

    return (
        <Card>
            <div data-test-id='rating-number' className='num-display'>{item.rating}</div>
            <button data-test-id='close-button' onClick={() => handleDelete(item.id)} className='close'>
                <FaTimes color='purple'/>
            </button>
            <div data-test-id='feedback-text' className='text-display'>{item.text}</div>
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default FeedbackItem