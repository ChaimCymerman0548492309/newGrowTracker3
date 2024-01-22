import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';





export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  
  try {
    const data = await axios.get('http://localhost:4000/user');
    
    return data
  } catch (error) {
    throw error; 
  }
});

const initialState : any = {
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
      }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        if (action.error)
        state.error = action.error.message as string;
      });
  },
});


// export const { addUserRtk , setUsers } = usersSlice.actions;
export default usersSlice.reducer;