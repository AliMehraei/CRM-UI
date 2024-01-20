import api from "../../config/api";
import {
    AsyncMultiInput,
    BetweenInputs, DateRangeInput,
    DefaultInput,
    DurationInput, PeriodInput,
    SelectComponent, SingleDateInput,
    ValueInput
} from "./FilterInputComponents";
import React from "react";
import {useDispatch} from "react-redux";
import {updateFilterSlice} from "../../store/filterSlice";
import {displayImage, loadModels, loadModulableModels} from "../Functions/CommonFunctions";

const api_instance = new api();

const FilterValueField = ({filterSelect, option, setFilters, filters}: any) => {
    const dispatch = useDispatch();
    const condition = filterSelect.condition;
    const type_condition = option.type;
    if (!option.condition[condition]) return null;
    if (!option.condition[condition].input) {
        return null;
    }
    const defaultValue = filterSelect.value;
    const handleValueChange = (field: any, value: any) => {

        const updatedFilters = {...filters};
        updatedFilters[field] = {...updatedFilters[field], value};
        dispatch(updateFilterSlice({[field]: value.value}))

        setFilters(updatedFilters);
    };

    const handleInputValueChange = (field: any, event: any) => {
        const filterObject = {
            value: event.target.value
        };
        handleValueChange(field, filterObject);
    };

    const handelBetween = (field: any, event: any) => {
        const {name, value} = event.target;
        const existingFilter = filters[field];
        const existingValue = existingFilter ? existingFilter.value : {};
        const newFrom = name === 'from' ? value : existingValue.from || '';
        const newTo = name === 'to' ? value : existingValue.to || '';

        const filterObject = {
            from: newFrom,
            to: newTo
        };

        handleValueChange(field, filterObject);
    };

    const handelDueIn = (field: any, event: any) => {

        const {name, value} = event.target;
        const existingFilter = filters[field];
        const existingValue = existingFilter ? existingFilter.value : {};
        const newValue = name === 'period_val' ? value : existingValue.value || 2;
        const newPeriod = name === 'period' ? value : existingValue.period || 'day';

        const filterObject = {
            value: newValue,
            period: newPeriod
        };

        handleValueChange(field, filterObject);
    };

    const handleSelectMultipleDuration = (field: any, event: any, condition = 'is_not') => {

        let combinedValue: any;
        let options: any;
        let duration: any = filterSelect.value.duration;
        let duration_condition: any = filterSelect.value.duration_condition;
        if (event.target != undefined) {
            const {name, value} = event.target;
            const existingFilter = filters[field];
            const existingValue = existingFilter ? existingFilter.value : {};
            duration = name === 'duration' ? value : existingValue.duration || 2;
            duration_condition = name === 'duration_condition' ? value : existingValue.duration_condition || '=';
            options = existingValue.options ?? [];

        } else {
            options = event.map((item: any) => item.value);
        }

        if (condition === 'is_not') {
            combinedValue = {
                options: options
            };
        } else if (condition === 'is') {
            combinedValue = {
                options: options,
                duration: duration,
                duration_condition: duration_condition
            };
        }
        handleValueChange(field, combinedValue);
    };

    const handleSelect = (field: any, event: any) => {

        const value = event.value;
        console.log(field, value);
        handleValueChange(field, value);

       
    };

    const handleSelectMultiple = (field: any, selectedOptions: any) => {
        let transformedObject;
        if (Array.isArray(selectedOptions)) {
            transformedObject = {
                options: selectedOptions.map(item => item.value),
                fullOptions: selectedOptions,
                relation: option?.relation_model
            };
        } else {
            transformedObject = {
                options: [selectedOptions.value],
                fullOptions: selectedOptions,
                relation: option?.relation_model
            };
        }

        handleValueChange(field, transformedObject);
    };

    const handleSelectMultipleUser = (field: any, selectedOptions: any) => {
        const userIds = {
            options: selectedOptions.map((item: any) => item.value),
            fullOptions: selectedOptions,
        };

        handleValueChange(field, userIds);
    };

    const loadAdminUsers = async (inputValue: any) => {
        if (inputValue.length < 2) return [];
        const valField = 'userId';
        const nameField = 'name';
        const avatarField = 'avatar_data';
        const emailField = 'email';
        try {
            const result: any = await api_instance.loadAdminUsers({'search': inputValue});
            if (result.status) {
                return result.data.map((user: any) => ({
                    value: user[valField],
                    label: (
                        <div key={user[valField]} className="flex items-center">
                            <img src={displayImage(user[avatarField])} alt="avatar" className="w-8 h-8 mr-2 rounded-full"/>
                            <div>
                                <div className="text-sm font-bold">{user[nameField]}</div>
                                <div className="text-xs text-gray-500">{user[emailField]}</div>
                            </div>
                        </div>
                    ),
                }));
            } else {
                console.error('An error occurred while fetching users', result.message);
                return [];
            }
        } catch (error) {
            console.error('An error occurred while fetching users:', error);
            return [];
        }
    };


    const typeConditionHandlers: any = {
        "number": {
            "between": () => <BetweenInputs defaultValue={defaultValue}
                                            onChange={(e: any) => handelBetween(option.value, e)}/>,
            "not_between": () => <BetweenInputs defaultValue={defaultValue}
                                                onChange={(e: any) => handelBetween(option.value, e)}/>,
            "default": () => <ValueInput defaultValue={defaultValue}
                                         onChange={(e: any) => handleInputValueChange(option.value, e)}
                                         placeholder="Search value"/>
        },
        /* "select": {
             "is_not": () => <SelectComponent handleSelectMultiple={handleSelectMultiple} options={option.options}
                                              condition="is_not" optionValue={option.value}/>,
             "is": () => <SelectComponent handleSelectMultiple={handleSelectMultiple} options={option.options}
                                          condition="is" optionValue={option.value}/>,
             "default": () => <ValueInput defaultValue={defaultValue}
                                          onChange={(e: any) => handleInputValueChange(option.value, e)}
                                          placeholder="Search value that contains"/>
         },*/
        "select2_multiple_duration": {
            "is_not": () => <SelectComponent options={option.options} condition="is_not" optionValue={option.value}
                                             handleSelectMultipleDuration={handleSelectMultipleDuration}
                                             isMulti={true}/>,
            "is": () => (
                <>
                    <SelectComponent options={option.options} condition="is" optionValue={option.value} isMulti={true}
                                     defaultValue={defaultValue}
                                     handleSelectMultipleDuration={handleSelectMultipleDuration}/>
                    <DurationInput defaultValue={defaultValue} onChange={handleSelectMultipleDuration}
                                   optionValue={option.value}/>
                </>
            ),
            "default": () => <ValueInput defaultValue={defaultValue}
                                         onChange={(e: any) => handleInputValueChange(option.value, e)}
                                         placeholder="Search value that contains"/>
        },
        "select2_multiple_api_user": {
            "is_not": (option: any) => <AsyncMultiInput placeholder="Type at least 2 characters to search..."
                                                        loadOptions={(e: any) => loadAdminUsers(e)}
                                                        defaultValue={defaultValue}
                                                        filterSelect={filterSelect}
                                                        onChange={(e: any) => handleSelectMultipleUser(option.value, e)}/>,
            "is": (option: any) => <AsyncMultiInput placeholder="Type at least 2 characters to search..."
                                                    loadOptions={(e: any) => loadAdminUsers(e)}
                                                    defaultValue={defaultValue}
                                                    filterSelect={filterSelect}
                                                    onChange={(e: any) => handleSelectMultipleUser(option.value, e)}/>,
            "default": (option: any) => <DefaultInput placeholder="Search value that contains"
                                                      defaultValue={defaultValue}
                                                      onChange={(e: any) => handleInputValueChange(option.value, e)}
                                                      label="Value:"/>
        },
        "select2_multiple_api": {
            "is_not": (option: any) => <AsyncMultiInput placeholder="Type at least 2 characters to search..."
                                                        loadOptions={(e: any) => loadModels(e, option)}
                                                        defaultValue={defaultValue}
                                                        filterSelect={filterSelect}
                                                        onChange={(e: any) => handleSelectMultiple(option.value, e)}/>,
            "is": (option: any) => <AsyncMultiInput placeholder="Type at least 2 characters to search..."
                                                    loadOptions={(e: any) => loadModels(e, option)}
                                                    defaultValue={defaultValue}
                                                    filterSelect={filterSelect}
                                                    onChange={(e: any) => handleSelectMultiple(option.value, e)}/>,
            "default": (option: any) => <DefaultInput placeholder="Search value that contains"
                                                      defaultValue={defaultValue}
                                                      onChange={(e: any) => handleInputValueChange(option.value, e)}
                                                      label="Value:"/>
        },
        "select2_multiple": {
            "is_not": () => <SelectComponent options={option.options} condition="is_not" optionValue={option.value}
                                             isMulti={true} handleSelectMultiple={handleSelectMultiple}
                                             defaultValue={defaultValue}/>,
            "is": () => <SelectComponent options={option.options} condition="is" optionValue={option.value}
                                         isMulti={true} handleSelectMultiple={handleSelectMultiple}
                                         defaultValue={defaultValue}/>,
            "default": () => <ValueInput defaultValue={defaultValue}
                                         onChange={(e: any) => handleInputValueChange(option.value, e)}
                                         placeholder="Search value that contains"/>
        },
        "text": {
            "between": (option: any) => <DateRangeInput defaultValue={defaultValue}
                                                        onChange={(e: any) => handelBetween(option.value, e)}/>,
            "in_the_last": (option: any) => <PeriodInput defaultValue={defaultValue}
                                                         onChange={(e: any) => handelDueIn(option.value, e)}/>,
            "due_in": (option: any) => <PeriodInput defaultValue={defaultValue}
                                                    onChange={(e: any) => handelDueIn(option.value, e)}/>,
            "on": (option: any) => <SingleDateInput defaultValue={defaultValue}
                                                    onChange={(e: any) => handleInputValueChange(option.value, e)}/>,
            "before": (option: any) => <SingleDateInput
                defaultValue={defaultValue} onChange={(e: any) => handleInputValueChange(option.value, e)}/>,
            "after": (option: any) => <SingleDateInput defaultValue={defaultValue}
                                                       onChange={(e: any) => handleInputValueChange(option.value, e)}/>,
            "default": (option: any) => <DefaultInput placeholder="Search value that contains"
                                                      defaultValue={defaultValue}
                                                      onChange={(e: any) => handleInputValueChange(option.value, e)}
                                                      label="Value:"/>
        },
        "date": {
            "between": (option: any) => <DateRangeInput defaultValue={defaultValue}
                                                        onChange={(e: any) => handelBetween(option.value, e)}/>,
            "in_the_last": (option: any) => <PeriodInput defaultValue={defaultValue}
                                                         onChange={(e: any) => handelDueIn(option.value, e)}/>,
            "due_in": (option: any) => <PeriodInput defaultValue={defaultValue}
                                                    onChange={(e: any) => handelDueIn(option.value, e)}/>,
            "on": (option: any) => <SingleDateInput defaultValue={defaultValue}
                                                    onChange={(e: any) => handleInputValueChange(option.value, e)}/>,
            "before": (option: any) => <SingleDateInput
                defaultValue={defaultValue} onChange={(e: any) => handleInputValueChange(option.value, e)}/>,
            "after": (option: any) => <SingleDateInput defaultValue={defaultValue}
                                                       onChange={(e: any) => handleInputValueChange(option.value, e)}/>,
            "default": (option: any) => <DefaultInput placeholder="Search value that contains"
                                                      defaultValue={defaultValue}
                                                      onChange={(e: any) => handleInputValueChange(option.value, e)}
                                                      label="Value:"/>
        },
        "select2_multiple_api_userable": {
            "is_not": (option: any) => <>
                <SelectComponent 
                    options={option.options} 
                    optionValue={option.value}
                    isMulti={false}
                    defaultValue={defaultValue}
                    handleSelect={handleSelect}
                                                
                />
                <AsyncMultiInput placeholder="Type at least 2 characters to search..."
                    loadOptions={(e: any) => loadModulableModels(e, option,filterSelect)}
                    defaultValue={defaultValue}
                    filterSelect={filterSelect}
                    onChange={(e: any) => handleSelectMultiple(option.value, e)}/>,
            </>,
            "is": (option: any) => <>
                <SelectComponent 
                    options={option.options} 
                    optionValue={option.value}
                    isMulti={false}
                    defaultValue={defaultValue}
                    handleSelect={handleSelect}
                                                
                />
                <AsyncMultiInput placeholder="Type at least 2 characters to search..."
                    loadOptions={(e: any) => loadModulableModels(e, option,filterSelect)}
                    defaultValue={defaultValue}
                    filterSelect={filterSelect}
                    onChange={(e: any) => handleSelectMultiple(option.value, e)}/>,
            </>,
            "default": (option: any) => <DefaultInput placeholder="Search value that contains"
                                                      defaultValue={defaultValue}
                                                      onChange={(e: any) => handleInputValueChange(option.value, e)}
                                                      label="Value:"/>
        },
    };

    if (typeConditionHandlers[type_condition]) {
        return typeConditionHandlers[type_condition][condition] ? typeConditionHandlers[type_condition][condition](option) : typeConditionHandlers[type_condition]['default'](option);
    }

}

export default FilterValueField;
