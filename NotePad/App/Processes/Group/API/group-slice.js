import { createSlice } from '@reduxjs/toolkit';
import { createGroup, updateGroup } from './group-thunks';

// Создание слайса для управления группами
const groupSlice = createSlice({
  name: 'group',
  initialState: {
    group: {
      ownerID: '',
      groupName: '',
      createdAt: Date.now(),
      loading: false,
      error: [],
    },
  },
  reducers: {
    setGroupName(state, action) {
      state.group.groupName = action.payload ;
    },
    clearGroup(state) {
      state.group = {
        ownerID: '',
        groupName: '',
        createdAt: Date.now(),
        loading: false,
        error: [],
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createGroup.pending, (state) => {
        state.group.loading = true;
        state.group.error = [];
      })
      .addCase(createGroup.fulfilled, (state, action) => {
        state.group = { ...state.group, ...action.payload };
        state.group.loading = false;
      })
      .addCase(createGroup.rejected, (state, action) => {
        state.group.loading = false;
        state.group.error = [...state.group.error, ...action.payload];
      })
      .addCase(updateGroup.pending, (state) => {
        state.group.loading = true;
        state.group.error = [];
      })
      .addCase(updateGroup.fulfilled, (state, action) => {
        state.group = { ...state.group, ...action.payload };
        state.group.loading = false;
      })
      .addCase(updateGroup.rejected, (state, action) => {
        state.group.loading = false;
        state.group.error = [...state.group.error, ...action.payload];
      })
  },
});

export const { setGroupName, clearGroup } = groupSlice.actions;

export default groupSlice.reducer;
