import CenterNav from "../Shared/CenterNav";
import Header from "../Shared/Header";
import LeftSideNav from "../Shared/LeftSideNav";
import NavBar from "../Shared/NavBar";
import RightSideNav from "../Shared/RightSideNav";
import BreakingNews from "./BreakingNews";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <NavBar></NavBar>
            <div className="grid lg:grid-cols-4 gap-6">
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2 border-2">
                    <CenterNav></CenterNav>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;