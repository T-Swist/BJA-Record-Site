import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Img1 from "../../assets/images/logowhite.jpg";
import Img2 from "../../assets/images/logowhite.jpg";
import Img3 from "../../assets/images/logowhite.jpg";

const EventsCurated = () => {
    return (
        <section className="bg-black w-full py-8 md:py-12 lg:py-16 overflow-hidden">
            <div className="container max-w-6xl px-4 mx-auto md:px-6 lg:px-8 mb-8 md:mb-12">
                <h3 className='font-glass text-white text-2xl md:text-3xl lg:text-4xl text-center md:text-left'>
                    Services Crafted for <br className="hidden md:block" />
                    Your Musical Journey
                </h3> 
            </div>
            
            <div className="container max-w-6xl px-4 mx-auto md:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                    {/* Card 1 */}
                    <div className="flex flex-col group">
                        <div className="overflow-hidden rounded-md mb-4">
                            <img 
                                src={Img1} 
                                alt="Artist Development" 
                                className="w-full h-48 md:h-56 lg:h-64 object-cover rounded-md transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="flex flex-col space-y-3 md:space-y-4">
                            <h3 className="text-white font-glass text-xl md:text-2xl">Artist Development</h3>
                            <p className="text-gray-400 font-wellston text-sm md:text-base">
                                Comprehensive artist development programs including vocal coaching,
                                performance training, and brand building to elevate your career
                            </p>
                            <Link 
                                to="#" 
                                className="text-white flex items-center gap-x-2 text-sm md:text-base group-hover:text-bronze transition-colors duration-300"
                            >
                                See More <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="flex flex-col group">
                        <div className="overflow-hidden rounded-md mb-4">
                            <img 
                                src={Img2} 
                                alt="Music Production" 
                                className="w-full h-48 md:h-56 lg:h-64 object-cover rounded-md transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="flex flex-col space-y-3 md:space-y-4">
                            <h3 className="text-white font-glass text-xl md:text-2xl">Music Production</h3>
                            <p className="text-gray-400 font-wellston text-sm md:text-base">
                                State-of-the-art recording studios with world-class producers and engineers
                                to bring your musical vision to life with professional quality
                            </p>
                            <Link 
                                to="#" 
                                className="text-white flex items-center gap-x-2 text-sm md:text-base group-hover:text-bronze transition-colors duration-300"
                            >
                                See More <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="flex flex-col group">
                        <div className="overflow-hidden rounded-md mb-4">
                            <img 
                                src={Img3} 
                                alt="Distribution & Marketing" 
                                className="w-full h-48 md:h-56 lg:h-64 object-cover rounded-md transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="flex flex-col space-y-3 md:space-y-4">
                            <h3 className="text-white font-glass text-xl md:text-2xl">Distribution & Marketing</h3>
                            <p className="text-gray-400 font-wellston text-sm md:text-base">
                                Global distribution across all major streaming platforms with strategic
                                marketing campaigns to maximize your reach and fanbase growth
                            </p>
                            <Link 
                                to="#" 
                                className="text-white flex items-center gap-x-2 text-sm md:text-base group-hover:text-bronze transition-colors duration-300"
                            >
                                See More <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EventsCurated;