import { errorToObject } from '@/utils/errorUtil';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setAuthUser } from '@/utils/localStorageUtil';
import { AuthService } from '@/services';

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const user = await AuthService.signIn({ email, password });
      setAuthUser(user);
      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(errorToObject(error));
    }
  },
);
