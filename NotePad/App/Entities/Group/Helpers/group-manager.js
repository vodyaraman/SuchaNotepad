import React, { createContext, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGroupName, clearGroup, setError, clearError } from '../../../Processes/Group';

// import { createGroup, updateGroup, addUserToGroup } from './group-thunks';

// Context to manage group content
export const GroupContext = createContext();

// Provider
export const GroupManagerProvider = ({ children }) => {
    const dispatch = useDispatch();
    const groupState = useSelector((state) => state.group.group);

    const setGroupData = (updatedGroup) => {
        dispatch(setGroupName(updatedGroup.groupName));
    };

    const updateGroupName = (groupName) => {
        setGroupData({...groupState, groupName})
    }

    const clearGroupData = () => {
        dispatch(clearGroup());
    };

    const setErrors = (error) => {
        dispatch(clearError())
        dispatch(setError(error))
    }
    

    return (
        <GroupContext.Provider value={{
            groupState, setErrors, updateGroupName, setGroupData, clearGroupData, 
        }}>
            {children}
        </GroupContext.Provider>
    );
};

// Custom hook
export const useGroup = () => useContext(GroupContext);

