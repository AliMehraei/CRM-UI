import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/leadFormSlice";
import api from "../../../../config/api";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {handleUploadFile} from "../../../../components/Functions/CommonFunctions";

const CommunicationDetailsSection = () => {
    const formState = useSelector((state: any) => state.leadForm);
    const dispatch = useDispatch();
    const api_instance = new api();

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({ [field]: value }));
    };



    const searchVendor = async (query: string) => {
        const valField = 'id';
        const nameField = 'lead_name';

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
        'Communication Details / History': {
            'Details and notes': (
                <input
                id="detail_note"
                name="detail_note"
                className="form-input flex-1 "
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
            />

            ),
            'LinkedIn Communication': (
                <textarea id="linkedin_communication" rows={3}
                name="delinkedin_communicationscription"
                className="form-textarea flex-1"
                placeholder=""
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}
                ></textarea>

            )


        },
        '': {


        }
    }
    return (<>
            <div className="flex justify-between lg:flex-row flex-col">
                <GenerateFields fields={fields}/>

            </div>
        </>
    )

}

export default CommunicationDetailsSection;
