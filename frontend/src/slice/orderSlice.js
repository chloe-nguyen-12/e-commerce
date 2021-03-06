import { logout } from "./userSlice";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ordersApi } from "../api/ordersApi";

// create order
export const createOrder = createAsyncThunk(
  "orders/createOrder",
  async (data) => {
    try {
      const response = await ordersApi.createOrder(data);
      return { response };
    } catch (err) {
      const error =
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message;
      return { error };
    }
  }
);
export const orderCreateSlice = createSlice({
  name: "orderCreate",
  initialState: { order: {} },
  extraReducers: {
    [createOrder.fulfilled]: (state, { payload }) => {
      if ("response" in payload) {
        state.order = payload.response;
        state.success = true;
      } else {
        state.error = payload.error;
      }
    },
  },
});

//get order details
export const getOrderDetails = createAsyncThunk(
  "orders/getOrderDetails",
  async (id) => {
    try {
      const response = await ordersApi.getOrderDetail(id);
      return { response };
    } catch (err) {
      const error =
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message;
      return { error };
    }
  }
);
export const orderDetailsSlice = createSlice({
  name: "orderDetails",
  initialState: { loading: true, order: {} },
  extraReducers: {
    [getOrderDetails.fulfilled]: (state, { payload }) => {
      if ("response" in payload) {
        state.order = payload.response;
        state.loading = false;
      } else {
        state.error = payload.error;
        state.loading = false;
      }
    },
  },
});

//update order to paid
export const payOrder = createAsyncThunk(
  "orders/payOrder",
  async ({ id, paymentResult }) => {
    try {
      const response = await ordersApi.payOrder(id, paymentResult);
      return { response };
    } catch (err) {
      const error =
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message;
      return { error };
    }
  }
);
export const orderPaySlice = createSlice({
  name: "orderPay",
  initialState: {},
  reducer: {
    resetPayOrder: (state, _) => {
      state = {};
    },
  },
  extraReducers: {
    [payOrder.fulfilled]: (state, { payload }) => {
      if ("response" in payload) {
        state.success = true;
      } else {
        state.error = payload.error;
      }
    },
  },
});
export const { resetPayOrder } = orderPaySlice.actions;

//get my order list
export const listMyOrders = createAsyncThunk(
  "orders/listMyOrders",
  async () => {
    try {
      const response = await ordersApi.listMyOrders();
      return { response };
    } catch (err) {
      const error =
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message;
      return { error };
    }
  }
);
export const myOrderListSlice = createSlice({
  name: "myOrderListSlice",
  initialState: { orders: [], loading: true },
  extraReducers: {
    [listMyOrders.fulfilled]: (state, { payload }) => {
      if ("response" in payload) {
        state.orders = payload.response;
        state.loading = false;
      } else {
        state.error = payload.error;
        state.loading = false;
      }
    },
    [logout]: (state) => {
      state.orders = [];
    },
  },
});

//get order list
export const listOrders = createAsyncThunk("orders/listOrders", async () => {
  try {
    const response = await ordersApi.listOrders();
    return { response };
  } catch (err) {
    const error =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message;
    return { error };
  }
});
export const orderListSlice = createSlice({
  name: "orderListSlice",
  initialState: { orders: [] },
  extraReducers: {
    [listOrders.fulfilled]: (state, { payload }) => {
      if ("response" in payload) {
        state.orders = payload.response;
        state.loading = false;
      } else {
        state.error = payload.error;
        state.loading = false;
      }
    },
  },
});

//update order to deliver
export const deliverOrder = createAsyncThunk(
  "orders/deliverOrder",
  async (id) => {
    try {
      const response = await ordersApi.deliverOrder(id);
      return { response };
    } catch (err) {
      const error =
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message;
      return { error };
    }
  }
);
export const orderDeliveredSlice = createSlice({
  name: "orderDelivered",
  initialState: {},
  reducer: {},
  extraReducers: {
    [deliverOrder.fulfilled]: (state, { payload }) => {
      if ("response" in payload) {
        state.success = true;
      } else {
        state.error = payload.error;
      }
    },
  },
});
