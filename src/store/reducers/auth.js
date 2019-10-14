import * as actionTypes from '../actions';
import axios from 'axios'

const initialState = {
  user_name: '',
  user_email: '',
  user_img: '../../assets/images/user/avatar-2.jpg',
  token: '',
}

export default function auth(state = initialState, action) {
  switch (action.type) {
    case actionTypes.AUTH_SIGNIN:
      return {
          ...state,
          user_name: action.payload.nome,
          user_email: action.payload.email,
          user_img: action.payload.img,
          token: action.payload.token
      }
    case actionTypes.AUTH_SIGNOUT:
      const persistEmail = action.payload.persist
      delete axios.defaults.headers.common["Authorization"];

      return {
        ...state,
        user_name: null,
        user_email: persistEmail ? state.user_email : null,
        token: null
      }
    default:
      return state
  }
}