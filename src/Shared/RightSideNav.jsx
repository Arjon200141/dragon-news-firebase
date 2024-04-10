import { BsInstagram } from "react-icons/bs";
import { CiTwitter } from "react-icons/ci";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa6";
import swimming from "../assets/qZone1.png";
import classpic from "../assets/qZone2.png";
import playground from "../assets/qZone3.png";

const RightSideNav = () => {
    return (
        <div>
            <div className="space-y-4 p-4">
                <h2 className="text-3xl font-semibold">Login With</h2>
                <button className="btn btn-outline text-blue-600 text-lg w-full">
                    <FaGoogle />  Log In With Google
                </button>
                <button className="btn btn-outline text-black text-lg w-full">
                    <FaGithub />  Log In With Github
                </button>
            </div>
            <div className=" p-4">
                <h2 className="text-3xl font-semibold mb-4">Find Us On</h2>
                <a className="h-12 pl-4 flex gap-2 items-center text-lg border rounded-t-lg" href="">
                    <FaFacebookF />
                    Facebook
                </a>
                <a className="h-12 pl-4 flex gap-2 items-center text-lg border" href="">
                    <CiTwitter />
                    Twitter
                </a>
                <a className="h-12 pl-4 flex gap-2 items-center text-lg border rounded-b-lg " href="">
                    <BsInstagram />
                    Instagram
                </a>
            </div>
            <div className="p-4 bg-[#F3F3F3] space-y-8">
                <h2 className="text-3xl font-semibold mt-6">Q Zone</h2>
                <img src={swimming} alt="" className="border border-dashed p-2"/>
                <img src={classpic} alt="" className="border border-dashed p-2"/>
                <img src={playground} alt="" className="border border-dashed p-2"/>
            </div>
        </div>
    );
};

export default RightSideNav;