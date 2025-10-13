import { NavLink } from "react-router";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";




const SocialMedia = () => {
    return (
        <div>
            <h1 className="font-bold">Find Us On</h1>
            <section className="py-5">
                <NavLink className="btn flex items-center justify-start mb-1"><AiFillTwitterCircle size={18} className="mr-1" /> Twitter</NavLink>
                <NavLink className="btn flex items-center justify-start mb-1"><FaFacebook size={18} className="mr-1" /> Facebook</NavLink>
                <NavLink className="btn flex items-center justify-start mb-1"><AiFillInstagram size={18} className="mr-1" /> Instagram</NavLink>
            </section>
        </div>
    );
};

export default SocialMedia;