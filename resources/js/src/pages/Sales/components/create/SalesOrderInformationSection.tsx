import {useDispatch, useSelector} from "react-redux";
import api from "../../../../config/api";
import {updateFormData} from "../../../../store/salesOrderFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import Select from "react-select";
import {
    StatusOption
} from "../../../../components/Functions/CommonFunctions";
import Flatpickr from "react-flatpickr";
import FileUploadComponent from "../../../../components/FormFields/FileUploadComponent";
import {SalesOrderTypeOption, SalesOrderStatusOption} from "../../../../components/Options/SelectOptions";

const SalesOrderInformationSection = () => {
    const dispatch = useDispatch();
    const api_instance = new api();
    const formState = useSelector((state: any) => state.salesOrderForm);
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };

    const fields = {
        'Sales Orders Information': {
            'Purchase Order': (
                <input
                    id="purchase_order"
                    name="purchase_order"
                    className="form-input flex-1 "
                    onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                />
            ),
            'Customer PO Date': (
                <Flatpickr
                    options={{
                        dateFormat: 'Y-m-d ',
                        position: 'auto left',
                    }}
                    name="customer_po_date"
                    value=''
                    className="form-input flex-1"
                    onChange={(_, dateString) => handleChangeField('customer_po_date', dateString)} // Update the field value on change

                />
            ),
            'PO Upload': (
                <FileUploadComponent
                    id={'po_upload'}
                    modelName="salesOrder"
                    formState={formState}
                    formAttribute={'po_upload'}
                    updateFormData={updateFormData}
                />
            ),
            'SO Type': (
                <Select
                    options={SalesOrderTypeOption}
                    name="so_type"
                    id="so_type"
                    onChange={({value}: any) => {
                        handleChangeField('so_type', value)
                    }}
                    className="flex-1"
                />
            ),
            'Parent SO Nr.': (
                <input
                    id="parent_so_nr"
                    name="parent_so_nr"
                    className="form-input flex-1 "
                    onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                />
            ),


        },
        '': {
            'Subject': (
                <input
                    id="subject"
                    required
                    name="subject"
                    className="form-input flex-1 "
                    onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                />
            ),
            'Pending': (
                <input
                    id="pending"
                    name="pending"
                    className="form-input flex-1 "
                    onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                />
            ),
            'Status': (
                <Select
                    options={SalesOrderStatusOption}
                    name="status"
                    id="status"
                    onChange={({value}: any) => {
                        handleChangeField('status', value)
                    }}
                    className="flex-1"
                />
            ),


            'ZohoBooksID': (
                <input
                    id="zoho_books_id"
                    name="zoho_books_id"
                    className="form-input flex-1 "
                    onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
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

export default SalesOrderInformationSection;
