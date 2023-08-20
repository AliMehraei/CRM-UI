import {RequiredComponent} from "./RequiredComponent";
import {useSelector} from "react-redux";


const GenerateFields = ({fields}: any) => {
    const formErrors = useSelector((state: any) => state.formErrors);

    return (
        <>
            {Object.entries(fields).map(([sectionTitle, sectionContent]: any, index) => (
                <div key={`${sectionTitle}_${index}`} className="lg:w-1/2 w-full ltr:lg:mr-6 rtl:lg:ml-6 mb-6">
                    <div key={sectionTitle} className="">
                        <div className="text-lg">{sectionTitle ? `${sectionTitle}:` :
                            <div className="mt-10"></div>}</div>
                        {Object.entries(sectionContent).map(([label, inputComponent]: any) => (
                            <div key={label}
                                 className={Object.keys(formErrors).length > 1 && formErrors[inputComponent.props.name] ? "mt-4 items-center has-error" : "mt-4 items-center"}>
                                <div className="flex">
                                    <label key={label} className="ltr:mr-2 rtl:ml-2 w-1/3 mb-0 mt-2">
                                        {label}
                                        {inputComponent.props.required && <RequiredComponent/>}
                                    </label>
                                    <div className="w-full">
                                        {inputComponent}
                                        {Object.keys(formErrors).length > 1 &&
                                            formErrors[inputComponent.props.name] &&
                                            <div
                                                className="text-danger mt-1"> {formErrors[inputComponent.props.name]}</div>}
                                    </div>
                                </div>


                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    )
}

export default GenerateFields
