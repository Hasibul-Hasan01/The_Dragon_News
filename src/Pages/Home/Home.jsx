import LatestNews from "../../Components/LatestNews/LatestNEws";
import Navbar from "../../Components/Navbar/Navbar";
import Hero from "./Section/Hero";

const Home = () => {
    return (
        <div>
            <section className="">
                <LatestNews />
                <Navbar />
            </section>
            <div>
                <section className="left-nav"></section>
                <section className="post-area"></section>
                <section className="right-nav"></section>
            </div>
        </div>
    );
};

export default Home;