import classImg from "../../assets/images/class.png";
import playgroundImg from "../../assets/images/playground.png";
import swimmingImg from "../../assets/images/swimming.png";

const QZone = () => {
    return (
        <div className="bg-base-200 p-3">
            <h1 className="font-bold">Q-Zone</h1>
            <div>
                <img src={classImg} alt="banner-image" />
                <img src={playgroundImg} alt="banner-image" />
                <img src={swimmingImg} alt="banner-image" />
            </div>
        </div>
    );
};

export default QZone;