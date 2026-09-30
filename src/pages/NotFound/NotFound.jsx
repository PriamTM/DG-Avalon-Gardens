import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="container" style={{ padding: '5rem 0', textAlign: 'center' }}>
      <h1>404</h1>
      <p>This page has wandered off the gardens.</p>
      <Link to="/" className="btn btn-primary">
        Back to Home
      </Link>
    </div>
  )
}

export default NotFound
