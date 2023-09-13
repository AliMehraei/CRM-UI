import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/productFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import Select from "react-select";
import Flatpickr from "react-flatpickr";

const APIDataSection = () => {
    const dispatch = useDispatch();
    const formState = useSelector((state: any) => state.productForm);
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };





    const fields = {
        'API Data': {

            'Octopart ID': (
                <input
                id="octopart_id"
                name="octopart_id"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.octopart_id}
                />
            ),
            'Octopart URL': (
                <input
                id="octopart_url"
                name="octopart_url"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.octopart_url}
                />
            ),
            'updateByMouser': (
                <input
                id="update_by_mouser"
                type="checkbox"

                name="update_by_mouser"
                className="form-checkbox"
                onChange={(e) => handleChangeField(e.target.name, e.target.checked)}
                defaultChecked={formState.update_by_mouser}
                />
            ),
            'ZohoBooksID': (
                <input
                id="zoho_books_id"
                name="zoho_books_id"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.zoho_books_id}
                />
            ),
            'OP Last Update': (
                <Flatpickr
                name="last_activity_date"
                options={{
                    dateFormat: 'd-m-Y',
                    defaultDate: `${formState.last_activity_date ? new Date(formState.last_activity_date) : ''}`,
                }}
                defaultValue={formState.last_activity_date}
                className="form-input flex-1"
                placeholder="MM DD YYYY"
                onChange={(_,dateString) => handleChangeField('last_activity_date', dateString)}
                />
            ),
            'OP Failure Message': (
                <input
                id="op_failure_message"
                name="op_failure_message"
                className="form-input flex-1 "
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                defaultValue={formState.op_failure_message}
                />
            ),
            'Octopart Images': (
                <textarea
                id="octopart_images"
                rows={2}
                name="octopart_images"
                className="form-textarea flex-1"
                placeholder=""
                defaultValue={formState.octopart_images}
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}></textarea>
            ),
            'Octopart Datasheets': (
                <textarea
                id="octopart_datasheets"
                rows={2}
                name="octopart_datasheets"
                className="form-textarea flex-1"
                placeholder=""
                defaultValue={formState.octopart_datasheets}
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}></textarea>
            ),
            'Octopart Compliance Documents': (
                <textarea
                id="octopart_compliance_documents"
                rows={2}
                name="octopart_compliance_documents"
                className="form-textarea flex-1"
                placeholder=""
                  defaultValue={formState.octopart_compliance_documents}
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}></textarea>
            ),

        },
        '': {

            'Mouser URL': (
                <input
                    id="mouser_url"
                    name="mouser_url"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.mouser_url}
                />
            ),
            'Mouser ID': (
                <input
                    id="mouser_id"
                    name="mouser_id"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.mouser_id}
                />
            ),
            'Mouser Category': (
                <input
                    id="mouser_category"
                    name="mouser_category"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.mouser_category}
                />
            ),
            'M Last Update': (
                <Flatpickr

                name="m_last_update"
                options={{
                    dateFormat: 'd-m-Y',
                    defaultDate: `${formState.m_last_update ? new Date(formState.m_last_update) : ''}`,
                }}
                defaultValue={formState.m_last_update}
                className="form-input flex-1"
                placeholder="MM DD YYYY"
                onChange={(_,dateString) => handleChangeField('m_last_update', dateString)}
                />
            ),
            'Product Margin': (
                <input
                    id="product_margin"
                    name="product_margin"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.product_margin}
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

export default APIDataSection;
