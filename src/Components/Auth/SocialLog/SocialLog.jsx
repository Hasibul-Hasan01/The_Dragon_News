import { GrGithub } from "react-icons/gr";
import { AiFillGoogleCircle } from "react-icons/ai";



const SocialLog = () => {
    return (
        <div className="py-5">
            <button className="btn w-full border-[#2665d6] border-2 text-[#2665d6] hover:bg-[#2665d6] hover:text-white mb-1"><AiFillGoogleCircle /> Login with Google</button>
            <button className="btn w-full border-[#121212] hover:bg-[#121212] hover:text-white border-2"><GrGithub /> Login with Github</button>
        </div>
    );
};

export default SocialLog;