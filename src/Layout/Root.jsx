import { Outlet } from 'react-router';
import Header from '../Components/Header/Header';
import LatestNews from '../Components/LatestNews/LatestNEws';
import SocialLog from '../Components/Auth/SocialLog/SocialLog';
import Navbar from '../Components/Navbar/Navbar';
import SocialMedia from '../Components/SocialMedia/SocialMedia';
import CategoriesBtn from '../Components/CategoriesBtn/CategoriesBtn';
import QZone from '../Components/QZone/QZone';


const Root = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <Header />
            <section className="">
                <LatestNews />
                <Navbar />
            </section>
            <div className="grid grid-cols-12 py-4 gap-2">
                <section className="left-nav col-span-3">
                    <h1 className="font-bold">All Caterogy</h1>
                    <CategoriesBtn />
                </section>
                <section className="post-area col-span-6">
                    <h1 className="font-bold">Dragon News Home</h1>
                    <Outlet />
                </section>
                <section className="right-nav col-span-3">
                    <h1 className="font-bold">Login With</h1>
                    <SocialLog />
                    <SocialMedia />
                    <QZone />
                </section>
            </div>
        </div>
    );
};

export default Root;