import pathIcon from "../assets/icon.webp"
const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center bg-[#303030] text-primary-content p-10">
        <aside>
          <img className="w-20 h-20 rounded-full" src={pathIcon} alt="" />
          <p className="font-bold">
            PathFinder Pro Career Counseling
          </p>
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
