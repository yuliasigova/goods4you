import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { userApi } from '../api/userApi'

interface IAuthState {
  userId: number | null
  token: string | null
}

const userSlice = createSlice({
  name: 'auth',
  initialState: { userId: null, token: null, } as IAuthState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      isAnyOf(userApi.endpoints.getUser.matchFulfilled),
      (state, { payload }) => {
        state.userId = payload.id
      },
    )
  },
  selectors: {
    selectUser: state => state.userId,
    selectToken: state => state.token
  }
})

export const {selectUser, selectToken} = userSlice.selectors

export default userSlice.reducer