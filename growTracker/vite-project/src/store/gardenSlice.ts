import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define a type for the AxiosHeaders object
type AxiosHeaders = { [key: string]: string };

// Create async thunk for fetching garden data
export const fetchGardenData = createAsyncThunk('garden/fetchGardenData', async () => {
  try {
    const response = await axios.get('http://localhost:4000/garden-rest-api');

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

// Define the type for your state
interface GardenState {
  gardenData: any[]; // Change the type if needed
  status: 'loading' | 'succeeded' | 'failed';
  error: string;
}

const initialState: GardenState = {
  gardenData: [],
  status: 'loading', // Assuming you want to start with loading
  error: '',
};

const gardenSlice = createSlice({
  name: 'garden',
  initialState,
  reducers: {
    setGardens: (state, action) => {
      state.gardenData = action.payload;
    },
    addGardenRtk: (state, action) => {
      state.gardenData.unshift(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGardenData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGardenData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.gardenData = action.payload.data;
      })
      .addCase(fetchGardenData.rejected, (state, action) => {
        state.status = 'failed';
        if (action.error) {
          state.error = action.error.message as string;
        }
      });
  },
});

export const { setGardens, addGardenRtk } = gardenSlice.actions;

export default gardenSlice.reducer;
