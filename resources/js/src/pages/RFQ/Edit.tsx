import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setPageTitle} from '../../store/themeConfigSlice';
import RFQFormFields from "./components/edit/RFQFormFields";
import {updateFormData} from "../../store/rfqFormSlice";

const Add = () => {
    const formData = useSelector((state: any) => state.rfqFormSlice);
    const dispatch = useDispatch();
    const testData = {
        "id": 1,
        "uuid": "c7fe9c7d-5a35-3409-b3f4-372be67168b9",
        "account_name_id": 5341,
        "contact_name_id": 508,
        "rfq_owner_id": 74,
        "rfq_name": "RFQ-23043",
        "project_name": "Atque commodi possimus dignissimos dolorum quam et.",
        "customer_rfq_no": "RFQ-78079",
        "deal_stage": "none",
        "rfq_source": "none",
        "rfq_type": "none",
        "status": "open",
        "date_history": "1993-04-20 13:32:21",
        "portal_bom_id": "BOM-48863",
        "pm_user_id": 752747386,
        "rfq_dead_line": "2023-08-23 07:47:16",
        "customer_rfq_file": "https:\/\/via.placeholder.com\/640x480.png\/002200?text=laudantium",
        "currency": "EUR",
        "product_name_id": 450,
        "alternative_product_id": 9,
        "customer_part_id": "PART-77158",
        "special_instructions": "Vel recusandae facere sed unde.",
        "comment_for_vendors": "Fugit impedit repudiandae asperiores saepe nihil rerum sint. Sit sapiente dolore aut ut quia eos. Alias aut quia dolores laborum pariatur. Asperiores accusamus culpa eveniet quasi alias vitae ipsum.",
        "quantity": "312",
        "target_price": 6132,
        "availability_id": 32,
        "excess_id": 114,
        "processed_for_vrfq_round_1": 1,
        "processed_for_vrfq_round_2": 0,
        "exchange_rate": 1,
        "open_status_date": "1989-04-22 03:50:18",
        "open_status_time": "1984-04-06 08:20:29",
        "modified_by": 456210,
        "created_by": 4559706,
        "deleted_at": null,
        "created_at": "2023-08-16T14:42:19.000000Z",
        "updated_at": "2023-08-16T14:42:19.000000Z"
    }

    useEffect(() => {
        dispatch(setPageTitle('RFQ Add'));
    });

    useEffect(() => {
        dispatch(updateFormData(testData));
    },[]);


    return (
        <div className="flex xl:flex-row flex-col gap-2.5">
            <div className="panel px-0 flex-1 py-6 ltr:xl:mr-6 rtl:xl:ml-6 overflow-hidden">
                <RFQFormFields/>
            </div>
        </div>
    );
};

export default Add;
