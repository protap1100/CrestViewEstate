import faq from '../../src/assets/images/faq.png'
import 'animate.css';

const Faq = () => {
    return (
        <div>
              <div className="border-dashed border mt-32 border-[#13131833] lg:mx-0 mx-2"></div>
            <div className="text-center px-2 lg:px-0">
                <h1 className="text-4xl font-extrabold mt-8">Client Question</h1>
                <p className="mt-6 px-2 lg:px-[370px]">Get answers to common questions about our real estate services and the home buying process. </p>
            </div>
            <div className="border-dashed border mt-8 border-[#13131833] lg:mx-0 mx-2"></div>
        <div className="lg:flex border border-solid border-[#1313181A] rounded-2xl mt-12 p-8 lg:space-y-0 space-y-8 gap-10 ">
                <div className="lg:flex-grow-0 ">
                    <img src={faq} alt=""/>
                </div>
                <div className="lg:flex-grow">
                      <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-6" /> 
                        <div className="collapse-title md:w-auto w-auto max-width  text-xl font-bold">
                            Property Listings
                        </div>
                        <div className="collapse-content md:w-auto lg:w-3/5 "> 
                          <p> Explore our latest property listings and find your dream home in your desired location.</p>
                        </div>
                      </div>
                      <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-6"  /> 
                        <div className="collapse-title md:w-auto w-auto max-width  text-xl font-bold">
                             Home Buying Process
                        </div>
                        <div className="collapse-content  md:w-auto lg:w-3/5 "> 
                          <p>Learn about the step-by-step process of buying a home and important considerations.</p>
                        </div>
                      </div>
                      <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-6"  /> 
                        <div className="collapse-title md:w-auto w-auto max-width  text-xl font-bold">
                            Mortgage and Financing
                        </div>
                        <div className="collapse-content  md:w-auto lg:w-3/5 "> 
                          <p> Understand mortgage options, financing details, and pre-approval procedures.</p>
                        </div>
                      </div>
                      <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-6"  /> 
                        <div className="collapse-title md:w-auto w-auto max-width  text-xl font-bold">
                            Home Inspection
                        </div>
                        <div className="collapse-content  md:w-auto lg:w-3/5 "> 
                          <p>Discover the importance of home inspections and how they protect buyers.</p>
                        </div>
                      </div>
                      <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-6"  /> 
                        <div className="collapse-title md:w-auto w-auto max-width  text-xl font-bold">
                             Real Estate Investment
                        </div>
                        <div className="collapse-content  md:w-auto lg:w-3/5 "> 
                          <p>Explore real estate investment opportunities and strategies for wealth building.</p>
                        </div>
                      </div>
                      <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-6"  /> 
                        <div className="collapse-title md:w-auto w-auto max-width  text-xl font-bold">
                             Property Management
                        </div>
                        <div className="collapse-content  md:w-auto lg:w-3/5 "> 
                          <p>Learn about property management services and how we assist landlords and tenants.</p>
                        </div>
                      </div>
                      <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-6"  /> 
                        <div className="collapse-title md:w-auto w-auto max-width  text-xl font-bold">
                          Neighborhood Information
                        </div>
                        <div className="collapse-content  md:w-auto lg:w-3/5 "> 
                          <p> Get insights into different neighborhoods, schools, amenities, and local attractions.</p>
                        </div>
                      </div>
                </div>
            </div>
        </div>
      
    );
};

export default Faq;