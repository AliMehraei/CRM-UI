import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { usePopper } from 'react-popper';
const handleValueChange = (field, value) => {
    const updatedFilters = { ...filters };
    updatedFilters[field] = { ...updatedFilters[field], value };
    console.log(33333,value);
    
    setFilters(updatedFilters);
};

const handleInputValueChange = (field, event) => {
    handleValueChange(field, event.target.value);
};

const handelBetween = (field, event) => {
    const { name, value } = event.target;
    const existingFilter = filters[field];
    const existingValue = existingFilter ? existingFilter.value : '';
    const [existingFrom = '', existingTo = ''] = existingValue.split('_');
    const newFrom = name === 'from' ? value : existingFrom;
    const newTo = name === 'to' ? value : existingTo;
    const combinedValue = newFrom + '_' + newTo;
    handleValueChange(field, combinedValue);
};

const handelDueIn = (field, event) => {
    const { name, value } = event.target;
    const existingFilter = filters[field];
    const existingValue = existingFilter ? existingFilter.value : '2_days';
    const [existingVal = '2', existingPeriod = 'days'] = existingValue.split('_');
    let newVal = name === 'period_val' ? value : existingVal;
    const newPeriod = name === 'period' ? value : existingPeriod;
    if (!newVal) {
        newVal = '2';
    }
    const combinedValue = newVal + '_' + newPeriod;
    handleValueChange(field, combinedValue);
};

export const renderFilterValueFiled = (filterSelect, option) => {
    const condition = filterSelect.condition;
    const type_condition = option.type;
    if (!option.condition[condition]) return null;
    if (!option.condition[condition].input) {
        return null;
    }
    console.log(2222, option);
    console.log(1111222, type_condition);
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
    else if (type_condition == "select2") {
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


}

