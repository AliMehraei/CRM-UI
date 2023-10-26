import React from 'react';

const MultipleLineSectionPreview = ({ sectionTitle, data }) => {
    return (
        <div className="flex justify-between lg:flex-row flex-col gap-6 flex-wrap">
            <h2 className='text-base'>{sectionTitle}</h2>
            <div className="flex justify-between flex-col gap-6 ">
                {data.map((item, index) => (
                    <div key={index} className="flex items-center w-full justify-between mb-2">
                        <div className="text-white-dark flex">{item.label} :</div>
                        <div className='flex'>{item.value}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MultipleLineSectionPreview;
