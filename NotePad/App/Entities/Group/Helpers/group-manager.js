import React, { createContext, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setValidation, setGroupName, clearGroup, setError, clearError } from '../../../Processes/Group';

import { getGroupList, createGroup, updateGroup, addUserToGroup } from '../../../Processes/Group';

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

    const updateValidation = (status) => {
        dispatch(setValidation(status))
    }

    const clearGroupData = () => {
        dispatch(clearGroup());
    };

    const setErrors = (error) => {
        dispatch(clearError())
        dispatch(setError(error))
    }

    const create = async (groupData) => {
        if(groupData.groupName && groupData.validation){
            await dispatch(createGroup(groupData))
            clearGroupData()
            console.log(groupState)

        } else{
            setErrors(['Проверьте правильность введенных данных'])
        }
        
    }

    const getGroups = () => {
        dispatch(getGroupList())
    }
    

    return (
        <GroupContext.Provider value={{
            groupState, setErrors, updateValidation, updateGroupName, setGroupData, clearGroupData, create, getGroups,
        }}>
            {children}
        </GroupContext.Provider>
    );
};

// Custom hook
export const useGroup = () => useContext(GroupContext);

