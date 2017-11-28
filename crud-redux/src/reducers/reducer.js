const reducer = (state = {
  data: [],
  fetching: false,
  deleting: false,
  updating: false
}, action) => {
  switch (action.type) {
    case 'FETCH_ARTICLES':
      {
        return {
          ...state,
          fetching: true,
          deleting: false,
          data: [...state.data, action.payload]
        }
      }
    case 'FETCH_ARTICLE_REJECTED':
      {
        return {
          ...state,
          fetching: false,
          deleting: false,
          updating: false,
          error: action.payload
        }
      }
      case 'DELETE_ARTICLE' :
      {
        return {
          ...state,
          fetching:false,
          deleting: true,
          updating:false,
          data: state.data.filter( item => {return item._id !== action.payload})
        }
      }
      case 'UPDATE_ARTICLE' :
      {
        return {
          ...state,
          fetching:false,
          deleting: false,
          updating:true,
          data: state.data.map(item => {
            return item._id === action.id ? {...item, title: action.payload.title, handle: action.payload.handle, content: action.payload.content} : item
          })
        }
      }
      case 'REFRESH_ARTICLES':
      {
        return {
          ...state,
          fetching: false,
          deleting: false,
          updating: false,
          data: action.payload
        }
      }
  }
  return state
}

export default reducer
