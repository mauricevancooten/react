import axios from 'axios'

export const fetchArticle = () => {
  return (async dispatch => {
    try {
      const res = await axios.get('/api')
      dispatch({type: 'FETCH_ARTICLES', payload: res.data.posts})
    }
    catch(err) {
      dispatch({type: 'FETCH_ARTICLES_REJECTED', payload: err})
    }
  })
}

export const postArticle = (data) => {
  return (
    async dispatch => {
    try {
      const res = await axios('/api', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        data: data
      })
      await dispatch({type: 'FETCH_ARTICLES', payload: data})
    } catch (err) {
      dispatch({type: 'FETCH_ARTICLES_REJECTED', payload: err})
    }
  })
}

export const deleteArticle = (id) => {
  return (
    async dispatch => {
      try {
        const res = await axios(`/api/${id}`, {method: 'DELETE'})
        dispatch({type: 'DELETE_ARTICLE', payload: id})
      } catch (err) {
        dispatch({type: 'FETCH_ARTICLES_REJECTED', payload: err})
      }
    }
  )
}

export const updateArticle = (data, id) => {
  return (
    async dispatch => {
      try {
        const res = await axios(`/api/${id}`, {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          data: data
        })
        dispatch({type: 'UPDATE_ARTICLE', payload: data, id: id})
      } catch (err) {
        dispatch({type: 'FETCH_ARTICLES_REJECTED', payload: err})
      }
    }
  )
}

export const refreshArticle = () => {
  return (async dispatch => {
    try {
      const res = await axios.get('/api')
      dispatch({type: 'REFRESH_ARTICLES', payload: res.data.posts})
    }
    catch(err) {
      dispatch({type: 'FETCH_ARTICLES_REJECTED', payload: err})
    }
  })
}
