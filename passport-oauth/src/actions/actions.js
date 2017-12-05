import axios from 'axios'

export const fetchUser = () => {
  return (async dispatch => {
    try {
      const res = await axios.get('/api/current_user')
      dispatch({type: 'FETCH_USER', payload: res.data})
    } catch (err) {
      console.log(err)
    }
  })
}

export const logoutUser = () => {
  return (async dispatch => {
    try {
      const res = await axios.get('/api/logout')
      dispatch({type: 'LOGOUT_USER', payload: res.data})
    }
    catch (err) {
      console.log(err)
    }
  })
}
