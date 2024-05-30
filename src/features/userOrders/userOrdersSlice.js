import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchOrderHistory, updateOrder, deleteOrder } from './userOrdersAPI';

const initialState = {
    orders: [],
    status: 'idle',
    error: null,
};

export const fetchOrders = createAsyncThunk('userOrders/fetchOrders', async () => {
    const response = await fetchOrderHistory();
    return response;
});

export const updateOrderStatus = createAsyncThunk('userOrders/updateOrderStatus', async (orderId) => {
    const response = await updateOrder(orderId);
    return response;
});

export const deleteOrderById = createAsyncThunk('userOrders/deleteOrderById', async (orderId) => {
    await deleteOrder(orderId);
    return orderId;
});

const userOrdersSlice = createSlice({
    name: 'userOrders',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchOrders.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchOrders.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.orders = action.payload;
            })
            .addCase(fetchOrders.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(updateOrderStatus.fulfilled, (state, action) => {
                const updatedOrder = action.payload;
                const existingOrder = state.orders.find(order => order._id === updatedOrder._id);
                if (existingOrder) {
                    Object.assign(existingOrder, updatedOrder);
                }
            })
            .addCase(deleteOrderById.fulfilled, (state, action) => {
                state.orders = state.orders.filter(order => order._id !== action.payload);
            });
    },
});

export default userOrdersSlice.reducer;
