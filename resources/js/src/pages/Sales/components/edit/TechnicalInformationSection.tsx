import {useDispatch, useSelector} from "react-redux";
import {updateFormData} from "../../../../store/salesOrderFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import Select from "react-select";
import {SalesOrderApproveChanges} from "../../../../components/Options/SelectOptions";
const TechnicalInformationSection = () => {
    const dispatch = useDispatch();
    const formState = useSelector((state: any) => state.salesOrderForm);
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };





    const fields = {
        'Technical information': {


            'Waiting for approval': (
                <input
                id="waiting_approval"
                type="checkbox"
                name="waiting_approval"
                className="form-checkbox"
                onChange={(e:any) => handleChangeField(e.target.name, e.target.checked)}
                defaultChecked={formState.waiting_approval}
                />
            ),
            'Approval': (
                <input
                id="approval"
                type="checkbox"
                name="approval"
                className="form-checkbox"
                onChange={(e:any) => handleChangeField(e.target.name, e.target.checked)}
                defaultChecked={formState.approval}
                />
            ),
            'Approve Changes': (
                <Select
                options={SalesOrderApproveChanges}
                name="approval_changes"
                id="approval_changes"
                onChange={({value}: any) => {
                    handleChangeField('approval_changes', value)
                }}
                className="flex-1"
                defaultValue={SalesOrderApproveChanges.find((title) => title.value == formState.approval_changes)}
                />
            ),
            'Tech': (
                <input
                id="tech"
                type="checkbox"
                name="tech"
                className="form-checkbox"
                onChange={(e:any) => handleChangeField(e.target.name, e.target.checked)}
                defaultChecked={formState.tech}
                />
            ),


        },
        '': {


            'Technical info': (
                <textarea
                id="tech_info"
                rows={2}
                name="tech_info"
                className="form-textarea flex-1"
                placeholder=""
                defaultValue={formState.tech_info}
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}></textarea>
            ),
            'Subform': (
                <textarea
                id="subform"
                rows={2}
                name="subform"
                className="form-textarea flex-1"
                placeholder=""
                  defaultValue={formState.subform}
                onChange={(e:any) => handleChangeField(e.target.name, e.target.value)}></textarea>
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

export default TechnicalInformationSection;
