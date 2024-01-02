import "./directory.styles.scss";
import CategoryItem from "../category-item/CategoryItem";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category, index) => (
        <CategoryItem category={category} key={index} />
      ))}
    </div>
  );
};

export default Directory;
