import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {updateFormData} from "../../../../store/accountFormSlice";
import {useDispatch, useSelector} from "react-redux";

const TechnicalInformationSection = () => {
    const dispatch = useDispatch();
    const formState = useSelector((state: any) => state.accountForm);

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
                    defaultValue={formState.zoho_books_id}

                />,

            'BooksID EUR':
                <input
                    id="books_id_eur"
                    name="books_id_eur"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.books_id_eur}

                />,
        },
        '': {
            'Account Margin':
                <input
                    id="account_margin"
                    name="account_margin"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.account_margin}

                />,


            'BooksID USD':
                <input
                    id="books_id_usd"
                    name="books_id_usd"
                    className="form-input flex-1 "
                    onChange={(e) => handleChangeField(e.target.name, e.target.value)}
                    defaultValue={formState.books_id_usd}

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
