import React from 'react'
import HeroImage from '../img/heroImage.png'
import { FiArrowRightCircle } from 'react-icons/fi'
import { Link } from 'react-scroll'

const Home = () => {
    return (
        <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-7xl font-bold'>
                        I'm a Full Stack Developer
                    </h2>
                    <p className='text-gray-500 p7-4 max-w-md'>
                        Permíteme presentarte a Emiliano, un apasionado entusiasta de la programación front-end que está ansioso por adentrarse en el mundo laboral y demostrar su valía en esta emocionante disciplina.

                    </p>
                    <div>
                        <Link to='portfolio'
                            smooth
                            duration={500}
                            className=' group text-white w-fit 
                            px-6 py-3 my-2 flex items-center rounded-md 
                            bg-gradient-to-r from-cyan-500 
                            to-blue-500 cursor-pointer'>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-300'>
                                <FiArrowRightCircle size={25} />
                            </span>
                        </Link>
                    </div>
                </div>
                <div>
                    <img src={HeroImage} alt='Yo' className='rounded-2x-l mx-auto w-2/3 md:w-full' />
                </div>
            </div>
        </div>
    )
}

export default Home
