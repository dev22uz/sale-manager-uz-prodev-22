import { configureStore } from "@reduxjs/toolkit";
import adminAuthSlice from "./features/adminAuthSlice";


import categorySlice from "./features/categorySlice";

import customerAuthSlice from "./features/customerAuthSlice";

import frontendProductsSlice from "./features/frontendProductsSlice";

import productsSlice from "./features/productsSlice";



const store = configureStore({
    reducer: {
        adminAuth: adminAuthSlice,
        customerAuth: customerAuthSlice,
        
        category: categorySlice,
       
   
        
        products: productsSlice,
        frontendProducts: frontendProductsSlice,
   

    }
})

export default store