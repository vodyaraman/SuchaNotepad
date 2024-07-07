import { createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../../../Pull/Utils/APIClient';
import axios from 'axios';

// Асинхронные действия для групп
export const getGroupList = createAsyncThunk('group/getGroupList', async () => {
  try {
    const response = await apiClient.get('/groups/')
    
  } catch (error) {
    console.log(error)
  }

})

export const createGroup = createAsyncThunk('group/createGroup', async (groupData) => {
  try {
    const response = await axios.post(`http://${process.env.HOST}:${process.env.PORT}/groups/create`, groupData, {headers:{Authorization: `Bearer ${localStorage.getItem('authToken')}`}});
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.log(error)
  }
});

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
