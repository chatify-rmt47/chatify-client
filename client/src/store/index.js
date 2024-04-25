import { configureStore } from '@reduxjs/toolkit';
import conversationSlice from './conversationSlice';

export default configureStore({
  reducer: { conversation: conversationSlice },
});
