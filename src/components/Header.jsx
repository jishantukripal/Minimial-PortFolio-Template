import image from '../assets/image.png';

const Header = () => {
    return (
        <div className='flex flex-col-reverse sm:flex-row items-start justify-between gap-33 md:gap-8' id="home">
            <div className='flex flex-col gap-2'>
                <h1 className='font-bold text-4xl sm:text-5xl md:text-6xl text-nowrap tracking-tighter'>Hi, I&apos;m <span className='bg-gradient-to-r from-purple-500 via-aqua-500 to-blue-500 bg-clip-text text-transparent'>Your Name</span>👋</h1>
                <p className='max-w-[500px] text-lg md:text-xl'>
                    Lorem Ipsum dolor sit amet, consectetur adipscicng elit. Ex repreherdrit rsd, laborisosam lolestisj.
                </p>

            </div>
            <img src={image} alt="User Image" className='w-32'/>
        </div>
    );
};

export default Header;