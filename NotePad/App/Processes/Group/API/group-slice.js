import { createSlice } from '@reduxjs/toolkit';
import { createGroup, updateGroup, addUserToGroup } from './group-thunks';

// Создание слайса для управления группами
const groupSlice = createSlice({
  name: 'group',
  initialState: {
    group: {
      ownerID: '',
      groupName: '',
      groupCustom: {
        groupColor: 'white',
        groupPicture: 'panda',
      },
      isPrivate: false,
      createdAt: Date.now(),
      loading: false,
      error: [],
    },
  },
  reducers: {
    setGroup(state, action) {
      state.group = { ...state.group, ...action.payload };
    },
    clearGroup(state) {
      state.group = {
        ownerID: '',
        groupName: '',
        groupCustom: {
          groupColor: 'white',
          groupPicture: 'panda',
        },
        isPrivate: false,
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
      .addCase(addUserToGroup.pending, (state) => {
        state.group.loading = true;
        state.group.error = [];
      })
      .addCase(addUserToGroup.fulfilled, (state, action) => {
        state.group = { ...state.group, ...action.payload };
        state.group.loading = false;
      })
      .addCase(addUserToGroup.rejected, (state, action) => {
        state.group.loading = false;
        state.group.error = [...state.group.error, ...action.payload];
      });
  },
});

export const { setGroup, clearGroup } = groupSlice.actions;

export default groupSlice.reducer;
