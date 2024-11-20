import Appbar from "../components/appbar"
import { ImagesSlider } from "../components/ui/images-slider"
const imageUrls = ["/inauguration/1.jpg", "/inauguration/2.jpg", "/inauguration/3.jpg","/inauguration/4.jpg"]
const imgUrlsKyd = ["/kyd/1.jpg", "/kyd/2.jpg", "/kyd/3.jpg", "/kyd/4.jpg", "/kyd/5.jpg", "/kyd/6.jpg", "/kyd/7.jpg", "/kyd/8.jpg"]
export default function eventsAll(){
    return(
        <div>

            <div>
                <Appbar></Appbar>
                <section>
                    <section id="team" className="py-16  ">
                        <div>
                            <h2 className="text-2xl  font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-700 my-8 ">Mechnophila Inauguration</h2>
                        </div>
                        <div className="flex flex-col lg:flex-row items-center justify-between">
                            <div className="w-full lg:w-1/2">
                                <ImagesSlider
                                    images={imageUrls}
                                    overlay={true}
                                    overlayClassName="bg-black/40"
                                    className="h-[400px] w-full"
                                    autoplay={true}
                                    direction="up"
                                >
                                    <div className="absolute z-50 text-white text-center">
                                        
                                    </div>
                                </ImagesSlider>
                            </div>

                            <div className="w-full lg:w-1/2 p-6">
                                <p className="text-lg  font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-700  "> 
                                    Mechnophilia returns with a fresh vision, transforming into a dynamic center for technical excellence where mechanical engineering students bridge classroom theory with real-world innovation.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl  font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-700 my-8">Know Your Department</h2>
                        </div>

                        <div className="flex flex-col lg:flex-row items-center justify-between ">
                            <div className="w-full lg:w-1/2">
                                <ImagesSlider
                                    images={imgUrlsKyd}
                                    overlay={true}
                                    overlayClassName="bg-black/40"
                                    className="h-[400px] w-full"
                                    autoplay={true}
                                    direction="up"
                                >
                                    <div className="absolute z-50 text-white text-center">

                                    </div>
                                </ImagesSlider>
                            </div>

                            <div className="w-full lg:w-1/2 p-6">
                                <p className="text-lg  font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-700  ">
                                    Mechnophilia club led students through an interactive exploration of the Mechanical Engineering Department key facilities. Through guided visits to manufacturing, CAD/CAM, thermal, and materials testing labs, participants gained first-hand insight into  technical capabilities and research infrastructure of the department. Faculty demonstrations and hands-on sessions helped students connect classroom concepts with practical engineering applications.
                                </p>
                            </div>
                        </div>
                </section>
                 </section>
            </div>

            
        </div>
    )
}