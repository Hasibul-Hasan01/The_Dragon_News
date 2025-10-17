import { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/Categories.json").then((res) => res.json());

const CategoriesBtn = () => {
    const categoriesBtn = use(categoryPromise);
    console.log(categoriesBtn);
    return (
        <div className="grid py-5">
            <div fallback={'loading loading-ring loading-xl'}>
                {
                    categoriesBtn.map( category => <NavLink className="btn w-full mb-1" key={category.id}  to={`/category/${category.id}`}>{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default CategoriesBtn;