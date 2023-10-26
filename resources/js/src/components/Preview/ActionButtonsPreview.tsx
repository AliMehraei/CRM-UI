
import React from 'react';
import { Link } from 'react-router-dom';
import { EditIcon , CreateIcon , PrintIcon } from "../FormFields/CommonIcons";
const ActionButtonsPreview = ({ 
    loading, 
    hasPermission, 
    modelId, 
    exportTable, 
    routeModel, 
    permissionModel 
}) => {
    return (
        <>
            <button type="button" className="btn btn-info gap-2" onClick={exportTable}>
                <PrintIcon/>
                Print
            </button>
            {!loading && hasPermission(`create-${permissionModel}`) ? (
                <Link to={`/${routeModel}/add`} className="btn btn-primary gap-2">
                   <CreateIcon/>
                    Create
                </Link>
            ) : null}
            {!loading && hasPermission(`update-${permissionModel}`) ? (
                <Link to={`/${routeModel}/edit/${modelId}`} className="btn btn-success gap-2">
                    <EditIcon/>
                    Edit
                </Link>
            ) : null}
        </>
    );
};

export default ActionButtonsPreview;
