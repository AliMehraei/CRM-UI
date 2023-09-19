import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import api from "../../config/api";

const api_instance = new api();

export const renderFilterValueFiled = (filterSelect: any, option: any, setFilters: any, filters: any) => {
    const handleValueChange = (field: any, value: any) => {

        const updatedFilters = {...filters};
        updatedFilters[field] = {...updatedFilters[field], value};
        // console.log('updatedFilters : ',updatedFilters[field]);

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
        let duration: any;
        let duration_condition: any;
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
    const handleSelectMultiple = (field: any, selectedOptions: any) => {
        let transformedObject;

        if (Array.isArray(selectedOptions)) {
            transformedObject = {
                options: selectedOptions.map(item => item.value)
            };
        } else {
            transformedObject = {
                options: [selectedOptions.value]
            };
        }

        handleValueChange(field, transformedObject);
    };

    const handleSelectMultipleUser = (field: any, selectedOptions: any) => {
        const userIds = {
            options: selectedOptions.map((item: any) => item.value)
        };
        handleValueChange(field, userIds);
    };

    const loadAdminUsers = async (inputValue: any, option: any) => {
        if (inputValue.length < 2) return [];
        const apiUrl = option.type_info.api;
        const valField = 'id';
        const nameField = 'name';
        const avatarField = 'avatar';
        const emailField = 'email';
        try {
            const result: any = await api_instance.loadAdminUsers(inputValue, apiUrl);
            if (result.status) {
                return result.data.map((user: any) => ({
                    value: user[valField],
                    label: (
                        <div key={user[valField]} className="flex items-center">
                            <img src={user[avatarField]} alt="avatar" className="w-8 h-8 mr-2 rounded-full"/>
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

    const loadModels = async (inputValue: any, option: any) => {

        if (inputValue.length < 2) return [];
        const apiUrl = option.type_info.api;
        const apiMethod = option.type_info.method;
        const valField = option.type_info.value_flield;
        const labelField = option.type_info.lable_filed;

        try {
            const result: any = await api_instance.loadApiModelsPost(inputValue, apiUrl, apiMethod);
            if (result.status) {
                return result.data.data.map((model: any) => ({
                    value: model[valField],
                    label: (
                        <div key={model[valField]} className="flex items-center">
                            <div>
                                <div className="text-sm font-bold">{model[labelField]}</div>
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
                        <input type="number" name="from" className="border p-2 w-full"
                               onChange={(e) => handelBetween(option.value, e)}/>
                        <label className="block text-sm text-gray-600">To:</label>
                        <input type="number" name="to" className="border p-2 w-full"
                               onChange={(e) => handelBetween(option.value, e)}/>
                    </>
                );
            case 'not_between':
                return (
                    <>
                        <label className="block text-sm text-gray-600">From:</label>
                        <input type="number" name="from" className="border p-2 w-full"
                               onChange={(e) => handelBetween(option.value, e)}/>
                        <label className="block text-sm text-gray-600">To:</label>
                        <input type="number" name="to" className="border p-2 w-full"
                               onChange={(e) => handelBetween(option.value, e)}/>
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
    } else if (type_condition == "select") {
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
                return (
                    <>
                        <Select placeholder="Select an option"
                                onChange={(e) => handleSelectMultiple(option.value, e)}
                                options={type_condition_ops_formed} isMulti={false}/>
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
    } else if (type_condition == "select2_multiple_duration") {
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
                return (
                    <>
                        <Select placeholder="Select an option"
                                onChange={(e) => handleSelectMultipleDuration(option.value, e, 'is_not')}
                                options={type_condition_ops_formed} isMulti/>
                    </>

                );
            case 'is':

                return (
                    <>
                        <Select placeholder="Select an option"

                                onChange={(e) => handleSelectMultipleDuration(option.value, e, 'is')}
                                options={type_condition_ops_formed} isMulti/>
                        <div className=" mt-4">

                            <label className="block font-semibold">Duration:</label>

                            <div className="mb-2">
                                <input
                                    type="number"
                                    placeholder='Days'
                                    className="border p-2 w-1/2"
                                    min="1"
                                    name='duration'
                                    onChange={(event) => handleSelectMultipleDuration(option.value, event, 'is')}
                                />
                                <select
                                    name='duration_condition'
                                    className="border p-2 w-1/2"
                                    placeholder='Select a Condition'
                                    onChange={(event) => handleSelectMultipleDuration(option.value, event, 'is')}
                                >
                                    <option value="=">=</option>
                                    <option value="<">&lt;</option>
                                    <option value=">">&gt;</option>
                                    <option value="<=">&lt;=</option>
                                    <option value=">=">&gt;=</option>
                                </select>
                            </div>
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
    } else if (type_condition == "select2_multiple") {
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
                return (
                    <>
                        <Select placeholder="Select an option"
                                onChange={(e) => handleSelectMultiple(option.value, e)}
                                options={type_condition_ops_formed} isMulti/>
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
    } else if (type_condition == "select2_multiple_api_user") {

        switch (condition) {
            case 'is_empty':
            case 'is_not_empty':
                break;
            case 'is_not':
            case 'is':
                return (
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
    } else if (type_condition == "select2_multiple_api") {

        switch (condition) {
            case 'is_empty':
            case 'is_not_empty':
                break;
            case 'is_not':
            case 'is':
                return (
                    <>
                        <AsyncSelect
                            placeholder="Type at least 2 characters to search..."
                            loadOptions={(e) => loadModels(e, option)}
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
    } else if (type_condition == "text") {
        switch (condition) {
            case 'between':
                return (
                    <>
                        <label className="block text-sm text-gray-600">From:</label>
                        <input type="date" name="from" className="border p-2 w-full"
                               onChange={(e) => handelBetween(option.value, e)}/>
                        <label className="block text-sm text-gray-600">To:</label>
                        <input type="date" name="to" className="border p-2 w-full"
                               onChange={(e) => handelBetween(option.value, e)}/>
                    </>
                )

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
    } else if (type_condition == "date") {
        switch (condition) {
            case 'between':
                return (
                    <>
                        <label className="block text-sm text-gray-600">From:</label>
                        <input type="date" name="from" className="border p-2 w-full"
                               onChange={(e) => handelBetween(option.value, e)}/>
                        <label className="block text-sm text-gray-600">To:</label>
                        <input type="date" name="to" className="border p-2 w-full"
                               onChange={(e) => handelBetween(option.value, e)}/>
                    </>
                )
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

