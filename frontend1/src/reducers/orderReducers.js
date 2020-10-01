import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_FAIL,
  ORDER_PAID_REQUEST,
  ORDER_PAID_SUCCESS,
  ORDER_PAID_FAILED,
  MY_ORDER_LIST_REQUEST,
  MY_ORDER_LIST_SUCCESS,
  MY_ORDER_LIST_FAIL,
} from "../constants/orderConstants";

function myOrderListReducer(
  state = {
    orders: [],
  },
  action
) {
  switch (action.type) {
    case MY_ORDER_LIST_REQUEST:
      return { loading: true };
    case MY_ORDER_LIST_SUCCESS:
      return { loading: false, orders: action.payload };
    case MY_ORDER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function orderCreateReducer(state = {}, action) {
  switch (action.type) {
    case ORDER_CREATE_REQUEST:
      return { loading: true };
    case ORDER_CREATE_SUCCESS:
      return { loading: false, order: action.payload, success: true };
    case ORDER_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function orderDetailsReducer(
  state = {
    order: {
      orderItems: [],
      shipping: {},
      payment: {},
    },
  },
  action
) {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST:
      return { loading: true };
    case ORDER_DETAILS_SUCCESS:
      return { loading: false, order: action.payload };
    case ORDER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function orderListReducer(
  state = {
    order: [],
  },
  action
) {
  switch (action.type) {
    case ORDER_LIST_REQUEST:
      return { loading: true };
    case ORDER_LIST_SUCCESS:
      return { loading: false, order: action.payload };
    case ORDER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

//⛵

function orderPaidReducer(state = {}, action) {
  switch (action.type) {
    case ORDER_PAID_REQUEST:
      return { loading: true };
    case ORDER_PAID_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case ORDER_PAID_FAILED:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
export {
  orderCreateReducer,
  orderDetailsReducer,
  orderListReducer,
  myOrderListReducer,
  orderPaidReducer
};
