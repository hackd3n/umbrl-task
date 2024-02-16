'use client'
import React from "react";

export default function ToggleSwitch({ onChange }) {
    const [isMonthly, setIsMonthly] = React.useState(false);

    const handleChange = () => {
        const newValue = !isMonthly;
        setIsMonthly(newValue);
        onChange(newValue);
    };

    return (
        <div className="flex items-center p-2 space-x-2 text-base font-light">
            <label>Monthly</label>
            <label className="relative  w-14 flex h-6">
                <input
                    type="checkbox"
                    id="monthly-plan-toggle"
                    name="toggle-button-for-pricingMonthYearToggle"
                    checked={isMonthly}
                    onChange={handleChange} // Corrected event handler here
                    className="sr-only peer z-20"
                />
                <span className="absolute left-0 top-0 w-12 h-7 bg-gray-200 rounded-full peer-checked:bg-blue transition-colors duration-300"></span>
                <span className={`absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-full`}></span>
            </label>
            <label htmlFor="monthly-plan-toggle">Yearly</label>
            <div className="bg-blue bg-opacity-10 rounded-full text-blue text-xs font-medium italic p-1 px-2"><span className="uppercase text-nowrap">Save 25%</span></div>
        </div>
    );
}

