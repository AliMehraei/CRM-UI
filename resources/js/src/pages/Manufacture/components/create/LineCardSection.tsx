import {RequiredComponent} from "../../../../components/FormFields/RequiredComponent";
import AsyncSelect from "react-select/async";
import {handleOwnerChange, loadOwners} from "../../../RFQ/components/edit/HeaderSection";
import {useDispatch, useSelector} from "react-redux";
import api from "../../../../config/api";
import {updateFormData} from "../../../../store/manufactureFormSlice";
import {an} from "@fullcalendar/core/internal-common";
import GenerateFields from "../../../../components/FormFields/GenerateFields";

const LineCardSection = () => {
    const formState = useSelector((state: any) => state.manufactureForm);
    const dispatch = useDispatch();
    const api_instance = new api();

    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({field, value}));
    };

    const handleChangeVendorLine = (e: any) => {
        console.log(e);
    };

    const handleChangeStrongCard = (e: any) => {
        console.log(e)
    };

    const searchVendor = async () => {
        const valField = 'id';
        const nameField = 'name';
        const testVendors = [
            {id: '1', name: 'test1'},
            {id: '2', name: 'test2'},
            {id: '3', name: 'test3'},
            {id: '4', name: 'test4'},
            {id: '5', name: 'test5'},
            {id: '6', name: 'test6'},
            {id: '7', name: 'test7'}

        ];
        return testVendors.map((data: any) => ({
            value: data[valField],
            label: (
                <div key={data[valField]} className="flex items-center">
                    <div>
                        <div className="text-sm font-bold">{data[nameField]}</div>
                    </div>
                </div>
            ),
        }));
        const result = await api_instance.searchVendor();

        if (result.status) {
            return result.data.map((data: any) => ({
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
        'Line Card': {
            'Vendor_Line Card': <AsyncSelect isMulti={false} id="line_card_id" name="line_card_id"
                                             placeholder="Type at least 2 characters to search..."
                                             loadOptions={searchVendor} onChange={handleChangeVendorLine}
                                             className="flex-1"/>,
        },
        '': {
            'Vendor_Strong Card': <AsyncSelect isMulti={false} id="strong_card_id" name="strong_card_id"
                                               placeholder="Type at least 2 characters to search..."
                                               loadOptions={searchVendor} onChange={handleChangeStrongCard}
                                               className="flex-1"/>,
        }
    }
    return (<>
            <div className="flex justify-between lg:flex-row flex-col">
                <GenerateFields fields={fields}/>

            </div>
        </>
    )
}

export default LineCardSection;
