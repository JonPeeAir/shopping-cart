import DynamicLink from "../../../components/DynamicLink";

function capitalize(string) {
  return string
    .split(" ")
    .map(word => word[0][0].toUpperCase().concat(word.slice(1)))
    .join(" ");
}

const CategoryList = ({ categories }) => {

  return (
    <div className="w-1/4 h-full pt-10">
      <p className="text-3xl leading-loose text-center">Categories</p>
      <nav>
        <DynamicLink
          to="?category=all"
          className="block text-xl text-center hover:underline"
        >
          All
        </DynamicLink>
        {
          categories.map(category => (
            <DynamicLink
              key={category}
              to={`?category=${category}`}
              className="block text-xl text-center hover:underline"
            >
              {capitalize(category)}
            </DynamicLink>
          ))
        }
      </nav>
    </div>
  );

}

export default CategoryList;
