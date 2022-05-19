
import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userReducer'
import topicReducer from './reducers/topicReducer'
export const store = configureStore({
  reducer: {
    user: userReducer,
    topics: topicReducer
  },
})
export default store;
