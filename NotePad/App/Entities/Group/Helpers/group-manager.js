import React, { createContext, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGroup, clearGroup } from './groupSlice';
import { createGroup, updateGroup, addUserToGroup } from './group-thunks';

// Context to manage group content
export const GroupContext = createContext();

// Provider
export const GroupManagerProvider = ({ children }) => {
    const dispatch = useDispatch();
    const group = useSelector((state) => state.group.group);

    const setGroupData = (updatedGroup) => {
        dispatch(setGroup(updatedGroup));
    };

    const createNewGroup = (groupData) => {
        dispatch(createGroup(groupData));
    };

    const updateExistingGroup = (groupId, groupData) => {
        dispatch(updateGroup({ groupId, groupData }));
    };

    const addUser = (groupId, userId) => {
        dispatch(addUserToGroup({ groupId, userId }));
    };

    const clearGroupData = () => {
        dispatch(clearGroup());
    };

    const { ownerID, groupName, groupCustom: { groupColor, groupPicture }, isPrivate, createdAt, loading, error } = group;

    return (
        <GroupContext.Provider value={{
            ownerID, groupName, groupColor, groupPicture, isPrivate, createdAt, loading, error,
            setGroupData, createNewGroup, updateExistingGroup, addUser, clearGroupData
        }}>
            {children}
        </GroupContext.Provider>
    );
};

// Custom hook
export const useGroup = () => useContext(GroupContext);

