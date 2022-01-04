function App() {
    const title = 'Feedback App'
    const body = 'This is my body'
    const comments = [
        {id: 1, text: 'Comment One'},
        {id: 2, text: 'Comment Two'},
        {id: 3, text: 'Comment Three'},
    ]
    return (
        <div className='container'>
            <h1>{title.toUpperCase()}</h1>
            <p>{body}</p>
            <div className='comments'>
                <h3>Comments = {comments.length}</h3>
                <ul>
                    {comments.map((comment) => (
                        <li key={comment.id}>
                            {comment.text}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default App