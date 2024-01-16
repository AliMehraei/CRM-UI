const LoadingSpinner = () => {
    return (<>
            <div
                className="min-h-[325px] grid place-content-center  bg-opacity-[0.08] ">
                <span
                    className="animate-spin border-4 border-transparent border-l-primary rounded-full w-12 h-12 inline-block align-middle m-auto mb-10"></span>
            </div>
        </>
    )

}
export default LoadingSpinner;

