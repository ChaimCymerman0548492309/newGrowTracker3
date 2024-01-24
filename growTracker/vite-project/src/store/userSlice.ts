import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define a type for the AxiosHeaders object
type AxiosHeaders = { [key: string]: string };

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  try {
    const response = await axios.get('http://localhost:4000/user');
    
    // Extract only the needed data from the Axios response
    const { data, headers } = response;

    // Serialize the non-serializable headers
    const serializedHeaders: AxiosHeaders = {};
    for (const key of Object.keys(headers)) {
      serializedHeaders[key] = headers[key];
    }

    return { data, headers: serializedHeaders };
  } catch (error) {
    throw error; 
  }
});

const initialState: any = {
  users: [],
  status: '',
  error: '',
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    addUserRtk: (state, action) => {
      state.users.unshift(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload.data;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        if (action.error) {
          state.error = action.error.message as string;
        }
      });
  },
});

export const { addUserRtk, setUsers } = usersSlice.actions;

export default usersSlice.reducer;
