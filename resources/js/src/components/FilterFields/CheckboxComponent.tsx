const CheckboxComponent = ({option, handleFieldChange, selectedFields}: any) => (
    <label className="flex items-center cursor-pointer">
        <input
            type="checkbox"
            value={option.value}
            onChange={(e:any) => handleFieldChange(e, option)}
            checked={selectedFields.includes(option.value)}
            className="form-checkbox"
        />
        <span className="text-dark">{option.label}</span>
    </label>
);

export default CheckboxComponent;
