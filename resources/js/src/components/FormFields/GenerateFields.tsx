import {RequiredComponent} from "./RequiredComponent";
import {an} from "@fullcalendar/core/internal-common";


const GenerateFields = ({fields}: any) => {
    return (
        <>
            {Object.entries(fields).map(([sectionTitle, sectionContent]: any, index) => (
                <div key={`${sectionTitle}_${index}`} className="lg:w-1/2 w-full ltr:lg:mr-6 rtl:lg:ml-6 mb-6">
                    <div key={sectionTitle} className="">
                        <div className="text-lg">{sectionTitle ? `${sectionTitle}:` :
                            <div className="mt-10"></div>}</div>
                        {Object.entries(sectionContent).map(([label, inputComponent] : any, index) => (
                            <div key={label} className="mt-4 flex items-center">
                                <label key={label} className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0">
                                    {label}
                                    {inputComponent.props.required && <RequiredComponent/>}
                                </label>
                                {inputComponent}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    )
}

export default GenerateFields
