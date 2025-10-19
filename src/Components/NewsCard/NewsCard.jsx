import { CiBookmarkPlus } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { IoMdEye } from "react-icons/io";
import { NavLink } from "react-router";




const NewsCard = ({ news }) => {
    const { author, title, thumbnail_url, details, rating, total_view } = news;
    const formateDate = new Date(author.published_date).toLocaleDateString()
    return (
        <div className="w-[524px] border-base-200 border-2 mt-5">
            <header className="flex justify-between items-center bg-base-200 overflow-hidden">
                <div className="flex items-center px-5 h-[80px]">
                    <div className="avatar mr-3">
                        <div className="size-13 rounded-full">
                            <img src={author.img} />
                        </div>
                    </div>
                    <div>
                        <h1 className="">{author.name}</h1>
                        <h1>{formateDate}</h1>
                    </div>
                </div>
                <div className="flex px-5">
                    <CiBookmarkPlus size={25} className="mr-2" />
                    <CiShare2 size={25} />
                </div>
            </header>
            <section>
                <h1 className="text-2xl font-medium px-3 py-3">{title}</h1>
            </section>
            <section className="flex justify-center">
                <img className="rounded-lg w-[500px]" src={thumbnail_url} alt="Thumbnail-Image" />
            </section>
            <section className="px-3">
               
                {details.length > 150 ? (
                    <>
                    {details.slice(0, 150)}...
                    <span>
                        <NavLink className="text-red-700">Read More</NavLink>
                    </span>
                    </>
                ) : (
                    details
                )}
            </section>
            <div className="flex w-full px-3 flex-col">
                <div className="divider"></div>
            </div>
            <section className="flex justify-between pb-5 px-3">
                <div className="flex items-center">
                    <div className="rating mr-3">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                    </div>
                    <div>
                        <h1>{rating.number}</h1>
                    </div>
                </div>
                <div className="flex items-center">
                    <IoMdEye />
                    <h1 className="ml-2">{total_view}</h1>
                </div>
            </section>
        </div>
    );
};

export default NewsCard;