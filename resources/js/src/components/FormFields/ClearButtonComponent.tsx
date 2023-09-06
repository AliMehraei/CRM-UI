const ClearButtonComponent = ({callBack}: any) => {
    return (<button type="button" className="ml-2" onClick={callBack}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
             xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
            <circle opacity="0.5" cx="12" cy="12" r="10" stroke="currentColor"
                    strokeWidth="1.5"></circle>
            <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="currentColor"
                  strokeWidth="1.5" strokeLinecap="round"></path>
        </svg>
    </button>)
}
export default ClearButtonComponent
