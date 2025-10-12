import { Suspense, use } from "react";

const categoryPromise = fetch('/public/data/categories.json').then((res) => res.json());

const Categories = () => {
    const categories = use(categoryPromise);
    return (
        <div className="py-5">
            <Suspense fallback={'loading loading-ring loading-xl'}>
                {
                    categories.map( category => <button className="btn w-full grid mb-1" key={category.id}>{category.name}</button>)
                }
            </Suspense>
        </div>
    );
};

export default Categories;