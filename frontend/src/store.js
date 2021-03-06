import { configureStore } from "@reduxjs/toolkit";
import {
  productListSlice,
  productDetailSlice,
  productDeleteSlice,
  productCreateSlice,
  productUpdateSlice,
  productReviewCreateSlice,
  topProductsSlice,
} from "./slice/productSlice";
import { cartSlice } from "./slice/cartSlice";
import { loadingSlice } from "./slice/loadingSlice";
import {
  userLoginSlice,
  userRegisterSlice,
  userDetailsSlice,
  userUpdateProfileSlice,
  userListSlice,
  userDeleteSlice,
  userUpdateSlice,
} from "./slice/userSlice";
import {
  orderCreateSlice,
  orderDetailsSlice,
  orderPaySlice,
  myOrderListSlice,
  orderListSlice,
  orderDeliveredSlice,
} from "./slice/orderSlice";

const store = configureStore({
  reducer: {
    loading: loadingSlice.reducer,
    productList: productListSlice.reducer,
    productDetail: productDetailSlice.reducer,
    productDelete: productDeleteSlice.reducer,
    productCreate: productCreateSlice.reducer,
    productUpdate: productUpdateSlice.reducer,
    cart: cartSlice.reducer,

    userLogin: userLoginSlice.reducer,
    userRegister: userRegisterSlice.reducer,
    userDetails: userDetailsSlice.reducer,
    userUpdateProfile: userUpdateProfileSlice.reducer,
    userList: userListSlice.reducer,
    userDelete: userDeleteSlice.reducer,
    userUpdate: userUpdateSlice.reducer,

    orderCreate: orderCreateSlice.reducer,
    orderDetails: orderDetailsSlice.reducer,
    orderPay: orderPaySlice.reducer,
    myOrderList: myOrderListSlice.reducer,
    orderList: orderListSlice.reducer,
    orderDelivered: orderDeliveredSlice.reducer,
    productReviewCreate: productReviewCreateSlice.reducer,
    topProducts: topProductsSlice.reducer,
  },
});

export default store;
