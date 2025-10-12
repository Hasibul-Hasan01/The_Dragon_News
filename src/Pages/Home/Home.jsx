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
            <div className="grid grid-cols-12 py-4">
                <section className="left-nav col-span-3">
                    <h1 className="font-bold">All Caterogy</h1>
                </section>
                <section className="post-area col-span-6">
                    <h1 className="font-bold">Dragon News Home</h1>
                </section>
                <section className="right-nav col-span-3">
                    <h1 className="font-bold">Login With</h1>
                </section>
            </div>
        </div>
    );
};

export default Home;