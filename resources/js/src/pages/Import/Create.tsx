import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../store';
import { setPageTitle } from '../../store/themeConfigSlice';
import React from 'react';

const Create = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const moduleName = params.module;
    useEffect(() => {
        console.log(moduleName, (moduleName.charAt(0).toUpperCase() + moduleName.slice(1)));
        
        dispatch(setPageTitle('Import' + (moduleName.charAt(0).toUpperCase() + moduleName.slice(1))));
    }, [moduleName]);

    const isDark = useSelector((state: IRootState) => state.themeConfig.theme) === 'dark' ? true : false;
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

    const [loading] = useState(false);

    return (
        <div>
        
        </div>
    );
};

export default Create;
