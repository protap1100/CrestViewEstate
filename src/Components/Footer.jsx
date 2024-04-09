const Footer = () => {
    return (
        <div className="bg-TopBackground flex justify-center items-center text-white py-20 text-center">
        <footer className=" footer p-5 lg:px-52  md:px-10  text-white">
        <div className="grid grid-cols-4 gap-10">
            <div className="col-span-4 lg:col-span-1 space-y-3 lg:text-left text-center ">
                <h1 className="text-3xl font-extrabold">Get In Touch</h1>
                <p>Connect with us: Reach out for inquiries or assistance. Your satisfaction is our priority in every interaction</p>
                <p><i className="fa-regular fa-envelope mr-4 text-2xl text-red-600"></i>protapb23@gmail.com</p>
                <p><i className="fa-solid fa-phone mr-4 text-2xl text-red-600"></i>+8801957290864</p>
            </div>
            <div className="flex gap-16 mx-auto lg:gap-36 lg:col-span-2 col-span-4 ">
                <div className="flex flex-col items-center lg:items-start lg:-ml-16 space-y-3">
                <a href="" className="font-bold text-xl">Company Policy</a>
                <a href="" className="text-sm font-normal">About Us</a>
                <a href="" className="text-sm font-normal">Leadership</a>
                <a href="" className="text-sm font-normal">Career</a>
                <a href="" className="text-sm font-normal">News & Article</a>
                <a href="" className="text-sm font-normal">Legal Notice</a>
            </div>
            <div className="flex flex-col items-center lg:items-start lg:ml-6 space-y-3">
                <h1 className="font-bold text-xl">Support</h1>
                <a href="" className="text-sm font-normal">Help Center</a>
                <a href="" className="text-sm font-normal">FAQ</a>
                <a href="" className="text-sm font-normal">Business Support </a>
                <a href="" className="text-sm font-normal">Contact Us</a>
            </div>
            </div>
            <div className="flex flex-col items-center lg:items-start mx-auto lg:mx-0 col-span-4 lg:col-span-1 space-y-3 ">
                <h1 className="font-bold text-xl">Services</h1>
                <a href="" className="text-sm font-normal">Buying</a>
                <a href="" className="text-sm font-normal">Membership</a>
                <a href="" className="text-sm font-normal">Money Refund</a>
                <a href="" className="text-sm font-normal">Packages</a>
            </div>
        </div>
    </footer>
        </div>
    );
};

export default Footer;