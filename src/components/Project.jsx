import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2.png";
import project3 from "../assets/project-3.png";

const Project = () => {
    return (
        <div className="space-y-5 pt-10" id="project">
            <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl text-center"><span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                My Project
            </span></h1>

            <h3 className="font-semibold text-gray-500 text-xl text-center">I&apos;ve build everything from simple website to advanced web apps. Here are some fo the projects I&apos;m most proud of.</h3>

            <div className="flex flex-col items-center justify-center space-y-5">
            <div className="sm:flex gap-5 space-y-5 sm:space-y-0">
                <div className="flex flex-col items-baseline text-left gap-2 max-w-[300px] border rounded-lg p-5 hover:shadow-xl hover:-translate-y-1">
                    <img src={project1} className="w-[300px] rounded-md" alt=""/>
                    <h3 className="text-lg font-bold">Project 1</h3>
                    <span className="text-sm text-gray-500 font-semibold"> Jan 2024- Feb 2024</span>
                    <p className="text-xs text-gray-500 font-medium max-w-64">Lorem ipsum dolor sit, amet consectetur adipiscing elit. Similiquue eveniet vero natus soluta quisqua, aspernatur rem illo totam nam.</p>
                   
                   <div className="flex gap-3 text-xs">
                   <div className="py-2 px-5 border-none text-white font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r from-red-500 to-orange-500">HTML</div>
                    <div className="py-2 px-5 border-none text-white font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r from-red-500 to-orange-500">HTML</div>
                    <div className="py-2 px-5 border-none text-white font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r from-red-500 to-orange-500">HTML</div>
                   </div>
                </div>
                <div className="flex flex-col items-baseline text-left gap-2 max-w-[300px] border rounded-lg p-5 hover:shadow-xl hover:-translate-y-1">
                    <img src={project1} className="w-[300px] rounded-md" alt=""/>
                    <h3 className="text-lg font-bold">Project 1</h3>
                    <span className="text-sm text-gray-500 font-semibold"> Jan 2024- Feb 2024</span>
                    <p className="text-xs text-gray-500 font-medium max-w-64">Lorem ipsum dolor sit, amet consectetur adipiscing elit. Similiquue eveniet vero natus soluta quisqua, aspernatur rem illo totam nam.</p>
                   
                   <div className="flex gap-3 text-xs">
                   <div className="py-2 px-5 border-none text-white font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r from-red-500 to-orange-500">HTML</div>
                    <div className="py-2 px-5 border-none text-white font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r from-red-500 to-orange-500">HTML</div>
                    <div className="py-2 px-5 border-none text-white font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r from-red-500 to-orange-500">HTML</div>
                   </div>
                </div>

            </div>
            

            </div>
            <div className="flex flex-col items-center justify-center space-y-5">
            <div className="sm:flex gap-5 space-y-5 sm:space-y-0">
                <div className="flex flex-col items-baseline text-left gap-2 max-w-[300px] border rounded-lg p-5 hover:shadow-xl hover:-translate-y-1">
                    <img src={project2} className="w-[300px] rounded-md" alt=""/>
                    <h3 className="text-lg font-bold">Project 1</h3>
                    <span className="text-sm text-gray-500 font-semibold"> Jan 2024- Feb 2024</span>
                    <p className="text-xs text-gray-500 font-medium max-w-64">Lorem ipsum dolor sit, amet consectetur adipiscing elit. Similiquue eveniet vero natus soluta quisqua, aspernatur rem illo totam nam.</p>
                   
                   <div className="flex gap-3 text-xs">
                   <div className="py-2 px-5 border-none text-white font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r from-red-500 to-orange-500">HTML</div>
                    <div className="py-2 px-5 border-none text-white font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r from-red-500 to-orange-500">HTML</div>
                    <div className="py-2 px-5 border-none text-white font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r from-red-500 to-orange-500">HTML</div>
                   </div>
                </div>
                <div className="flex flex-col items-baseline text-left gap-2 max-w-[300px] border rounded-lg p-5 hover:shadow-xl hover:-translate-y-1">
                    <img src={project3} className="w-[300px] rounded-md" alt=""/>
                    <h3 className="text-lg font-bold">Project 1</h3>
                    <span className="text-sm text-gray-500 font-semibold"> Jan 2024- Feb 2024</span>
                    <p className="text-xs text-gray-500 font-medium max-w-64">Lorem ipsum dolor sit, amet consectetur adipiscing elit. Similiquue eveniet vero natus soluta quisqua, aspernatur rem illo totam nam.</p>
                   
                   <div className="flex gap-3 text-xs">
                   <div className="py-2 px-5 border-none text-white font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r from-red-500 to-orange-500">HTML</div>
                    <div className="py-2 px-5 border-none text-white font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r from-red-500 to-orange-500">HTML</div>
                    <div className="py-2 px-5 border-none text-white font-semibold rounded-xl hover:opacity-75 bg-gradient-to-r from-red-500 to-orange-500">HTML</div>
                   </div>
                </div>

            </div>
            

            </div>
        </div>
    )
};

export default Project;