import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/vendorFormSlice";
import api from "../../../../config/api";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {handleUploadFile} from "../../../../components/Functions/CommonFunctions";

const APIDataSection = () => {
    const formState = useSelector((state: any) => state.vendorForm);
    const dispatch = useDispatch();
    const api_instance = new api();

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({ [field]: value }));
    };



    const searchVendor = async (query: string) => {
        const valField = 'id';
        const nameField = 'vendor_name';

        const result = await api_instance.searchVendor({query: query});

        if (result.status) {
            return result.data.data.map((data: any) => ({
                value: data[valField],
                label: (
                    <div key={data[valField]} className="flex items-center">
                        <div>
                            <div className="text-sm font-bold">{data[nameField]}</div>
                        </div>
                    </div>
                ),
            }));
        }
    };

    const fields = {
        'API Data': {
            'Octopart ID': (<input
                id="octopart_id"
                name="octopart_id"
                className="form-input flex-1 "
                defaultValue={formState.octopart_id}
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
            />),



        },
        '': {
            'ZohoBooksID': (<input
                id="zoho_book_id"
                name="zoho_book_id"
                className="form-input flex-1 "
                defaultValue={formState.zoho_book_id}
                onChange={(e) => handleChangeField(e.target.name, e.target.value)}
            />),


        }
    }
    return (<>
            <div className="flex justify-between lg:flex-row flex-col">
                <GenerateFields fields={fields}/>

            </div>
        </>
    )

}

export default APIDataSection;
