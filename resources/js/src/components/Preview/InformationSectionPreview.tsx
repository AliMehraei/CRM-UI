import React from 'react';

const InformationSectionPreview = ({ title, leftObjects, rightObjects }) => {
    return (
        <div>
            <h2 className='text-base'>{title}</h2>
            <div className="flex justify-between sm:flex-row flex-col gap-6 lg:w-2/3">
                <div className="xl:1/3 lg:w-2/5 sm:w-1/2">
                    {leftObjects.map((item, index) => (
                        <InfoItem key={index} label={item.label} value={item.value} />
                    ))}
                </div>
                <div className="xl:1/3 lg:w-2/5 sm:w-1/2">
                    {rightObjects && rightObjects.map((item, index) => (
                        <InfoItem key={index} label={item.label} value={item.value} />
                    ))}
                </div>
            </div>
        </div>
    );
}

const InfoItem = ({ label, value }) => (
    <div className="flex items-center w-full justify-between mb-2">
        <div className="text-white-dark">{label} :</div>
        <div>{value}</div>
    </div>
);

export default InformationSectionPreview;
