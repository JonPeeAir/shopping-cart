import DynamicLink from "../../../components/DynamicLink";

const CategoryList = ({ categories }) => {

  return (
    <div className="w-1/4 h-full pt-10">
      <p className="text-3xl leading-loose text-center">Categories</p>
      <nav>
        <DynamicLink to="?category=all" className="block text-xl text-center">
          All
        </DynamicLink>
        {
          categories.map(category => (
            <DynamicLink
              key={category}
              to={`?category=${category}`}
              className="block text-xl text-center"
            >
              {category}
            </DynamicLink>
          ))
        }
      </nav>
    </div>
  );

}

export default CategoryList;
