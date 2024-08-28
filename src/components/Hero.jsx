import React from 'react';
import atmImage from '../assets/Group11.png';

const Hero = () => {
  return (
    <div className='w-full py-[40px]'>
        <div className='max-w-[1240px] grid md:grid-cols-2 gap-12  place-items-center'>
        <div className='flex flex-col'>
            <p className='text-appYellow text-sm italic'>Let's Deal with <span>_____ </span></p>
            <h1 className='heading my-2'>Your Gateway</h1>
            <h1 className='heading'>To<span className='w-full bg-appYellow py-1 text-appBlack px-2 ml-2 rounded-md'>Modern Finance</span></h1>
            <p className='text-[18px] my-3 font-normal text-appGray'>Empower your financial journey with cutting-edge technology and personalized solutions.</p>
            <div className='mt-10'>
                <button className='bigBtnYellow'>Sign In</button>
                <button className='bigBtnBlack ml-3'>Learn More</button>
            </div>
        </div>
        <div>
        <img src={atmImage} alt="/" className='w-[500px]' />
        </div>
        </div>
    </div>
  )
}

export default Hero