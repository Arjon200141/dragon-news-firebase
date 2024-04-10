import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex" >
            <button className="btn btn-secondary">Breaking News!!!</button>
            <Marquee speed={100}>
                I can be a React component, multiple React components, or just some text. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa optio voluptates totam magni explicabo delectus officia, quisquam quia animi aliquid?
            </Marquee>
        </div>
    );
};

export default BreakingNews;