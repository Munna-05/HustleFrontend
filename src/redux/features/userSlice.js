import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../api.js'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const notify = () => {
  console.log('clicked')
  toast.error('Enter Correct Credentials!', { position: toast.POSITION.TOP_RIGHT })
}


export const login = createAsyncThunk
  ("auth/login",
    async ({ formValue, navigate }, { rejectWithValue }) => {
      try {
        console.log('login try')
        const response = await api.logIn(formValue)
        // console.log("thunk response", response)
        if (response.data === "Invalid Email") {
          toast.error('User Not Found! Please Sign up', { position: toast.POSITION.BOTTOM_CENTER })


        } else if (response.data === "Invalid Password") {
          toast.error('Incorrect Password', { position: toast.POSITION.BOTTOM_CENTER })

        } else {
          toast.success('Successfully Logged in', { position: toast.POSITION.TOP_RIGHT })
          navigate('/')
          console.log("......",response.data.id)
          return response.data

        }

      } catch (err) {
        return rejectWithValue(err.response.data)

      }
    }

  );

const authSlice = createSlice({
  name: "auth", // the name used in the useSelector,also in store
  initialState: {
    user: null,
    error: "",
    loading: false,
  },

  reducers: {
    setLogout: (state, action) => {
      localStorage.removeItem("userData");
      localStorage.removeItem('userId');
      state.user = null;
    },

  },

  extraReducers: {
    [login.pending]: (state, action) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.loading = false;

      let { accessToken } = action.payload;
      let {id} = action.payload
      console.log(" login", accessToken);
      console.log("payload : ",action.payload)
      console.log('id==',id)
      localStorage.setItem("token", JSON.stringify(accessToken));
      localStorage.setItem('userId',id)
      

      state.user = action.payload;
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    }
  }
})

export const { setLogout } = authSlice.actions;

export default authSlice.reducer;