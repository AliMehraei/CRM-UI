import AsyncSelect from "react-select/async";
import {useDispatch} from "react-redux";
import {updateFormData} from "../../../../store/salesOrderFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {searchProducts} from "../../../../components/Functions/CommonFunctions";
import Flatpickr from "react-flatpickr";

const SOLineSection = () => {
    const dispatch = useDispatch();
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };


    const fields = {
        'SO line': {
            'Requested Delivery Date': (
                <Flatpickr
                    options={{
                        dateFormat: 'Y-m-d ',
                        position: 'auto left',
                    }}
                    placeholder='Y-m-d'
                    name="requested_delivery_date"
                    value=''
                    className="form-input flex-1"
                    onChange={(_, dateString) => handleChangeField('requested_delivery_date', dateString)} // Update the field value on change

                />
            ),

            'Product Name': (
                <AsyncSelect
                    defaultOptions={true}
                    isMulti={false}
                    required
                    id="product_id"
                    placeholder="Type at least 2 characters to search..."
                    name="product_id"
                    loadOptions={searchProducts}
                    onChange={({value}: any) => {
                        handleChangeField('product_id', value)
                    }}
                    className="flex-1"

                />
            ),
            'Customer part Id': (
                <input
                    id="customer_part_id"
                    name="customer_part_id"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                />
            ),
            'Quantity': (
                <input
                    id="quantity"
                    name="quantity"
                    className="form-input flex-1 "
                    type="number"
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                />
            ),
            'List Price': (
                <input
                    type="number"

                    id="list_price"
                    name="list_price"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                />
            ),
        },
        '': {
            'Estimated Delivery Date': (
                <Flatpickr
                    options={{
                        dateFormat: 'Y-m-d ',
                        position: 'auto left',
                    }}
                    placeholder='Y-m-d'

                    name="estimated_delivery_date"
                    value=''
                    className="form-input flex-1"
                    onChange={(_, dateString) => handleChangeField('estimated_delivery_date', dateString)} // Update the field value on change

                />
            ),

            'Date Code': (
                <input
                    id="date_code"
                    name="date_code"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                />
            ),
            'SPQ': (
                <input
                    id="spq"
                    name="spq"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                />
            ),


            'comment': (
                <input
                    id="comment"
                    name="comment"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                />
            ),


        }
    }
    return (
        <>
            <div className="flex justify-between lg:flex-row flex-col">
                <GenerateFields fields={fields}/>
            </div>
        </>
    )
}

export default SOLineSection;
