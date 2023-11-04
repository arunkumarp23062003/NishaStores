import React from 'react'
import brandTag from '../assets/Nisha stores.svg'

const AboutUsPage = () => {

    const headStyle = `text-xl font-bold`
    const paraStyle = `py-2`

    return (
        <div className='bg-green-300 py-4 pb-10 px-2'>
            <div>
                <img src={brandTag} className='w-4/5 md:w-3/5 lg:w-2/5 mx-auto' />
            </div>
            <div className='px-2 font-monow-full max-w-xl mx-auto border border-2 border-black px-3 py-2 bg-green-400 shadow-2xl hover:scale-105 transistion-all duration-700 rounded-xl mt-10'>
                <p className={paraStyle}>
                    At <span>Nisha Stores</span>, we're more than just a place to buy groceries; we're your neighborhood's one-stop destination for fresh,
                    wholesome, and convenient food shopping. Our mission is to provide you with the highest quality products and a delightful shopping
                    experience that brings your favorite ingredients and culinary inspiration together in one place.
                </p>

                <h1 className={headStyle}>Our Story:</h1>
                <p className={paraStyle}>
                    Founded in <span className={headStyle}>2000</span>, <span className={headStyle}>Nisha Stores</span> has been serving the <span className={headStyle}>India</span> area for <span className={headStyle}>23+</span> years.
                    What began as a small, family-owned grocery store has grown into a beloved community hub that offers a wide range of products to
                    cater to every taste, dietary need, and lifestyle.
                </p>

                <h1 className={headStyle}>Our Commitment</h1>

                <p className={paraStyle}>
                    At Nisha Stores, we're committed to:
                </p>
                <p className={paraStyle}>
                    Quality: We source our products from trusted local farmers and suppliers to ensure you always get the freshest and finest ingredients.
                </p>
                <p className={paraStyle}>
                    Variety: Our shelves are stocked with a diverse range of products, from fresh produce to pantry staples, international delicacies, and organic options.
                </p>
                <p>
                    Convenience: We understand the value of your time, so we've designed our store for easy navigation and quick shopping. We also offer online ordering and home delivery for added convenience.
                </p>
                <p className={paraStyle}>
                    Community: We're proud to be a part of the <span className={headStyle}>Indian</span> community. We actively support local initiatives and are committed to making a positive impact on the people we serve.
                </p>
                Our Team

                The heart of <span className={headStyle}>Nisha Stores</span> is our dedicated team of friendly and knowledgeable staff. They're here to assist you, provide recommendations, and make your shopping experience enjoyable.
            </div>
        </div>
    )
}

export default AboutUsPage