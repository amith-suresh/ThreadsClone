import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


interface User {
    id: string;
    name: string;
    email: string;
    username: string;
}


interface SignupState {
    name: string;
    username: string;
    email: string;
    phoneNumber: string;
    password: string;
    confirmPassword: string;
    signupStatus: "Idle" | "Loading" | "Successful" | "Failed";
    signupError: string | null;
}


interface LoginState {
    loginStatus: "Idle" | "Loading" | "Successful" | "Failed";
    loginError: string | null;
}


interface UserState {
    users: User[];
    userStatus: "Idle" | "Loading" | "Successful" | "Failed";
    userError: string | null;
}


interface AuthState extends SignupState, LoginState, UserState {}


const initialState: AuthState = {
    name: "",
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    signupStatus: "Idle",
    signupError: null,
    loginStatus: "Idle",
    loginError: null,
    users: [],
    userStatus: "Idle",
    userError: null,
};


export const SignupUser = createAsyncThunk<
    unknown,
    { name: string; username: string; email: string; phoneNumber: string; password: string; },
    { rejectValue: string }
>(
    'auth/signupUser',
    async (values, { rejectWithValue }) => {
        try {
            const response = await axios.post("https://social-media-rest-apis.onrender.com/api/users/signup", values);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response.data.message);
        }
    }
);


export const LoginUser = createAsyncThunk<
    unknown,
    { email: string; password: string },
    { rejectValue: string }
>(
    'auth/loginUser',
    async (values, { rejectWithValue }) => {
        try {
            const response = await axios.post("https://social-media-rest-apis.onrender.com/api/users/login", values);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response.data.message);
        }
    }
);


export const fetchUsers = createAsyncThunk("auth/fetchUsers", async () => {
    const response = await axios.get("https://social-media-rest-apis.onrender.com/api/users/");
    return response.data.users;
});


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setUserName: (state, action) => {
            state.username = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPhone: (state, action) => {
            state.phoneNumber = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        setConfirmPassword: (state, action) => {
            state.confirmPassword = action.payload;
        },
    },
    extraReducers: (builder) => {
        
        builder
            .addCase(SignupUser.pending, (state) => {
                state.signupStatus = "Loading";
                state.signupError = null; 
            })
            .addCase(SignupUser.fulfilled, (state) => {
                state.signupStatus = "Successful";
                state.signupError = null; 
            })
            .addCase(SignupUser.rejected, (state, action) => {
                state.signupStatus = "Failed";
                state.signupError = action.payload as string;
            })
        
            .addCase(LoginUser.pending, (state) => {
                state.loginStatus = "Loading";
                state.loginError = null; 
            })
            .addCase(LoginUser.fulfilled, (state) => {
                state.loginStatus = "Successful";
                state.loginError = null; 
            })
            .addCase(LoginUser.rejected, (state, action) => {
                state.loginStatus = "Failed";
                state.loginError = action.payload as string;
            })
            
            .addCase(fetchUsers.pending, (state) => {
                state.userStatus = "Loading";
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.userStatus = "Successful";
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.userStatus = "Failed";
                state.userError = action.error.message || null;
            });
    },
});


export const { setName, setUserName, setEmail, setPhone, setPassword, setConfirmPassword } = authSlice.actions;


export default authSlice.reducer;
