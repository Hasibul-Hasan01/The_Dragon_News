import LatestNews from "../../Components/LatestNews/LatestNEws";
import Hero from "./Section/Hero";

const Home = () => {
    return (
        <div>
            <section className="">
                <LatestNews />
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