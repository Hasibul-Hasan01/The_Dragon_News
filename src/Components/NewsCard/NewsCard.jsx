
const NewsCard = ({news}) => {
    const {title, } = news;
    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
};

export default NewsCard;