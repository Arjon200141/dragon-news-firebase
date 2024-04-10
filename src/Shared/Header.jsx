import moment from "moment";
import logo from "../assets/logo.png";

const Header = () => {
    return (
        <div className="space-y-4">
            <img src={logo} alt="" className="mx-auto my-6"/>
            <p className="text-[#706F6F] text-center text-lg">Journalism Without Fear or Favour</p>
            <p className="text-lg text-center font-medium">{moment().format("dddd , MMMM D , YYYY")}</p>
        </div>
    );
};

export default Header;