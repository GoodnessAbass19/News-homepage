import image from './images/image-web-3-desktop.jpg'
import React from 'react';
const Section = () => {
    return (
        <section className='w-full h-full md:py-10 mt-16 text-white  container mx-auto'>
            <div className=' flex-wrap md:flex xl:flex'>
                <div className=' md:max-w-screen-lg w-full mx-auto  md:flex flex-col '>
                    <div className='md:max-w-screen-lg md:w-full w-4/5 md:h-full h-full  mx-auto'>
                        <img src={image} alt="" className='md:h-full h-72' />
                    </div>
                    <div className='flex md:flex-row flex-col md:mt-6 '>
                        <div className='md:mt-6 mt-6 mx-4'>
                            <h1 className='font-bold text-6xl text-black capitalize px-2'>the bright future of web 3.0 ?</h1>
                        </div>
                        <div className='md:mt-6 mt-6 mx-4'>
                            <p className='md:text-lg text-gray-500 capitalize text-sm px-4 max-w-screen'>we dive into the evolution of web that claims to put the power of the platforms back into the hands of the power.but is it really fulfilling it promise?</p>
                            <div className='pt-4 px-4'>
                                <button className='bg-red-500 hover:bg-black text-base uppercase px-6 py-2 font-semibold transition-all duration-500 ease-in'>read more</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-white max-w-screen-lg bg-black px-7 md:w-2/4 lg:w-4/5 lg:mt-6 xl:w-1/4 w-4/5 md:mt-6 xl:mt-0 mt-20 mx-auto'>
                    <h2 className='text-5xl capitalize text-yellow-500 font-bold'>new</h2>
                    <div className='text-white grid grid-cols-1 divide-y pt-6'>

                        <div className='leading-10 gap-y-6 py-6'>
                            <h2 className='text-2xl capitalize pt-4'>hydrogen VS electric cars</h2>
                            <p className='text-gray-500 text-lg pt-3'>Will hydrogen-fueled cars ever catch up EVs?</p>
                        </div>
                        <div className='leading-10 gap-y-6 py-6'>
                            <h2 className='text-2xl capitalize pt-4'>the downside of AI artistry</h2>
                            <p className='text-gray-500 text-lg pt-3'>what are the possible adverse effects of on-demaand AI image generation?</p>
                        </div>
                        <div className='leading-10 gap-y-6 py-6'>
                            <h2 className='text-2xl capitalize pt-4'>is VC funding drying up</h2>
                            <p className='text-gray-500 text-lg pt-3'>private funding by VC firm's are down 50% YOY. we take a look at what that means.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section;
