function App() {
    const title = 'Feedback App'
    const body = 'This is my body'
    const comments = [
        {id: 1, text: 'Comment One'},
        {id: 2, text: 'Comment Two'},
        {id: 3, text: 'Comment Three'},
    ]
    const loading = false
    const showComments = true
    const commentBlock = (
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
    )

    if (loading) return <h1>Loading...</h1>
    return (
        <div className='container'>
            <h1>{title.toUpperCase()}</h1>
            <p>{body}</p>
            {showComments && commentBlock}
        </div>
    )
}

export default App