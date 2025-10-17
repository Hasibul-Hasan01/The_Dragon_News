import { use } from "react";
import { NavLink } from "react-router";

const categoryNews = fetch("/categories.json").then((res) => res.json());

const CategoriesBtn = () => {
    const categoryBtn = use(categoryNews);
    // console.log(categoryBtn);
    return (
        <div>
            <section className="py-5">
                {
                    categoryBtn.map(category => <NavLink className={"grid btn mb-1"} category={category} key={category.id} to={`/category/${category.id}`} >{category.name}</NavLink>)
                }
            </section>
        </div>
    );
};

export default CategoriesBtn;