import Products from "../components/products";
import Searchbar from "../components/search";

export default function Home() {
  return (
    <main className="justify-between flex flex-col items-center px-4 pt-24 lg:px-40 lg:pt-28 xl:px-60">
      <h1 className="absolute w-full text-center bg-gray-800 py-4 text-3xl font-bold text-white top-0">
        NEXT SCRAPPER
      </h1>
      <div className="w-full mb-8">
        <Searchbar /> 
      </div>
      <Products />
    </main>
  );
}