import React from 'react';

const ExtraEmailLogDataSectionPreview = ({ title, leftObjects, rightObjects }) => {
    return (
    <>
     <h2 className='text-xl pb-5'>{title} :</h2>
        <div className="pl-5 flex justify-between lg:flex-row flex-col gap-6 flex-wrap">
           
            <div className="flex justify-between sm:flex-row flex-col gap-6 ">
                <div className="">
                    {leftObjects.map((item, index) => (
                        <InfoItem key={index} label={item.label} value={item.value} />
                    ))}
                </div>
                <div className="">
                    {rightObjects && rightObjects.map((item, index) => (
                        <InfoItem key={index} label={item.label} value={item.value} />
                    ))}
                </div>
            </div>
        </div>
        </>
    );
}

const InfoItem = ({ label, value }) => (
    <div className="flex items-center w-full justify-between mb-2">
        <div className="text-white-dark mx-1">{label} : </div>
        <div>{value}</div>
    </div>
);

export default ExtraEmailLogDataSectionPreview;
