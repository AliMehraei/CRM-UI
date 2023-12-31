import AsyncSelect from "react-select/async";
import Select from "react-select";

export const BetweenInputs = ({onChange, defaultValue}: any) => (
    <>
        <label className="block text-sm text-gray-600">From:</label>
        <input defaultValue={defaultValue.from} type="number" name="from" className="border p-2 w-full"
               onChange={onChange}/>
        <label className="block text-sm text-gray-600">To:</label>
        <input defaultValue={defaultValue.to} type="number" name="to" className="border p-2 w-full"
               onChange={onChange}/>
    </>
);

export const ValueInput = ({onChange, placeholder, defaultValue}: any) => (
    <>
        <label className="block font-semibold">Value:</label>
        <input defaultValue={defaultValue.value} type="text" placeholder={placeholder} className="border p-2 w-full"
               onChange={onChange}/>
    </>
);

export const DurationInput = ({onChange, optionValue, defaultValue}: any) => (
    <div className=" mt-4">
        <label className="block font-semibold">Duration:</label>
        <div className="mb-2">
            <input
                type="number"
                placeholder='Days'
                className="border p-2 w-1/2"
                min="1"
                name='duration'
                defaultValue={defaultValue.duration}
                onChange={(event) => onChange(optionValue, event, 'is')}
            />
            <select
                name='duration_condition'
                className="border p-2 w-1/2"
                placeholder='Select a Condition'
                defaultValue={defaultValue.duration_condition}
                onChange={(event) => onChange(optionValue, event, 'is')}
            >
                <option value="=">=</option>
                <option value="<">&lt;</option>
                <option value=">">&gt;</option>
                <option value="<=">&lt;=</option>
                <option value=">=">&gt;=</option>
            </select>
        </div>
    </div>
);


export const DefaultInput = ({placeholder, onChange, label, defaultValue}: any) => (
    <>
        <label className="block font-semibold">{label}</label>
        <input
            type="text"
            placeholder={placeholder}
            className="border p-2 w-full"
            defaultValue={defaultValue.value}
            onChange={onChange}
        />
    </>
);

export const DateRangeInput = ({onChange, defaultValue}: any) => (
    <>
        <label className="block text-sm text-gray-600">From:</label>
        <input type="date" name="from" className="border p-2 w-full" onChange={onChange}
               defaultValue={defaultValue.from}/>
        <label className="block text-sm text-gray-600">To:</label>
        <input type="date" name="to" className="border p-2 w-full" onChange={onChange} defaultValue={defaultValue.to}/>
    </>
);

export const PeriodInput = ({onChange, defaultValue}: any) => (
    <>
        <div className="flex">
            <input
                type="number"
                placeholder='2'
                className="border p-2 w-1/2"
                min="1"
                name='period_val'
                defaultValue={defaultValue.value}
                onChange={onChange}
            />
            <select
                name='period'
                className="border p-2 w-1/2"
                defaultValue={defaultValue.period}
                onChange={onChange}
            >
                <option value="days">Days</option>
                <option value="weeks">Weeks</option>
                <option value="months">Months</option>
            </select>
        </div>
    </>
);

export const SingleDateInput = ({onChange, defaultValue}: any) => (
    <>
        <input
            defaultValue={defaultValue.value}
            type="date"
            className="border p-2 w-full"
            onChange={onChange}
        />
    </>
);

export const AsyncMultiInput = ({placeholder, loadOptions, onChange, filterSelect}: any) => {
    const selectedOptions = filterSelect?.value?.fullOptions
    const defaultValue = selectedOptions?.map((option: any) => ({
        value: option.value,
        label: option.label
    }));

    return (
        <AsyncSelect
                    defaultOptions={true}
            placeholder={placeholder}
            loadOptions={loadOptions}
            onChange={onChange}
            defaultValue={defaultValue}
            isMulti
        />)
};
export const SelectComponent = ({
                                    options,
                                    condition,
                                    optionValue,
                                    isMulti = false,
                                    handleSelectMultipleDuration,
                                    handleSelectMultiple,
                                    defaultValue
                                }: any) => {
    const optionsFormed = Object.keys(options || {}).map(key => ({value: key, label: options[key]}));
    defaultValue = defaultValue?.options
    let defaultOption;
    if (isMulti && Array.isArray(defaultValue)) {
        defaultOption = defaultValue.map(val => ({value: val, label: options[val]}));
    } else if (!isMulti && defaultValue) {
        defaultOption = {value: defaultValue, label: options[defaultValue]};
    }
    return (
        <Select
            placeholder="Select an option"
            onChange={(e:any) => (isMulti ? handleSelectMultiple(optionValue, e) : handleSelectMultipleDuration(optionValue, e, condition))}
            options={optionsFormed}
            isMulti={isMulti}
            defaultValue={defaultOption}
        />
    );
};
