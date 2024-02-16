'use client'
import React from "react";
import ToggleSwitch from "../components/ToggleSwitch";
import PriceCards from "../components/PriceCard";
export default function Pricing() {

    const [isYearly, setIsYearly] = React.useState(false);

    const packageOptions = [
        {
            title: 'Starter',
            monthlyPrice: '19',
            features: [
                {
                    point: 'Commercial Licensce',
                    included: true
                },
                {
                    point: '100+ HTML UI Elements',
                    included: true
                },
                {
                    point: '01 Domain Support',
                    included: true
                },
                {
                    point: '6 Month Premium Support',
                    included: false
                },
                {
                    point: 'Lifetime Updates',
                    included: false
                },
            ],
            suggested: false,
        },
        {
            title: 'Standard',
            monthlyPrice: '49',
            features: [
                {
                    point: 'Commercial Licensce',
                    included: true
                },
                {
                    point: '100+ HTML UI Elements',
                    included: true
                },
                {
                    point: 'Unlimited Domain Support',
                    included: true
                },
                {
                    point: '6 Month Premium Support',
                    included: true
                },
                {
                    point: 'Lifetime Updates',
                    included: false
                },
            ],
            suggested: true,
        },
        {
            title: 'Premium',
            monthlyPrice: '99',
            features: [
                {
                    point: 'Commercial Licensce',
                    included: true
                },
                {
                    point: '100+ HTML UI Elements',
                    included: true
                },
                {
                    point: 'Unlimited Domain Support',
                    included: true
                },
                {
                    point: '6 Month Premium Support',
                    included: true
                },
                {
                    point: 'Lifetime Updates',
                    included: true
                },
            ],
            suggested: false,
        }
    ]

    const handleToggleChange = (newValue) => {
        setIsYearly(newValue);
    };
    return (
        <div className="w-full h-full flex flex-col items-center">
            <ToggleSwitch onChange={handleToggleChange} />
            <div className="flex space-x-10 h-full w-full py-10">
               
            <PriceCards content={packageOptions} priceChange={isYearly} discount={25} />
               
            </div>
        </div>
    );
}