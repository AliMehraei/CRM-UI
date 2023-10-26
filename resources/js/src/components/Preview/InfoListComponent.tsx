function InfoListComponent({ data }) {
    return (
        <div className="px-4">
            <div className="space-y-1 mt-6 text-base text-gray-700">
                {data.map((item, index) => (
                    <div key={index}>{item.label}: <strong>{item.value}</strong></div>
                ))}
            </div>
        </div>
    );
}

export default InfoListComponent;