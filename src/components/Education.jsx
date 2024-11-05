import image1 from '../assets/education-1.png';
import image2 from '../assets/education-2.png';
import image3 from '../assets/education-3.png';


const Education = () => {
    return (
        <div id="education">
            <h2 className='text-xl font-bold'>Education</h2>

            <div className='space-y-1 mt-5'>
            <div className='flex items-center gap-5'>
                <img src={image1} alt="company 1" className='w-14 border rounded-full'/>

                <div className='flex items-center justify-between flex-1'>
                    <div className='flex flex-col'>
                        <h2 className='font-semibold'>Institue 1</h2>
                        <span className='font-medium text-gray-500 text-sm'>Web Development Engineer</span>
                    </div>

                    <div className='text-gray-400'>
                        May 2021-August 2021
                    </div>
                </div>

            </div>
            <div className='flex items-center gap-5'>
                <img src={image2} alt="company 1" className='w-14 border rounded-full'/>

                <div className='flex items-center justify-between flex-1'>
                    <div className='flex flex-col'>
                        <h2 className='font-semibold'>Institue 2</h2>
                        <span className='font-medium text-gray-500 text-sm'>Web Development Engineer</span>
                    </div>

                    <div className='text-gray-400'>
                        May 2021-August 2021
                    </div>
                </div>

            </div>
            <div className='flex items-center gap-5'>
                <img src={image3} alt="company 1" className='w-14 border rounded-full'/>

                <div className='flex items-center justify-between flex-1'>
                    <div className='flex flex-col'>
                        <h2 className='font-semibold'>Institute 3</h2>
                        <span className='font-medium text-gray-500 text-sm'>Web Development Engineer</span>
                    </div>

                    <div className='text-gray-400'>
                        May 2021-August 2021
                    </div>
                </div>

            </div>
            </div>
        </div>
    );
};

export default Education;