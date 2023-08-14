
import axios from 'axios';
import Select from 'react-select';
import { useState, useEffect } from 'react';
import AsyncSelect from 'react-select/async';
import api from '../config/api';
const api_instance = new api();

export const renderFilterValueFiled = (filterSelect, option,setFilters,filters) => {
    const handleValueChange = (field, value) => {
        const updatedFilters = { ...filters };
        updatedFilters[field] = { ...updatedFilters[field], value };
        // console.log('updatedFilters : ',updatedFilters[field]);
        
        setFilters(updatedFilters);
    };
    
    const handleInputValueChange = (field, event) => {
        handleValueChange(field, event.target.value);
    };
    
    const handelBetween = (field, event) => {
        const { name, value } = event.target;
        const existingFilter = filters[field];
        const existingValue = existingFilter ? existingFilter.value : '';
        const [existingFrom = '', existingTo = ''] = existingValue.split('|');
        const newFrom = name === 'from' ? value : existingFrom;
        const newTo = name === 'to' ? value : existingTo;
        const combinedValue = newFrom + '|' + newTo;
        handleValueChange(field, combinedValue);
    };
    
    const handelDueIn = (field, event) => {
        const { name, value } = event.target;
        const existingFilter = filters[field];
        const existingValue = existingFilter ? existingFilter.value : '2_days';
        const [existingVal = '2', existingPeriod = 'days'] = existingValue.split('|');
        let newVal = name === 'period_val' ? value : existingVal;
        const newPeriod = name === 'period' ? value : existingPeriod;
        if (!newVal) {
            newVal = '2';
        }
        const combinedValue = newVal + '_' + newPeriod;
        handleValueChange(field, combinedValue);
    };

    const handleSelectMultipleDuration = (field, selectedOptions,condtion = 'is_not') => {
        let combinedValue = '';
        if(condtion === 'is_not'){
             combinedValue = selectedOptions.map(option => option.value).join(',');
        }
        else if(condtion === 'is')
        {
            
        }
        handleValueChange(field, combinedValue);
    };
    const handleSelectMultiple = (field, selectedOptions) => {
        const combinedValue = selectedOptions.map(option => option.value).join(',');
        handleValueChange(field, combinedValue);
    };

    const handleSelectMultipleUser = (field, selectedOptions) => {
        const userIds = selectedOptions.map((option) => option.value).join(',');
        handleValueChange(field, userIds);
    };
  
    const loadAdminUsers = async (inputValue, option) => {
        if (inputValue.length < 2) return [];
        const apiUrl = option.type_info.api;
        const valField ='id';
        const nameField ='name';
        const avatarField ='avatar';
        const emailField ='email';
        try {
            const result = await api_instance.loadAdminUsers(inputValue, apiUrl);
          if (result.status) {
            const options = result.data.map((user) => ({
              value: user[valField],
              label: (
                <div className="flex items-center">
                  <img src={user[avatarField]} alt="avatar" className="w-8 h-8 mr-2 rounded-full" />
                  <div>
                    <div className="text-sm font-bold">{user[nameField]}</div>
                    <div className="text-xs text-gray-500">{user[emailField]}</div>
                  </div>
                </div>
              ),
            }));
            return options;
          } else {
            console.error('An error occurred while fetching users', result.message);
            return [];
          }
        } catch (error) {
          console.error('An error occurred while fetching users:', error);
          return [];
        }
      };
      
    const loadModels = async (inputValue ,option) => {

        if (inputValue.length < 2) return [];
        const apiUrl = option.type_info.api;
        const valField =option.type_info.value_flield;
        const labelField =option.type_info.lable_filed;

        try {
            const result = await api_instance.loadApiModelsPost(inputValue, apiUrl);
          if (result.status) {
            const options = result.data.map((model) => ({
              value: modle[valField],
              label: (
                <div className="flex items-center">
                  <div>
                    <div className="text-sm font-bold">{modle[labelField]}</div>
                  </div>
                </div>
              ),
            }));
            return options;
          } else {
            console.error('An error occurred while fetching users', result.message);
            return [];
          }
        } catch (error) {
          console.error('An error occurred while fetching users:', error);
          return [];
        }
    };
    const condition = filterSelect.condition;
    const type_condition = option.type;
    if (!option.condition[condition]) return null;
    if (!option.condition[condition].input) {
        return null;
    }

    if (type_condition == "number") {
        switch (condition) {
            
            case 'between':
                return (
                    <>
                    <label className="block text-sm text-gray-600">From:</label>
                    <input type="number" name="from" className="border p-2 w-full" onChange={(e) => handelBetween(option.value, e)} />
                    <label className="block text-sm text-gray-600">To:</label>
                    <input type="number" name="to" className="border p-2 w-full" onChange={(e) => handelBetween(option.value, e)} />
                    </>
                );
            case 'not_between':
                return (
                    <>
                    <label className="block text-sm text-gray-600">From:</label>
                    <input type="number" name="from" className="border p-2 w-full" onChange={(e) => handelBetween(option.value, e)} />
                    <label className="block text-sm text-gray-600">To:</label>
                    <input type="number" name="to" className="border p-2 w-full" onChange={(e) => handelBetween(option.value, e)} />
                    </>
                );
            default:
                return (
                    <>
                        <label className="block font-semibold">Value:</label>
                        <input
                            type="number"
                            placeholder={`Search value`}
                            className="border p-2 w-full"
                            onChange={(e) => handleInputValueChange(option.value, e)}
                        />
                    </>
                );
        }
    }
    else if (type_condition == "select") {
        switch (condition) {
            case 'between':
                return (
                    <>
                        <label className="block text-sm text-gray-600">From:</label>
                        <input type="date" name="from" className="border p-2 w-full" onChange={(e) => handelBetween(option.value, e)} />
                        <label className="block text-sm text-gray-600">To:</label>
                        <input type="date" name="to" className="border p-2 w-full" onChange={(e) => handelBetween(option.value, e)} />
                    </>
                )
                break;
            case 'is_empty':
            case 'is_not_empty':

                break;
            case 'in_the_last':
            case 'due_in':
                return (
                    <>
                        <div className="flex">
                            <input
                                type="number"
                                placeholder='2'
                                className="border p-2 w-1/2"
                                min="1"
                                name='period_val'
                                onChange={(event) => handelDueIn(option.value, event)}
                            />
                            <select
                                name='period'
                                className="border p-2 w-1/2"
                                defaultValue="days"
                                onChange={(event) => handelDueIn(option.value, event)}
                            >
                                <option value="days">Days</option>
                                <option value="weeks">Weeks</option>
                                <option value="months">Months</option>
                            </select>
                        </div>
                    </>
                );
            case 'on':
            case 'before':
            case 'after':
                return (
                    <>
                        <input
                            type="date"
                            className="border p-2 w-full"
                            onChange={(e) => handleInputValueChange(option.value, e)}
                        />
                    </>
                );

            default:
                return (
                    <>
                        <label className="block font-semibold">Value:</label>
                        <input
                            type="text"
                            placeholder={`Search value that contains`}
                            className="border p-2 w-full"
                            onChange={(e) => handleInputValueChange(option.value, e)}
                        />
                    </>
                );
        }
    }
    else if (type_condition == "select2_multiple_duration") {
        const type_condition_ops = option.options;
        const type_condition_ops_formed = Object.keys(type_condition_ops).map((key) => ({
            value: key,
            label: type_condition_ops[key],
          }));

        switch (condition) {
            case 'is_empty':
            case 'is_not_empty':
                break;
            case 'is_not':
                return(
                    <>
                        <Select placeholder="Select an option"
                            onChange={(e) => handleSelectMultipleDuration(option.value, e , 'is_not')}
                            options={type_condition_ops_formed} isMulti />
                    </>
                    
                );
            case 'is':
              
                return(
                    <>
                        <Select placeholder="Select an option"
                            onChange={(e) => handleSelectMultipleDuration(option.value, e ,'is')}
                            options={type_condition_ops_formed} isMulti />
                        <div className="flex mt-4">
                                <input
                                    type="number"
                                    placeholder='Days'
                                    className="border p-2 w-1/2"
                                    min="1"
                                    name='duration'
                                    onChange={(event) => handleSelectMultipleDuration(option.value, event ,'is')}
                                />
                               <select
                                name='duration_condtion'
                                className="border p-2 w-1/2"
                                placeholder='Select a Condition'
                                onChange={(event) => handleSelectMultipleDuration(option.value, event ,'is')}
                                >
                                <option value="=">=</option>
                                <option value="<">&lt;</option>
                                <option value=">">&gt;</option>
                                <option value="<=">&lt;=</option>
                                <option value=">=">&gt;=</option>
                                </select>

                        </div>
                    </>
                );                
            default:
                return (
                    <>
                        <label className="block font-semibold">Value:</label>
                        <input
                            type="text"
                            placeholder={`Search value that contains`}
                            className="border p-2 w-full"
                            onChange={(e) => handleInputValueChange(option.value, e)}
                        />
                    </>
                );
        }
    }
    else if (type_condition == "select2_multiple") {
        const type_condition_ops = option.options;
        const type_condition_ops_formed = Object.keys(type_condition_ops).map((key) => ({
            value: key,
            label: type_condition_ops[key],
          }));

        switch (condition) {
            case 'is_empty':
            case 'is_not_empty':
                break;
            case 'is_not':
            case 'is':
                return(
                    <>
                        <Select placeholder="Select an option"
                            onChange={(e) => handleSelectMultiple(option.value, e )}
                            options={type_condition_ops_formed} isMulti />
                    </>
                    
                );
                      
            default:
                return (
                    <>
                        <label className="block font-semibold">Value:</label>
                        <input
                            type="text"
                            placeholder={`Search value that contains`}
                            className="border p-2 w-full"
                            onChange={(e) => handleInputValueChange(option.value, e)}
                        />
                    </>
                );
        }
    }
    else if (type_condition == "select2_multiple_api_user") {
        
        switch (condition) {
            case 'is_empty':
            case 'is_not_empty':
                break;
            case 'is_not':
            case 'is':
                return(
                    <>
                 <AsyncSelect
                        placeholder="Type at least 2 characters to search..."
                        loadOptions={(e) => loadAdminUsers(e, option)}
                        onChange={(e) => handleSelectMultipleUser(option.value, e)}
                        isMulti
                    />
                </>  
                );
            default:
                return (
                    <>
                        <label className="block font-semibold">Value:</label>
                        <input
                            type="text"
                            placeholder={`Search value that contains`}
                            className="border p-2 w-full"
                            onChange={(e) => handleInputValueChange(option.value, e)}
                        />
                    </>
                );
        }
    }
    else if (type_condition == "select2_multiple_api") {
        
        switch (condition) {
            case 'is_empty':
            case 'is_not_empty':
                break;
            case 'is_not':
            case 'is':
                return(
                    <>
                 <AsyncSelect
                        placeholder="Type at least 2 characters to search..."
                        loadOptions={(e)=>loadModels(e,option)}
                        onChange={(e) => handleSelectMultiple(option.value, e)}
                        isMulti
                    />
                </>  
                );
            default:
                return (
                    <>
                        <label className="block font-semibold">Value:</label>
                        <input
                            type="text"
                            placeholder={`Search value that contains`}
                            className="border p-2 w-full"
                            onChange={(e) => handleInputValueChange(option.value, e)}
                        />
                    </>
                );
        }
    }
    
    else if (type_condition == "text") {
        switch (condition) {
            case 'between':
                return (
                    <>
                        <label className="block text-sm text-gray-600">From:</label>
                        <input type="date" name="from" className="border p-2 w-full" onChange={(e) => handelBetween(option.value, e)} />
                        <label className="block text-sm text-gray-600">To:</label>
                        <input type="date" name="to" className="border p-2 w-full" onChange={(e) => handelBetween(option.value, e)} />
                    </>
                )
                break;
            case 'is_empty':
            case 'is_not_empty':

                break;
            case 'in_the_last':
            case 'due_in':
                return (
                    <>
                        <div className="flex">
                            <input
                                type="number"
                                placeholder='2'
                                className="border p-2 w-1/2"
                                min="1"
                                name='period_val'
                                onChange={(event) => handelDueIn(option.value, event)}
                            />
                            <select
                                name='period'
                                className="border p-2 w-1/2"
                                defaultValue="days"
                                onChange={(event) => handelDueIn(option.value, event)}
                            >
                                <option value="days">Days</option>
                                <option value="weeks">Weeks</option>
                                <option value="months">Months</option>
                            </select>
                        </div>
                    </>
                );
            case 'on':
            case 'before':
            case 'after':
                return (
                    <>
                        <input
                            type="date"
                            className="border p-2 w-full"
                            onChange={(e) => handleInputValueChange(option.value, e)}
                        />
                    </>
                );

            default:
                return (
                    <>
                        <label className="block font-semibold">Value:</label>
                        <input
                            type="text"
                            placeholder={`Search value that contains`}
                            className="border p-2 w-full"
                            onChange={(e) => handleInputValueChange(option.value, e)}
                        />
                    </>
                );
        }
    }
    else if (type_condition == "date") {
        switch (condition) {
            case 'between':
                return (
                    <>
                        <label className="block text-sm text-gray-600">From:</label>
                        <input type="date" name="from" className="border p-2 w-full" onChange={(e) => handelBetween(option.value, e)} />
                        <label className="block text-sm text-gray-600">To:</label>
                        <input type="date" name="to" className="border p-2 w-full" onChange={(e) => handelBetween(option.value, e)} />
                    </>
                )
                break;
            case 'is_empty':
            case 'is_not_empty':

                break;
            case 'in_the_last':
            case 'due_in':
                return (
                    <>
                        <div className="flex">
                            <input
                                type="number"
                                placeholder='2'
                                className="border p-2 w-1/2"
                                min="1"
                                name='period_val'
                                onChange={(event) => handelDueIn(option.value, event)}
                            />
                            <select
                                name='period'
                                className="border p-2 w-1/2"
                                defaultValue="days"
                                onChange={(event) => handelDueIn(option.value, event)}
                            >
                                <option value="days">Days</option>
                                <option value="weeks">Weeks</option>
                                <option value="months">Months</option>
                            </select>
                        </div>
                    </>
                );
            case 'on':
            case 'before':
            case 'after':
                return (
                    <>
                        <input
                            type="date"
                            className="border p-2 w-full"
                            onChange={(e) => handleInputValueChange(option.value, e)}
                        />
                    </>
                );

            default:
                return (
                    <>
                        <label className="block font-semibold">Value:</label>
                        <input
                            type="text"
                            placeholder={`Search value that contains`}
                            className="border p-2 w-full"
                            onChange={(e) => handleInputValueChange(option.value, e)}
                        />
                    </>
                );
        }
    }
    else if (type_condition == "c") {
        switch (condition) {
            case 'between':
                return (
                    <>
                        <label className="block text-sm text-gray-600">From:</label>
                        <input type="date" name="from" className="border p-2 w-full" onChange={(e) => handelBetween(option.value, e)} />
                        <label className="block text-sm text-gray-600">To:</label>
                        <input type="date" name="to" className="border p-2 w-full" onChange={(e) => handelBetween(option.value, e)} />
                    </>
                )
                break;
            case 'is_empty':
            case 'is_not_empty':

                break;
            case 'in_the_last':
            case 'due_in':
                return (
                    <>
                        <div className="flex">
                            <input
                                type="number"
                                placeholder='2'
                                className="border p-2 w-1/2"
                                min="1"
                                name='period_val'
                                onChange={(event) => handelDueIn(option.value, event)}
                            />
                            <select
                                name='period'
                                className="border p-2 w-1/2"
                                defaultValue="days"
                                onChange={(event) => handelDueIn(option.value, event)}
                            >
                                <option value="days">Days</option>
                                <option value="weeks">Weeks</option>
                                <option value="months">Months</option>
                            </select>
                        </div>
                    </>
                );
            case 'on':
            case 'before':
            case 'after':
                return (
                    <>
                        <input
                            type="date"
                            className="border p-2 w-full"
                            onChange={(e) => handleInputValueChange(option.value, e)}
                        />
                    </>
                );

            default:
                return (
                    <>
                        <label className="block font-semibold">Value:</label>
                        <input
                            type="text"
                            placeholder={`Search value that contains`}
                            className="border p-2 w-full"
                            onChange={(e) => handleInputValueChange(option.value, e)}
                        />
                    </>
                );
        }
    }


}

