import { Suspense, use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch('/public/data/Categories.json').then((res) => res.json());

const CategoriesBtn = () => {
    const CategoriesBtn = use(categoryPromise);
    return (
        <div className="grid py-5">
            <Suspense fallback={'loading loading-ring loading-xl'}>
                {
                    CategoriesBtn.map( category => <NavLink className="btn w-full mb-1" key={category.id}  to={`/category/${category.id}`}>{category.name}</NavLink>)
                }
            </Suspense>
        </div>
    );
};

export default CategoriesBtn;