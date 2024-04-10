import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/navigation'; 
import 'swiper/css/pagination'; 
import 'swiper/swiper-bundle.css'; 
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import image1 from '../../src/assets/banner-img/Banner1.jpg';
import image2 from '../../src/assets/banner-img/Banner2.jpg';
import image3 from '../../src/assets/banner-img/Banner3.jpg';
import image4 from '../../src/assets/banner-img/Banner4.jpg';
// Initialize Swiper modules

const Banner = () => {

    return (
        <div className="relative mt-5">
            <div className='my-10'>
                <h1 className='font-bold text-3xl text-center'>Banner section</h1>
                <p className='px-5 md:px-40 lg:px-60 text-center my-5'>Discover luxurious homes in prime locations, offering modern comfort, breathtaking views, and exceptional amenities. Your dream home awaits—explore today</p>
            </div>
            <Swiper
                
            >
                <SwiperSlide>
                <div className='relative'>
                    <div className='absolute inset-0 flex items-center justify-center'>
                        <div className='bg-opacity-5 backdrop-filter backdrop-blur-lg p-5 max-w-[80%] md:max-w-[50%] lg:max-w-[40%] rounded-xl xl:max-w-[30%] text-center'>
                            <h1 className='font-bold text-3xl text-gray-800'>Homes in Prime Locations</h1>
                            <p className='text-gray-600 mt-5'>Discover exquisite luxury homes situated in prestigious prime locations, offering unparalleled elegance, comfort, and lifestyle amenities for discerning buyers</p>
                        </div>
                    </div>
                    <img className='h-[600px] rounded-xl w-full object-cover' src={image1} alt="Banner 1" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <div className='bg-opacity-5 backdrop-filter backdrop-blur-lg p-5 max-w-[80%] md:max-w-[50%] lg:max-w-[40%] rounded-xl xl:max-w-[30%] text-center'>
                                <h1 className='font-bold text-3xl text-gray-800'>Properties Await You</h1>
                                <p className='text-gray-600 mt-5'>Explore our collection of stunning properties, each waiting to welcome you with elegance, comfort, and the promise of extraordinary living experiences</p>
                            </div>
                        </div>
                        <img className='h-[600px] rounded-xl w-full object-cover' src={image2} alt="Banner 2" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <div className='bg-opacity-5 backdrop-filter backdrop-blur-lg p-5 max-w-[80%] md:max-w-[50%] lg:max-w-[40%] rounded-xl xl:max-w-[30%] text-center'>
                                <h1 className='font-bold text-3xl text-gray-800'>Urban Redefined Here</h1>
                                <p className='text-gray-600 mt-5'>Experience a redefinition of urban living with our exceptional properties, offering modern amenities and stylish designs in the heart of the city.</p>
                            </div>
                        </div>
                        <img className='h-[600px] rounded-xl w-full object-cover' src={image3} alt="Banner 3" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <div className='bg-opacity-5 backdrop-filter backdrop-blur-lg p-5 max-w-[80%] md:max-w-[50%] lg:max-w-[40%] rounded-xl xl:max-w-[30%] text-center'>
                                <h1 className='font-bold text-3xl text-gray-800'>Your Dream Home Awaits!</h1>
                                <p className='text-gray-600 mt-5'>Discover your perfect dream home - a place where luxury, comfort, and happiness converge to create your ideal living sanctuary. Explore today</p>
                            </div>
                        </div>
                        <img className='h-[600px] rounded-xl w-full object-cover' src={image4} alt="Banner 4" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
