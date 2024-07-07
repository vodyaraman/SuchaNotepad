import React, { createContext, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOwnerId, setGroupName, clearGroup, setError, clearError } from '../../../Processes/Group';

import { createGroup, updateGroup, addUserToGroup } from '../../../Processes/Group';
import GroupItemBlock from '../Overlook/group-item-block';

// Context to manage group content
export const GroupContext = createContext();

// Provider
export const GroupManagerProvider = ({ children }) => {
    const dispatch = useDispatch();
    const groupState = useSelector((state) => state.group.group);

    const setGroupData = (updatedGroup) => {
        dispatch(setGroupName(updatedGroup.groupName));
        dispatch(setOwnerId(updatedGroup.ownerId));
    };

    const updateGroupName = (groupName) => {
        setGroupData({...groupState, groupName})
    }

    const updateOwnerId = (ownerId) => {
        setGroupData({...groupState, ownerId})
    }

    const clearGroupData = () => {
        dispatch(clearGroup());
    };

    const setErrors = (error) => {
        dispatch(clearError())
        dispatch(setError(error))
    }

    const create = (groupData) => {
        dispatch(createGroup(groupData))
    }
    

    return (
        <GroupContext.Provider value={{
            groupState, setErrors, updateOwnerId, updateGroupName, setGroupData, clearGroupData, create
        }}>
            {children}
        </GroupContext.Provider>
    );
};

// Custom hook
export const useGroup = () => useContext(GroupContext);

