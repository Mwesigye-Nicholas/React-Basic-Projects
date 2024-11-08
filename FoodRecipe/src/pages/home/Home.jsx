/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { GlobalContext } from "../../components/navbar/context";
import RecipeItem from "../../components/recipe-item";

const Home = () => {
  const { loading, recipeList } = useContext(GlobalContext);

  if (loading) {
    <div>
      <h3>Loading...Please wait!</h3>
    </div>;
  }
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing to show. please search something
          </p>
        </div>
      )}
    </div>
  );
};
export default Home;
