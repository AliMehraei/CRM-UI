import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {AccountTypes, Currencies, handleUploadFile, loadOwners} from "../../../../components/Functions/CommonFunctions";
import {updateFormData} from "../../../../store/accountFormSlice";
import Select from "react-select";
import AsyncSelect from "react-select/async";
import {loadUsers} from "../../../RFQ/components/edit/HeaderSection";
import {useDispatch, useSelector} from "react-redux";
import api from "../../../../config/api";

const TechnicalInformationSection = () => {
    const dispatch = useDispatch();
    const api_instance = new api();
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };
    const fields = {
        'Technical information': {
            'ZohoBooksID':
                <input
                    id="zoho_books_id"
                    name="zoho_books_id"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                />,

            'BooksID EUR':
                <input
                    id="books_id_eur"
                    name="books_id_eur"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                />,
        },
        '': {
            'Account Margin':
                <input
                    id="account_margin"
                    name="account_margin"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                />,


            'BooksID USD':
                <input
                    id="books_id_usd"
                    name="books_id_usd"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                />,

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
