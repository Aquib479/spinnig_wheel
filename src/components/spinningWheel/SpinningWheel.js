import React, { useState } from 'react'
import "./spin.css";

const SpinningWheel = ({ items, onChange }) => {

    const [selectedState, setSelectedState] = useState(null);

    const spinwheel = () => {
        const selectedItem = Math.floor(Math.random() * items.length);
        onChange(selectedItem);
        setSelectedState(selectedItem);
    }

    const selectItem = () => {
        if (selectedState === null) {
            spinwheel();
        } else {
            setSelectedState(null);
            setTimeout(spinwheel, 500);
        }
    }

    const wheelVars = {
        "--nb-item": items.length,
        "--selected-item": selectedState,
    };

    const spinnings = selectedState !== null ? "spinning" : "";
    let spinDuration = 6;

    let cssProperties = {};

    cssProperties["--spinning-duration"] = `${spinDuration}s`;
    cssProperties["--wheel-color"] = `${"darkred"}`;
    cssProperties["--neutral-color"] = `${"white"}`;

    return (
        <div style={cssProperties}>
            <div className="wheel-container">
                <div
                    className={`wheel ${spinnings}`}
                    style={wheelVars}
                >
                    {items.map((item, index) => (
                        <div
                            className="wheel-item text-[0.55rem] lg:text-[0.7rem] font-bold"
                            key={index}
                            style={{ "--item-nb": index }}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex justify-center items-center mt-[4rem]'>
                <button className='w-[7rem] h-[2.5rem] bg-green-700 text-white rounded-full font-bold flex justify-center items-center' onClick={selectItem}>Spin</button>
            </div>
        </div>
    )
}

export default SpinningWheel
