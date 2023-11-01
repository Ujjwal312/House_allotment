import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signupData: null,
  loginData: null,

  loading: false,
  mobno:"",
  image:null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setSignupData(state, value) {
      state.signupData = value.payload;
    },
    
    setloginData(state, value) {
      state.loginData = value.payload;
    },
    setLoading(state, value) {
      state.loading = value.payload;
    },
    setToken(state, value) {
      state.token = value.payload;
    },
    setphno(state, value) {
      state.mobno = value.payload;
    },
    setimage(state, value) {
      state.image = value.payload;
    },
  },
});

export const { setSignupData, setLoading, setToken ,setphno,setimage,setloginData} = authSlice.actions;

export default authSlice.reducer;