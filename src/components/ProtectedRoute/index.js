import Cookies from 'js-cookie'

import {Route, Redirect} from 'react-router-dom'

const ProtectedRoute = props => {
  const JWT = Cookies.get('jwt_token')
  if (JWT === undefined) {
    return <Redirect to="/login" />
  }
  return <Route {...props} />
}

export default ProtectedRoute
