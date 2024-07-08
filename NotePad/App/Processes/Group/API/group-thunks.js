import { createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../../../Pull/Utils/APIClient';

// Асинхронные действия для групп
export const addUserToGroup = createAsyncThunk('group/addUserToGroup', async ({ groupId, userId }, { rejectWithValue }) => {
  try {
    const response = await apiClient.post('/groups/addUser', { groupId, userId });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export const updateGroup = createAsyncThunk('group/updateGroup', async ({ groupId, groupData }, { rejectWithValue }) => {
  try {
    const response = await apiClient.put(`/groups/${groupId}`, groupData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});
