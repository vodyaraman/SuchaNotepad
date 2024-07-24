import React, { createContext, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setValidation, setGroupName, clearGroup, setError, clearError } from '../../../Processes/Group';

import { getGroupList, updateGroup, addUserToGroup } from '../../../Processes/Group';

import { useAddGroupMutation } from '../../../Processes/Group/API/group-api';

// Context to manage group content
export const GroupContext = createContext();

// Provider
export const GroupManagerProvider = ({ children }) => {
    const dispatch = useDispatch();
    const groupState = useSelector((state) => state.group.group);
    const [addGroup, {error}] = useAddGroupMutation();

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
            const data = await addGroup(groupData).unwrap()
            clearGroupData()
            return data

        } else{
            setErrors(['Проверьте правильность введенных данных'])
            console.log(error);
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

