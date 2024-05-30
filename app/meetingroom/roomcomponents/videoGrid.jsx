import { FaVideo } from "react-icons/fa";
import { SlScreenDesktop } from "react-icons/sl";
import { FaMicrophoneSlash } from "react-icons/fa";
import { FaVolumeUp } from "react-icons/fa";
import { FaRightToBracket } from "react-icons/fa6";

const VideoGrid = () => {
    return (
        <section className="text-gray-600 body-font overflow-hidden bg-gray-800 border rounded-lg">
            <div className=" px-5  mx-auto w-full ">
                <div className=" mx-auto flex flex-wrap  justify-between overflow-hidden p-2 h-1/2 rounded-md">
                    <div className="flex flex-wrap items-center justify-center p-1 border border-gray-600 rounded-md align-center">
                        <img alt="ecommerce" className="lg:w-full w-full object-cover h-[30rem] rounded-md" src="https://media.istockphoto.com/id/1363859252/photo/young-man-talking-on-a-video-call-and-looking-at-the-camera.jpg?s=612x612&w=0&k=20&c=tT3WwYer-qBjfvH3afL4ESHjnQ3XA-RCsjrNgsCry2M=" />
                        <div className="container pt-5 mx-auto flex items-center justify-around flex-col  gap-y-5 rounded-md">
                            <div className="flex flex-wrap items-center w-full">
                                <div className="p-1 lg:w-1/3 flex align-center justify-center  rounded-md ">
                                    {/* <div className="h-full bg-blue-700 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                        </div> */}
                                    <img alt="ecommerce" className=" w-full object-cover rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYgHt7TXZGKqeTf-qIR0KAX59z5cCNKUYE7xATZI1zpg&s" />
                                </div>
                                <div className="p-1 lg:w-1/3 flex align-center justify-center  rounded-md">
                                    {/* <div className="h-full bg-blue-700 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                        </div> */}
                                    <img alt="ecommerce" className=" w-full object-cover rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYgHt7TXZGKqeTf-qIR0KAX59z5cCNKUYE7xATZI1zpg&s" />
                                </div>
                                <div className="p-1 lg:w-1/3 flex align-center justify-center  rounded-md">
                                    {/* <div className="h-full bg-blue-700 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                        </div> */}
                                    <img alt="ecommerce" className=" w-full object-cover rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYgHt7TXZGKqeTf-qIR0KAX59z5cCNKUYE7xATZI1zpg&s" />
                                </div>
                            </div>

                            <div className="inline-flex rounded-md shadow-sm gap-x-4 fixed bottom-4 " role="group">
                                <button type="button" className="px-7 py-7 rounded-[50%]  text-xlg font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-blue-700 hover:text-white   focus:text-black dark:bg-gray-800  dark:text-white dark:hover:text-white   dark:focus:text-white">
                                    <FaVideo />
                                </button>
                                <button type="button" className="px-7 py-7 rounded-[50%]  text-xlg font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-blue-700 hover:text-white   focus:text-black dark:bg-gray-800  dark:text-white dark:hover:text-white   dark:focus:text-white">
                                    <SlScreenDesktop />

                                </button>
                                <button type="button" className="px-7 py-7 rounded-[50%]  text-xlg font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-blue-700 hover:text-white   focus:text-black dark:bg-gray-800  dark:text-white dark:hover:text-white   dark:focus:text-white">
                                    <FaVolumeUp />

                                </button>
                                <button type="button" className="px-7 py-7 rounded-[50%]  text-xlg font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-blue-700 hover:text-white   focus:text-black dark:bg-gray-800  dark:text-white dark:hover:text-white   dark:focus:text-white">
                                    <FaMicrophoneSlash />
                                </button>
                                <button type="button" className="px-7 py-7 rounded-[50%]  text-xlg font-medium border border-gray-200 rounded-e-lg bg-red-600 text-white   focus:text-black dark:bg-gray-800  dark:text-white dark:hover:text-white   dark:focus:text-white">
                                    <FaRightToBracket />
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoGrid;
