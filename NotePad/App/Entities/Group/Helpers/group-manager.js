import React, { createContext, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGroupName, clearGroup } from '../../../Processes/Group';
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
    

    return (
        <GroupContext.Provider value={{
            setGroupData, clearGroupData, updateGroupName
        }}>
            {children}
        </GroupContext.Provider>
    );
};

// Custom hook
export const useGroup = () => useContext(GroupContext);

