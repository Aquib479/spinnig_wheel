import React, { useEffect, useState } from 'react'
import IMG1 from '../Images/header.png'
import IMG2 from '../Images/h2.png'
import IMG3 from '../Images/spin2.png'
import { GrMail } from 'react-icons/gr'
import { FaPhoneAlt } from 'react-icons/fa'

const Index = () => {
    let [checkBox, setCheckbox] = useState('');
    let [FormValue, setFormValue] = useState({
        email: '',
        phone: '',
    })
    const [error, setError] = useState({});
    const [submit, setSubmit] = useState(false);

    const handleCheckBox = (event) => {
        setCheckbox(event.target.checked);
    }

    const handleValidation = (event) => {
        const { name, value } = event.target;
        setFormValue({ ...FormValue, [name]: value })
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        FormValue["checked"] = checkBox;

        setError(FormValidation(FormValue));
        setSubmit(true);
    }

    const FormValidation = (value) => {
        const errors = {};

        // Check all the inputs are correct or not
        if (!value.email.includes('@')) {
            errors.email = 'please enter correct email'
        }

        if (value.phone.length < 10) {
            errors.phone = 'please enter correct phone number'
        }

        if (checkBox === false) {
            errors.checked = 'error'
        }

        return errors;
    }

    useEffect(() => {
        if (Object.keys(error).length === 0 && submit) {
            // api call for post request !!
            window.location = '/spinner'
            console.log(FormValue);
        }
    }, [error, submit])

    return (
        <>
            <div className="border-blue-600">
                <div className="image">
                    <img src={IMG1} alt="" className='opacity-[0.5]' />
                    <img src={IMG2} alt="" className='absolute bottom-0 opacity-[0.5]' />
                </div>
                <div className='absolute top-[-16%] md:top-[28%] md:left-[18%] grid md:grid-cols-2 md:w-[70%] m-auto'>
                    <div className='relative'>
                        <img src={IMG3} alt="" className='m-auto w-[250px] h-[250px] md:w-[380px] lg:h-[380px] md:h-auto md:absolute lg:static md:left-[-100%] md:mt-[4rem] lg:mt-0' />
                    </div>
                    <form onSubmit={handleFormSubmit} className='user-detail lg:w-[65%] lg:ml-[5rem] lg:mt-0 mt-[3rem] mx-3 lg:mx-0 md:absolute md:top-[-2rem] md:mx-[4rem] md:left-[20%] lg:static'>
                        <h1 className='lg:mx-2 text-[1.8rem] md:text-[1.2rem] lg:text-[1.4rem] text-center font-bold text-green-900'>This is how EngageBud looks like in action!</h1>
                        {error.email && <span className='absolute mt-3 left-[75%] text-[0.7rem] text-red-600'>{error.email}</span>}
                        <div className='flex bg-white shadow-sm shadow-black/70 leading-[14px] my-3 rounded-sm'>
                            <span className='flex justify-center items-center mx-2 text-[1.4rem]'><GrMail /></span>
                            <span className='flex flex-col w-full mx-2'>
                                <label htmlFor="email" className='text-[0.9rem] py-2'>Email</label>
                                <input type="text" name='email' value={FormValue.email} className={`text-black px-1 outline-none border ${error.email ? 'border-2 border-b-red-600' : 'border-b-slate-400'} border-t-0 border-l-0 border-r-0 mb-2 text-[0.9rem]`} onChange={handleValidation} />
                            </span>
                        </div>
                        {error.phone && <span className='absolute left-[70%] text-[0.7rem] text-red-600'>{error.phone}</span>}
                        <div className='flex bg-white shadow-sm shadow-black/70 leading-[14px] my-3 rounded-sm'>
                            <span className='flex justify-center items-center mx-2 text-[1.3rem]'><FaPhoneAlt /></span>
                            <span className='flex flex-col w-full mx-2'>
                                <label htmlFor="email" className='text-[0.9rem] py-2'>Phone</label>
                                <div className=''>
                                    <span className='mx-1 text-[0.9rem]'>+91</span>
                                    <input type="number" name='phone' value={FormValue.phone} className={`text-black px-1 outline-none border ${error.phone ? 'border-2 border-b-red-600' : 'border-b-slate-400'} border-t-0 border-l-0 border-r-0 mb-2 text-[0.9rem] w-[80%] ml-2`} onChange={handleValidation} />
                                </div>
                            </span>
                        </div>
                        <div className='border-2 border-black rounded-md my-3 flex justify-between gap-2 py-1 px-2'>
                            <input type="checkbox" name='checked' value={checkBox} className='w-[1.8rem] h-[1.8rem] mt-2 cursor-pointer' onChange={handleCheckBox} />
                            <span className='text-[0.67rem]'>I agree to receiving recurring automated messages at the number I have provided. <br /> Consent is not a condition to purchase.</span>
                        </div>
                        <button className={`w-full h-[3rem] ${FormValue.email.length > 0 && FormValue.phone.length > 0 && checkBox === true ? 'bg-green-700' : 'bg-slate-400'} text-white font-bold rounded-full cursor-pointer`} disabled={FormValue.email.length > 0 && FormValue.phone.length > 0 ? false : true}>Try Your Luck</button >
                        <div className='text-center leading-3 my-2'>
                            <span className='text-[0.7rem] text-center italic font-bold'>* You can spin the wheel only once! If you win, you can claim your coupon for 10 minutes only! *</span>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Index
