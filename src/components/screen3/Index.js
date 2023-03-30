import React, { useEffect, useState } from 'react'
import IMG1 from '../Images/header.png'
import IMG2 from '../Images/h2.png'
import IMG3 from '../Images/spin2.png'
import Toast from '../toast/Toast';

const Index = () => {
    const Offer = localStorage.getItem('offer');
    const index = localStorage.getItem('index');
    const COUPON_CODE = ['AXDSE4RTF56', 'BHGTY7FTY86Y', 'BHJKMLI89UYH76', 'POLKIJU98YTG6', 'GFTRYUH56JI3', 'LOIUYBH5TG67T']

    const [code, setCode] = useState('');
    const [showtoast, setShowToast] = useState(false);

    const get_couponCode = () => {
        setCode(COUPON_CODE[index]);
    }

    const copy = async () => {
        await navigator.clipboard.writeText(COUPON_CODE[index]);
        setShowToast(true);
        setTimeout(() => {
            setShowToast(false);
        }, 2000);
    }
    const ClosePanel = async () => {
        await navigator.clipboard.writeText(COUPON_CODE[index]);
        setShowToast(true);
        setTimeout(() => {
            window.location = '/';
        }, 500);
    }

    useEffect(() => {
        get_couponCode();
    }, [])
    return (
        <>
            <span ><Toast showtoast={showtoast} /></span>
            <div className="border-blue-600">
                <div className="image">
                    <img src={IMG1} alt="" className='opacity-[0.5]' />
                    <img src={IMG2} alt="" className='absolute bottom-0 opacity-[0.5]' />
                </div>
                <div className='absolute top-[-16%] md:top-[28%] md:left-[18%] grid md:grid-cols-2 md:w-[70%] m-auto'>
                    <div className='relative'>
                        <img src={IMG3} alt="" className='m-auto w-[250px] h-[250px] md:w-[350px] lg:h-[350px] md:h-auto md:absolute lg:static md:left-[-100%] md:mt-[4rem] lg:mt-0' />
                    </div>
                    <div className="coupon_code lg:w-[60%] lg:ml-[6rem] md:mt-[2rem] mt-[5rem] md:ml-[-3rem]">
                        <h1 className='text-center font-bold text-[1.1rem]'>Congrats! You Won:</h1>
                        <h1 className='text-[2.5rem] md:text-[1.5rem] font-bold mx-6 '>{Offer}</h1>
                        <div className="input-section flex justify-between my-2 mt-4 md:mx-1 mx-2 bg-green-700/30 rounded-md">
                            <input type="text" value={code} className='px-2 py-2 text-[1.4rem] w-[80%] outline-none font-bold text-white bg-transparent' readOnly />
                            <button className='flex justify-center items-center bg-green-700 text-white font-bold md:px-3 px-8 rounded-r-md cursor-pointer' onClick={copy}>Copy</button>
                        </div>
                        <div className="button mt-5 w-[90%] m-auto">
                            <button className='w-full h-[3rem] bg-green-700 rounded-full text-white font-bold' onClick={ClosePanel}>Close Panel & Copy</button>
                        </div>
                        <div className='mt-3 text-center'>
                            <span className='italic font-medium text-[0.7rem]'>You can claim your coupon for 10 minutes only!</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index
