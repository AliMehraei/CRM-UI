import AsyncSelect from "react-select/async";
import {useDispatch, useSelector} from "react-redux";
import api from "../../../../config/api";
import {updateFormData} from "../../../../store/purchaseOrderFormSlice";
import GenerateFields from "../../../../components/FormFields/GenerateFields";
import {
     searchSalesOrder,
} from "../../../../components/Functions/CommonFunctions";

const LinkedSOSection = () => {
    const dispatch = useDispatch();
    const api_instance = new api();
    const formState = useSelector((state: any) => state.purchaseOrderForm);
    const handleChangeField = (field: any, value: any) => {
        dispatch(updateFormData({[field]: value}));
    };


    const handleChangeSalesOrder = async (value: string) => {
        const response = await api_instance.fetchSingleSalesOrder(value);
        if (response.status != 200)
            return;
        const salesOrder = response.data.data.salesOrder;
        dispatch(updateFormData({['sales_order']: salesOrder}));
        const account = salesOrder.account
        if (account == null)
            return;

        const addressFields = [
            'billing_street',
            'billing_city',
            'billing_state',
            'billing_code',
            'billing_country',
            'shipping_street',
            'shipping_city',
            'shipping_state',
            'shipping_code',
            'shipping_country',
        ];

        const formDataUpdate: any = {};
        addressFields.forEach(field => {
            formDataUpdate[field] = account[field] ?? null;
        });
        dispatch(updateFormData(formDataUpdate));


    }

    const fields = {
        'Linked SO': {


            'SO Number': (
                <AsyncSelect
                    isMulti={false}
                    id="sales_order_id"
                    placeholder="Type at least 2 characters to search..."
                    name="sales_order_id"
                    loadOptions={searchSalesOrder}
                    onChange={({value}: any) => {
                        handleChangeField('sales_order_id', value);
                        handleChangeSalesOrder(value);
                    }}
                    className="flex-1"
                    defaultValue={{
                        value: formState.sales_order_id,
                        label: (
                            <div key={formState.sales_order_id}
                                 className="flex items-center">
                                <div>
                                    <div
                                        className="text-sm font-bold">{formState.sales_order?.subject}</div>
                                </div>
                            </div>
                        )
                    }}

                />
            ),

            'Account Name': (
                <input
                    id="account_id"
                    name="account_id"
                    value={formState.sales_order?.account?.account_name}
                    className="form-input disabled:pointer-events-none bg-[#eee] flex-1 "
                    disabled
                />
            ),

            'Quantity SO': (
                <input
                    id="quantity_so"
                    name="quantity_so"
                    className="form-input disabled:pointer-events-none bg-[#eee] flex-1 "
                    disabled
                    value={formState.sales_order?.quantity}
                />
            ),
            'Resale': (
                <input
                    id="resale"
                    name="resale"
                    className="form-input disabled:pointer-events-none bg-[#eee] flex-1 "
                    disabled
                    value={formState.sales_order?.resale_price}
                />
            ),
            'SO Status': (
                <input
                    id="so_status"
                    name="so_status"
                    className="form-input disabled:pointer-events-none bg-[#eee] flex-1 "
                    disabled
                    value={formState.sales_order?.status}
                />
            ),


        },
        '': {
            'Requested D.D.': (
                <input
                    id="so_requested_d_d"
                    name="so_requested_d_d"
                    className="form-input disabled:pointer-events-none bg-[#eee] flex-1 "
                    disabled
                    value={formState.sales_order?.requested_delivery_date}
                />
            ),
            'Confirmed D.D.': (
                //TODO : what value should set ?
                <input
                    id="so_confirmed_d_d"
                    name="so_confirmed_d_d"
                    className="form-input disabled:pointer-events-none bg-[#eee] flex-1 "
                    disabled
                />
            ),
            'D/C': (
                <input
                    id="dc_so"
                    name="dc_so"
                    className="form-input disabled:pointer-events-none bg-[#eee] flex-1 "
                    disabled
                    value={formState.sales_order?.dc}
                />
            ),


            'SPQ SO': (
                <input
                    id="spq_so"
                    name="spq_so"
                    className="form-input disabled:pointer-events-none bg-[#eee] flex-1 "
                    disabled
                    value={formState.sales_order?.spq}
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

export default LinkedSOSection;
