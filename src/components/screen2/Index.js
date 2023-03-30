import React, { useState } from 'react'
import IMG1 from '../Images/header.png'
import IMG2 from '../Images/h2.png'
import SpinningWheel from '../spinningWheel/SpinningWheel';


const Index = ({ items, onChange, spinning }) => {

    return (
        <>
            <div className="border-blue-600">
                <div className="image">
                    <img src={IMG1} alt="" className='opacity-[0.5]' />
                    <img src={IMG2} alt="" className='absolute bottom-0 opacity-[0.5]' />
                </div>
                <div className='relative w-[98%] m-auto lg:absolute lg:w-[50%] lg:top-[20%] lg:left-[25%]'>
                    <div className='relative'>
                        <SpinningWheel
                            items={items}
                            onChange={onChange}
                            spinning={spinning}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index
