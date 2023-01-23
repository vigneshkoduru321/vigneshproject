import './index.css'
import {Link} from 'react-router-dom'

const NotFound = () => (
  <div className="not-found-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
      alt=""
    />
    <h1>Page Not Found</h1>
    <p>we're sorry, the page you requested could not be found</p>
    <Link style={{textDecoration: 'none'}} to="/" className="go-home">
      <p>Go to Home</p>
    </Link>
  </div>
)

export default NotFound
