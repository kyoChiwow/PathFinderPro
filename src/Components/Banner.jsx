import banner from "../assets/banner.webp"
const Banner = () => {
    return (
        <div className="max-w-[85%] mx-auto">
            <img className="w-full rounded-xl" src={banner} alt="" />
        </div>
    );
};

export default Banner;