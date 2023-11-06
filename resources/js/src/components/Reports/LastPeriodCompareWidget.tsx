import React from 'react';

interface LastPeriodCompareWidgetProps {
    currentAmount: number;
    lastPeriodAmount: number;
    sectionTitle: string;
    isCurrency?: boolean;
    currency?: string;
    firstColor?: string;
    secondColor?: string;
    currentTitle?: string;
    lastPeriodTitle?: string;
}

const LastPeriodCompareWidget: React.FC<LastPeriodCompareWidgetProps> = ({
                                                                             currentAmount,
                                                                             lastPeriodAmount,
                                                                             sectionTitle,
                                                                             isCurrency = true,
                                                                             currency = 'EUR',
                                                                             firstColor = 'blue-500',
                                                                             secondColor = 'blue-400',
                                                                             currentTitle = 'Current Month',
                                                                             lastPeriodTitle = 'Last Month'
                                                                         }) => {
    const percentageChange = ((currentAmount - lastPeriodAmount) / lastPeriodAmount) * 100;

    const formatAmount = (amount: number): string => {
        if (isCurrency) {
            return new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: currency,
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }).format(amount);
        } else {
            return amount.toFixed(2);
        }
    };

    const badgeClass = percentageChange > 0 ? 'badge bg-white/30' : 'badge bg-red-400';
    const gradientClass = `panel bg-gradient-to-r from-${firstColor} to-${secondColor}`;

    return (
        <>
                <div className={gradientClass}>

                    <div className="flex justify-between">
                        <div className="ltr:mr-1 rtl:ml-1 text-md font-semibold">{sectionTitle}</div>
                    </div>
                    <div className="flex items-center mt-5">
                        <div className="text-3xl font-bold ltr:mr-3 rtl:ml-3"> {formatAmount(currentAmount)} </div>
                        <div className={badgeClass}> {percentageChange.toFixed(2)}%</div>
                    </div>
                    <div className="flex items-center font-semibold mt-5">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ltr:mr-2 rtl:ml-2">
                            <path
                                opacity="0.5"
                                d="M3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C4.97196 6.49956 7.81811 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            />
                            <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                        {lastPeriodTitle}: {formatAmount(lastPeriodAmount)}
                    </div>
            </div>
        </>
    );
};

export default LastPeriodCompareWidget;
