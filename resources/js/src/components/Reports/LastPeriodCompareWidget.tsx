import React from 'react';
import LoadingSpinner from "../LoadingSpinner";

const formatAmount = (amount, isCurrency, currency) => {
    return isCurrency
        ? new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(amount)
        : amount.toFixed(2);
};

const calculatePercentageChange = (current, last) => {
    if (last === 0) return current === 0 ? 'N/A' : 'New';
    return ((current - last) / last) * 100;
};

const ComparisonBadge = ({ value }) => {
    const badgeClass = value > 0 ? 'badge bg-green-500' : 'badge bg-red-500';
    const displayValue = typeof value === 'number' ? `${value.toFixed(2)}%` : value;
    return <div className={badgeClass}>{displayValue}</div>;
};

const StatisticLine = ({ title, value, isCurrency, currency }) => (
    <div className="flex items-center font-bold mt-2">
        <span className="ltr:mr-2 rtl:ml-2">{title}:</span>
        <span>{formatAmount(value, isCurrency, currency)}</span>
    </div>
);

interface LastPeriodCompareWidgetProps {
    currentAmount: number;
    lastPeriodAmount: number;
    sectionTitle: string;
    isCurrency?: boolean;
    currency?: string;
    currentTitle?: string;
    lastPeriodTitle?: string;
    currentAverage?: number;
    currentCount?: number;
    lastPeriodAverage?: number;
    lastPeriodCount?: number;
    firstColor?: string;
    secondColor?: string;
}

const LastPeriodCompareWidget: React.FC<LastPeriodCompareWidgetProps> = ({
                                                                             currentAmount,
                                                                             lastPeriodAmount,
                                                                             sectionTitle,
                                                                             firstColor = 'cyan-500',
                                                                             secondColor = 'cyan-400',
                                                                             isCurrency = true,
                                                                             currency = 'EUR',
                                                                             currentTitle = 'Current Period',
                                                                             lastPeriodTitle = 'Last Period',
                                                                             currentAverage,
                                                                             currentCount,
                                                                             lastPeriodAverage,
                                                                             lastPeriodCount,
                                                                         }) => {
    const percentageChangeAmount = calculatePercentageChange(currentAmount, lastPeriodAmount);
    const percentageChangeCount = calculatePercentageChange(currentCount, lastPeriodCount);
    const percentageChangeAverage = calculatePercentageChange(currentAverage, lastPeriodAverage);
    // const gradientClass = `panel bg-gradient-to-r from-${firstColor} to-${secondColor}`;
    const gradientClass = `panel bg-gradient-to-r from-cyan-500 to-cyan-400`;

    return (
            <div className={gradientClass}>
            <div className="flex justify-between">
                <div className="text-md font-semibold">{sectionTitle}</div>
            </div>
            <div className="flex items-center mt-5">
                <div className="text-3xl font-bold ltr:mr-3 rtl:ml-3">{formatAmount(currentAmount, isCurrency, currency)}</div>
                <ComparisonBadge value={percentageChangeAmount} />
            </div>
            {typeof currentAverage === 'number' && typeof lastPeriodAverage === 'number' && (
                <div className="flex items-center justify-between">
                    <StatisticLine title={`${currentTitle} Average`} value={currentAverage} isCurrency={isCurrency} currency={currency} />
                    <ComparisonBadge value={percentageChangeAverage} />
                </div>

            )}
            {typeof currentCount === 'number' && typeof lastPeriodCount === 'number' && (
                <div className="flex items-center justify-between">
                <StatisticLine title={`${currentTitle} Count`} value={currentCount} />
                    <ComparisonBadge value={percentageChangeCount} />
                </div>
            )}
        </div>
    );
};

export default LastPeriodCompareWidget;
