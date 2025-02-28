import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getUsers } from '@/lib/services/user.services';

import { IUser } from '@/lib/types/users.types';

interface IUserSlice {
  users: IUser[];
  loading: boolean;
  total: number;
}
const initialState: IUserSlice = {
  users: [],
  loading: false,
  total: 0,
};

export const fetchUsers = createAsyncThunk(
  'user/fetchUsers',
  async ({
    searchTerm,
    pageNo,
    limit,
  }: {
    searchTerm: string;
    pageNo: number;
    limit: number;
  }) => {
    const response = await getUsers(searchTerm, pageNo, limit);
    return response.data;
  }
);

const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload.users;
      state.total = action.payload.total;
      state.loading = false;
    });

    builder.addCase(fetchUsers.rejected, (state) => {
      state.loading = false;
    });
  },
});
export default counterSlice.reducer;
