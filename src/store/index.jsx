import {configureStore} from '@reduxjs/toolkit'
import Toggle from './Toggle';



const store=configureStore({
    reducer:{
        toggle:Toggle.reducer
    }
})
export default store;