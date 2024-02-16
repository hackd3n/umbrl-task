
const Card = (({ option, priceChange, calculateYearlyPrice, discount }) => {
    return (
        <div className="border border-grey-100 flex flex-col h-full w-1/3 rounded-md bg-opacity-20 px-12 py-10 space-y-6">
            <h3 className="uppercase text-blue text-sm">{option.title}</h3>
            <div className="space-y-2">
                <div className="">
                    <span className="text-6xl"><span className="text-sm">$</span>{!priceChange ? option.monthlyPrice : calculateYearlyPrice(option.monthlyPrice, discount)}</span>
                    <span className="font-medium">/ {!priceChange ? 'month' : 'year'}</span>
                </div>
                <p className="font-thin tracking-wide text-sm">billed {!priceChange ? 'monthly' : 'annually'}</p>
            </div>
            <ul className="space-y-4">
                {option.features.map((feature, index) => (
                    <li key={`${option.title}_${index}`} className="flex space-x-2">
                        <div className="my-auto">
                            {feature.included ?
                                <svg width="17" height="10" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.20704 11.7692C5.91354 11.7692 5.62062 11.659 5.39648 11.4381L0 6.11882L1.62112 4.52032L6.20704 9.04065L15.3789 0L17 1.5985L7.0176 11.4381C6.79347 11.659 6.50054 11.7692 6.20704 11.7692Z" fill="#68D585" />
                                </svg>
                                :
                                <svg width="14" height="10" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 1L1 13" stroke="#D5D7DD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M13 13L1 1" stroke="#D5D7DD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            }
                        </div>
                        <p className={`font-light text-base  ${feature.included ? "opacity-100" : "opacity-60"}`}>{feature.point}</p>
                    </li>
                ))}
            </ul>
            <div className="">
                <button className={`bg-blue ${option.suggested ? "bg-opacity-100 text-white" : "bg-opacity-10 text-blue"}  font-medium py-4 px-6 rounded-lg flex space-x-4 my-4`}>
                    <a className="italic ">Start Free Trial</a>
                    <svg className="my-auto" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.93311 2L13.9998 7.63333L7.93311 13.2667" stroke={option.suggested ? "white" : "blue"} strokeWidth="2" strokeLinecap="square" strokeLinejoin="bevel" />
                        <path d="M1 7.40123H13.1333" stroke={option.suggested ? "white" : "blue"} strokeWidth="2" strokeLinecap="square" strokeLinejoin="bevel" />
                    </svg>
                </button>
                <span className="font-light text-sm">No credit card required</span>
            </div>
        </div>
    );
});

const PriceCards = ({ content, priceChange, discount }) => {
    const calculateYearlyPrice = (monthlyPrice, discount) => {
        const monthlyPriceNumber = parseFloat(monthlyPrice);
        const yearlyPrice = monthlyPriceNumber * 12 * (1 - discount / 100);
        return yearlyPrice.toFixed(0);
    };

    return (
        <>
            {content.map((option, index) => (
                <Card
                    key={`${option.title}_${index}`}
                    option={option}
                    priceChange={priceChange}
                    calculateYearlyPrice={calculateYearlyPrice}
                    discount={discount}
                />
            ))}
        </>
    );
};

export default PriceCards;
