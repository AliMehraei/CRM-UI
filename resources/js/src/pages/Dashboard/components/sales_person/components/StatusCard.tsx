import React from 'react';

const StatusCard = ({ countModel }) => {
    const compareWithLastPeriod = (current, last) => {
        const difference = current - last;
        return {
            value: difference,
            isPositive: difference > 0,
        };
    };

    return (
        <div className="p-3 border-gray-200 shadow-3xl text-gray-800 border-2 rounded-md">
            <div className="flex n">
                <div className="ltr:mr-1 rtl:ml-1 text-xl font-semibold">Lead</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2 mb-4">
                <div className="flex items-center">
                    <div className="flex items-center">
                        Daily <span className="ltr:mr-2 text-xl rtl:ml-2">: {countModel.current_day?.lead}</span>
                    </div>
                    <div className={`badge py-0 px-1 ${compareWithLastPeriod(countModel.current_day.lead, countModel.last_day.lead).isPositive ? 'bg-green-500' : 'bg-red-500'}`}>{compareWithLastPeriod(countModel.current_day?.lead, countModel.last_day?.lead).value}</div>
                </div>
                <div className="flex items-center n">
                    <div className="flex items-center">
                        Monthly <span className="ltr:mr-2 text-xl rtl:ml-2">: {countModel.current_month?.lead}</span>
                    </div>
                    <div className={`badge py-0 px-1 ${compareWithLastPeriod(countModel.current_month.lead, countModel.last_month.lead).isPositive ? 'bg-green-500' : 'bg-red-500'}`}>{compareWithLastPeriod(countModel.current_month?.lead, countModel.last_month?.lead).value}</div>
                </div>
                <div className="flex items-center n">
                    <div className="flex items-center">
                        Quarterly <span className="ltr:mr-2 text-xl rtl:ml-2">: {countModel.current_quarter?.lead}</span>
                    </div>
                    <div className={`badge py-0 px-1 ${compareWithLastPeriod(countModel.current_quarter.lead, countModel.last_quarter.lead).isPositive ? 'bg-green-500' : 'bg-red-500'}`}>{compareWithLastPeriod(countModel.current_quarter?.lead, countModel.last_quarter?.lead).value}</div>
                </div>
                <div className="flex items-center n">
                    <div className="flex items-center">
                        Yearly <span className="ltr:mr-2 text-xl rtl:ml-2">: {countModel.current_year?.lead}</span>
                    </div>
                    <div className={`badge py-0 px-1 ${compareWithLastPeriod(countModel.current_year.lead, countModel.last_year.lead).isPositive ? 'bg-green-500' : 'bg-red-500'}`}>{compareWithLastPeriod(countModel.current_year?.lead, countModel.last_year?.lead).value}</div>
                </div>
            </div>
            <div className="flex n">
                <div className="ltr:mr-1 rtl:ml-1 text-xl font-semibold">RFQ</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2 mb-4">
                <div className="flex items-center n">
                    <div className="flex items-center">
                        Daily <span className="ltr:mr-2 text-xl rtl:ml-2">: {countModel.current_day?.rfq}</span>
                    </div>
                    <div className={`badge py-0 px-1 ${compareWithLastPeriod(countModel.current_day.rfq, countModel.last_day.rfq).isPositive ? 'bg-green-500' : 'bg-red-500'}`}>{compareWithLastPeriod(countModel.current_day?.rfq, countModel.last_day?.rfq).value}</div>
                </div>
                <div className="flex items-center n">
                    <div className="flex items-center">
                        Monthly <span className="ltr:mr-2 text-xl rtl:ml-2">: {countModel.current_month?.rfq}</span>
                    </div>
                    <div className={`badge py-0 px-1 ${compareWithLastPeriod(countModel.current_month.rfq, countModel.last_month.rfq).isPositive ? 'bg-green-500' : 'bg-red-500'}`}>{compareWithLastPeriod(countModel.current_day?.rfq, countModel.last_day?.rfq).value}</div>
                </div>
                <div className="flex items-center n">
                    <div className="flex items-center">
                        Quarterly <span className="ltr:mr-2 text-xl rtl:ml-2">: {countModel.current_quarter?.rfq}</span>
                    </div>
                    <div className={`badge py-0 px-1 ${compareWithLastPeriod(countModel.current_quarter.rfq, countModel.last_quarter.rfq).isPositive ? 'bg-green-500' : 'bg-red-500'}`}>{compareWithLastPeriod(countModel.current_day?.rfq, countModel.last_day?.rfq).value}</div>
                </div>
                <div className="flex items-center n">
                    <div className="flex items-center">
                        Yearly <span className="ltr:mr-2 text-xl rtl:ml-2">: {countModel.current_year?.rfq}</span>
                    </div>
                    <div className={`badge py-0 px-1 ${compareWithLastPeriod(countModel.current_year.rfq, countModel.last_year.rfq).isPositive ? 'bg-green-500' : 'bg-red-500'}`}>{compareWithLastPeriod(countModel.current_day?.rfq, countModel.last_day?.rfq).value}</div>
                </div>
            </div>

            <div className="flex n">
                <div className="ltr:mr-1 rtl:ml-1 text-xl font-semibold">Quote</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2 mb-4">
                <div className="flex items-center n">
                    <div className="flex items-center">
                        Daily <span className="ltr:mr-2 text-xl rtl:ml-2">: {countModel.current_day?.quote}</span>
                    </div>
                    <div className={`badge py-0 px-1 ${compareWithLastPeriod(countModel.current_day.quote, countModel.last_day.quote).isPositive ? 'bg-green-500' : 'bg-red-500'}`}>{compareWithLastPeriod(countModel.current_day?.quote, countModel.last_day?.quote).value}</div>
                </div>
                <div className="flex items-center n">
                    <div className="flex items-center">
                        Monthly <span className="ltr:mr-2 text-xl rtl:ml-2">: {countModel.current_month?.quote}</span>
                    </div>
                    <div className={`badge py-0 px-1 ${compareWithLastPeriod(countModel.current_month.quote, countModel.last_month.quote).isPositive ? 'bg-green-500' : 'bg-red-500'}`}>{compareWithLastPeriod(countModel.current_month?.quote, countModel.last_month?.quote).value}</div>
                </div>
                <div className="flex items-center n">
                    <div className="flex items-center">
                        Quarterly <span className="ltr:mr-2 text-xl rtl:ml-2">: {countModel.current_quarter?.quote}</span>
                    </div>
                    <div className={`badge py-0 px-1 ${compareWithLastPeriod(countModel.current_quarter.quote, countModel.last_quarter.quote).isPositive ? 'bg-green-500' : 'bg-red-500'}`}>{compareWithLastPeriod(countModel.current_quarter?.quote, countModel.last_quarter?.quote).value}</div>
                </div>
                <div className="flex items-center n">
                    <div className="flex items-center">
                        Yearly <span className="ltr:mr-2 text-xl rtl:ml-2">: {countModel.current_year?.quote}</span>
                    </div>
                    <div className={`badge py-0 px-1 ${compareWithLastPeriod(countModel.current_year.quote, countModel.last_year.quote).isPositive ? 'bg-green-500' : 'bg-red-500'}`}>{compareWithLastPeriod(countModel.current_year?.quote, countModel.last_year?.quote).value}</div>
                </div>
            </div>
            <div className="flex n">
                <div className="ltr:mr-1 rtl:ml-1 text-xl font-semibold">Task</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2 mb-4">
                <div className="flex items-center n">
                    <div className="flex items-center">
                        Daily <span className="ltr:mr-2 text-xl rtl:ml-2">: {countModel.current_day?.task}</span>
                    </div>
                    <div className={`badge py-0 px-1 ${compareWithLastPeriod(countModel.current_day.task, countModel.last_day.task).isPositive ? 'bg-green-500' : 'bg-red-500'}`}>{compareWithLastPeriod(countModel.current_day?.task, countModel.last_day?.task).value}</div>
                </div>
                <div className="flex items-center n">
                    <div className="flex items-center">
                        Monthly <span className="ltr:mr-2 text-xl rtl:ml-2">: {countModel.current_month?.task}</span>
                    </div>
                    <div className={`badge py-0 px-1 ${compareWithLastPeriod(countModel.current_month.task, countModel.last_month.task).isPositive ? 'bg-green-500' : 'bg-red-500'}`}>{compareWithLastPeriod(countModel.current_month?.task, countModel.last_month?.task).value}</div>
                </div>
                <div className="flex items-center n">
                    <div className="flex items-center">
                        Quarterly <span className="ltr:mr-2 text-xl rtl:ml-2">: {countModel.current_quarter?.task}</span>
                    </div>
                    <div className={`badge py-0 px-1 ${compareWithLastPeriod(countModel.current_quarter.task, countModel.last_quarter.task).isPositive ? 'bg-green-500' : 'bg-red-500'}`}>{compareWithLastPeriod(countModel.current_quarter?.task, countModel.last_quarter?.task).value}</div>
                </div>
                <div className="flex items-center n">
                    <div className="flex items-center">
                        Yearly <span className="ltr:mr-2 text-xl rtl:ml-2">: {countModel.current_year?.task}</span>
                    </div>
                    <div className={`badge py-0 px-1 ${compareWithLastPeriod(countModel.current_year.task, countModel.last_year.task).isPositive ? 'bg-green-500' : 'bg-red-500'}`}>{compareWithLastPeriod(countModel.current_year?.task, countModel.last_year?.task).value}</div>
                </div>
            </div>

        </div>
    );
};

export default StatusCard;
