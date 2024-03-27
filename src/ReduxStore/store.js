import { configureStore } from '@reduxjs/toolkit';

import clientsNameSlice from './clientsNameSlice';
import foodListSlice from './foodListSlice';

export const store = configureStore({
    reducer: {
        clients: clientsNameSlice,

        foodList: foodListSlice,
    }

})