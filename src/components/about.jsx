import React from "react";
import image_1 from '../components/images/image-retro-pcs.jpg'
import image_2 from '../components/images/image-top-laptops.jpg'
import image_3 from '../components/images/image-gaming-growth.jpg'
const About = () => {
    const image = [
        {
            img: image_1, no: '01', head: 'reving retro PCs', line: 'What happens when old pcs are given modern update'
        },
        {
            img: image_2, no: '02', head: 'top 10 laptops of 2022', line: 'Our best pick for various needs and budget'
        },
        {
            img: image_3, no: '03', head: 'the growth of gaming', line: 'How the pandemic has sparked fresh opportunities'
        },
    ]
    return (
        <section className="md:flex flex-wrap items-center justify-center md:mt-10 mt-16">
            {
                image.map((img, i) => (
                    <div key={i} className="md:max-w-screen-lg mx-auto mx-6">
                        <div className="flex items-center justify-center gap-4 md:max-w-md mx-6 my-6">
                            <div>
                                <img src={img.img} alt="" className="md:h-full"/>
                            </div>
                            <div className="leading-8 mt-4">
                                <h1 className="text-gray-500 text-2xl font-bold">{img.no}</h1>
                                <h2 className="text-xl capitalize text-gray-900 font-bold">{img.head}</h2>
                                <p className="text-base text-gray-400">{img.line}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </section>
    );
}

export default About;