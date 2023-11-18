import React from 'react';
import { useState } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.css';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';

const Filter = () => {

    const dispatch = useDispatch();
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;
    const [date3, setDate3] = useState<any>('2022-07-05 to 2022-07-10');
    const [selectedOptionsFirst, setSelectedOptionsFirst] = useState(null);
    const [selectedOptionsSecond, setSelectedOptionsSecond] = useState(null);

    const handleFirstSelectChange = (selectedOptions : any) => {
        setSelectedOptionsFirst(selectedOptions);
    };

    const handleSecondSelectChange = (selectedOptions : any) => {
        setSelectedOptionsSecond(selectedOptions);
    };

    return (
        <div className="grid grid-cols-3 gap-4 mb-5">

            {/* First Multi-Select */}
            <div>
            <Select
                isMulti
                options={[
                    { value: 'option1', label: 'Option 1' },
                    { value: 'option2', label: 'Option 2' },
                    // Add more options as needed
                ]}
                className="form-input"
                value={selectedOptionsFirst}
                onChange={handleFirstSelectChange}
            />
            </div>


            {/* Second Multi-Select */}
            <div>
            <Select
                isMulti
                options={[
                    { value: 'optionA', label: 'Option A' },
                    { value: 'optionB', label: 'Option B' },
                    // Add more options as needed
                ]}
                className="form-input" // Add spacing to separate the two selects
                value={selectedOptionsSecond}
                onChange={handleSecondSelectChange}
            />
            </div>

            <div className="col-span-3 md:col-span-1 items-end">
            <Flatpickr
                options={{
                    mode: 'range',
                    dateFormat: 'Y-m-d',
                    position: isRtl ? 'auto right' : 'auto left',
                }}
                value={date3}
                className="form-input"
                onChange={(date3) => setDate3(date3)}
            />
            </div>
        </div>
    );
};

export default Filter;
