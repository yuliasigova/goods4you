import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

interface IAuthState {
  userId: number | null
  token: string | null
}

const userSlice = createSlice({
  name: 'auth',
  initialState: { userId: null, token: null } as IAuthState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token
        state.user = payload.user
      },
    )
  },
  selectors: {
    selectUser: state => state.userId,
},
})


export default userSlice.reducer