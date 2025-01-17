import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { message } from "antd";
import axios from "axios";
// import url from "./url"
// const url = "http://127.0.0.1:8000/";
//  const url = "https://spacemate.pythonanywhere.com/";
 const url = "https://www.spacemate.in/";


// userActions.js
export const userLogin = createAsyncThunk(
  "user/login",
  async ({ username, password }, thunkAPI) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${url}auth/jwt/create/`,
        { username, password },
        config
      );
      // store user's token in local storage
      const { dispatch } = thunkAPI;
      localStorage.setItem("userToken", data.access);
      localStorage.setItem("refreshToken", data.refresh);
      dispatch(getUser());
      return { data, userToken: data.access };
    } catch (err) {
      // return custom error message from API if any
      message.error("Invalid Credentials");
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const getUser = createAsyncThunk(
  "api/account/me",
  async (_, thunkAPI) => {
    try {
      // const res = await fetch(`${url}auth/users/me/`, {
      const res = await fetch(`${url}app/userinfo`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          Accept: "application/json",
        },
      });
      const data = await res.json();

      if (data.role === "ADMIN") {
        // dispatch(is_staff());
        localStorage.setItem("alpha", "beta");
      } else {
        localStorage.removeItem("alpha");
      }

      localStorage.setItem("user", JSON.stringify({ ...data }));
      console.log("getuser", data);
      if (res.status === 200) {
        return { ...data };
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const checkAuth1 = createAsyncThunk(
  "api/account/verify",
  async (_, thunkAPI) => {
    const access = localStorage.getItem("userToken");
    if (!access) return thunkAPI.rejectWithValue("No token");

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${access}`);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: access,
      redirect: "follow",
    };
    try {
      const res = await fetch(`${url}api/auth/jwt/verify/`, requestOptions);

      const data = await res.json();

      if (res.status === 200) {
        const { dispatch } = thunkAPI;

        // dispatch(getUser());
        // localStorage.getItem("userToken", access);
        return data;
      } else if (res.status === 401) {
        localStorage.removeItem("userToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("user");
        localStorage.removeItem("alpha");
        localStorage.removeItem("usera");

        return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      localStorage.removeItem("userToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("user");
      localStorage.removeItem("alpha");
      localStorage.removeItem("usera");
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);
export const client_page = createAsyncThunk(
  "client_page",
  async (username, thunkAPI) => {
    try {
      // configure header's Content-Type as JSON

      console.log("client_page", username);
      return username;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
export const quotation_page = createAsyncThunk(
  "quotation_page",
  async (username, thunkAPI) => {
    try {
      // configure header's Content-Type as JSON

      console.log("quotation_page", username);
      return username;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
export const item_page = createAsyncThunk(
  "item_page",
  async (username, thunkAPI) => {
    try {
      // configure header's Content-Type as JSON

      console.log("item_page", username);
      return username;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
export const Design_page = createAsyncThunk(
  "design_page",
  async (username, thunkAPI) => {
    try {
      // configure header's Content-Type as JSON

      console.log("design_page", username);
      return username;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
export const Design_page2 = createAsyncThunk(
  "design_page2",
  async (username, thunkAPI) => {
    try {
      // configure header's Content-Type as JSON

      console.log("design_page2", username);
      return username;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
export const Enquiry_page = createAsyncThunk(
  "enquiry_page",
  async (username, thunkAPI) => {
    try {
      // configure header's Content-Type as JSON

      console.log("enquiry_page", username);
      return username;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
export const Order_page = createAsyncThunk(
  "order_page",
  async (username, thunkAPI) => {
    try {
      // configure header's Content-Type as JSON

      console.log("order_page", username);
      return username;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
export const Filter_Enquiry = createAsyncThunk(
  "filter_enquiry",
  async (username, thunkAPI) => {
    try {
      // configure header's Content-Type as JSON

      console.log("filter_enquiry", username);
      return username;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const Login_show = createAsyncThunk(
  "login_show_s",
  async (username, thunkAPI) => {
    try {
      // configure header's Content-Type as JSON

      console.log("Login_show", username);
      return username;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const checkAuth = createAsyncThunk(
  "api/account/verify",
  async (_, thunkAPI) => {
    const access = localStorage.getItem("userToken");
    if (!access) return thunkAPI.rejectWithValue("No token");

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      token: access,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    try {
      const res = await fetch(`${url}auth/jwt/verify/`, requestOptions);

      const data = await res.json();
      console.log("checkauth", data);

      if (res.status === 200) {
        const { dispatch } = thunkAPI;
        // console.log("2000000")
        dispatch(getUser());
        // localStorage.getItem("userToken", access);
        return data;
      } else {
        localStorage.removeItem("userToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("user");
        localStorage.removeItem("alpha");
        localStorage.removeItem("usera");

        return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      localStorage.removeItem("userToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("user");
      localStorage.removeItem("alpha");
      localStorage.removeItem("usera");

      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

// initialize userToken from local storage
const userToken = localStorage.getItem("userToken", "role")
  ? localStorage.getItem("userToken", "role")
  : null;

const initialState = {
  loading: true,
  user: null,
  userToken: localStorage.getItem("userToken"),
  success: false,
  isAuthenticated: false,
  error: null,
  loginStatus: "",
  loginError: "",
  client_page: 1,
  quotation_page: 1,
  item_page: 1,
  enquiry_page: 1,
  design_page: 1,
  design_page2: 1,
  order_page: 1,
  login_show: false,

  filter_enquiry: {
    name: [""],
    email: [""],
    mobile: [""],
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout(state, action) {
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("userToken");
      localStorage.removeItem("user");
      localStorage.removeItem("alpha");
      localStorage.removeItem("usera");

      return {
        ...state,
        userToken: "",
        user: "",
        loading: false,
        isAuthenticated: false,
        userToken: "",
        client_page: 1,
        item_page: 1,
        quotation_page: 1,
        enquiry_page: 1,
        design_page: 1,
        design_page2: 1,
        order_page: 1,
        login_show: false,

        filter_enquiry: {
          name: [""],
          email: [""],
          mobile: [""],
        },
      };
    },
  },
  extraReducers: (builder) => {
    // login user
    builder
      .addCase(userLogin.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userToken = payload.userToken;
        state.isAuthenticated = true;
      })
      .addCase(userLogin.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.isAuthenticated = false;
        state.userToken = "";
      })
      //   get user
      .addCase(getUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;

        // state.user = action.payload;
      })
      .addCase(getUser.rejected, (state) => {
        state.loading = false;
        state.userToken = "";
      })
      //   check authenticated or not authenticated
      .addCase(checkAuth.pending, (state) => {
        state.checkAuthLoading = true;
        state.checkAuthLoading = false;
      })
      .addCase(checkAuth.fulfilled, (state) => {
        state.checkAuthLoading = false;
        state.isAuthenticated = true;
      })
      .addCase(checkAuth.rejected, (state, action) => {
        state.checkAuthLoading = false;
        state.loading = false;
        state.isAuthenticated = false;
        state.userToken = "";

        state = action.payload;
      })
      .addCase(client_page.fulfilled, (state, action) => {
        state.client_page = action.payload;
      })
      .addCase(quotation_page.fulfilled, (state, action) => {
        state.quotation_page = action.payload;
      })
      .addCase(item_page.fulfilled, (state, action) => {
        state.item_page = action.payload;
      })
      .addCase(Design_page.fulfilled, (state, action) => {
        state.design_page = action.payload;
      })
      .addCase(Design_page2.fulfilled, (state, action) => {
        state.design_page2 = action.payload;
      })
      .addCase(Filter_Enquiry.fulfilled, (state, action) => {
        state.filter_enquiry = action.payload;
      })
      .addCase(Order_page.fulfilled, (state, action) => {
        state.order_page = action.payload;
      })
      .addCase(Login_show.fulfilled, (state, action) => {
        state.login_show = action.payload;
      })

      .addCase(Enquiry_page.fulfilled, (state, action) => {
        state.enquiry_page = action.payload;
      });

    // logout
    // .addCase(logout.pending, (state) => {
    //   state.loading = true;
    // })
    // .addCase(logout.fulfilled, (state) => {
    //   state.loading = false;
    //   state.userToken = false;
    //   state.isAuthenticated = false;

    //   state.user = null;
    // })
    // .addCase(logout.rejected, (state) => {
    //   state.loading = false;
    // });
    // register user reducer...
  },
});
// export default userSlice.reducer;

export const { logout } = userSlice.actions;

// export default userSlice.reducer;
export default userSlice.reducer;
