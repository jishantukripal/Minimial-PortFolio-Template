import logo from '../assets/1.png';
import logo2 from '../assets/2.png';
import logo3 from '../assets/3.png';
import logo4 from '../assets/4.png';


const Experience= () => {
    return (
        <div>
            <h2 className='text-xl font-bold'>Work Experience</h2>

            <div className='space-y-1 mt-5'>
            <div className='flex items-center gap-5'>
                <img src={logo} alt="company 1" className='w-14 border rounded-full'/>

                <div className='flex items-center justify-between flex-1'>
                    <div className='flex flex-col'>
                        <h2 className='font-semibold'>Company 1</h2>
                        <span className='font-medium text-gray-500 text-sm'>Web Development Engineer</span>
                    </div>

                    <div className='text-gray-400'>
                        May 2021-August 2021
                    </div>
                </div>

            </div>
            <div className='flex items-center gap-5'>
                <img src={logo2} alt="company 1" className='w-14 border rounded-full'/>

                <div className='flex items-center justify-between flex-1'>
                    <div className='flex flex-col'>
                        <h2 className='font-semibold'>Company 2</h2>
                        <span className='font-medium text-gray-500 text-sm'>Web Development Engineer</span>
                    </div>

                    <div className='text-gray-400'>
                        May 2021-August 2021
                    </div>
                </div>

            </div>
            <div className='flex items-center gap-5'>
                <img src={logo3} alt="company 1" className='w-14 border rounded-full'/>

                <div className='flex items-center justify-between flex-1'>
                    <div className='flex flex-col'>
                        <h2 className='font-semibold'>Company 3</h2>
                        <span className='font-medium text-gray-500 text-sm'>Web Development Engineer</span>
                    </div>

                    <div className='text-gray-400'>
                        May 2021-August 2021
                    </div>
                </div>

            </div>
            <div className='flex items-center gap-5'>
                <img src={logo4} alt="company 1" className='w-14 border rounded-full'/>

                <div className='flex items-center justify-between flex-1'>
                    <div className='flex flex-col'>
                        <h2 className='font-semibold'>Company 4</h2>
                        <span className='font-medium text-gray-500 text-sm'>Web Development Engineer</span>
                    </div>

                    <div className='text-gray-400'>
                        May 2021-August 2021
                    </div>
                </div>

            </div>
            </div>
        </div>
    )
};

export default Experience;