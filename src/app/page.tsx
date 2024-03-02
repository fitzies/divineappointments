// import Button from "@/components/Button";
// import Categories from "@/components/Categories";
// import SearchBar from "@/components/SearchBar";

import Searchbar from "@/components/Searchbar";

const Page = ({ params }: { params: { slug: string } }) => {
  return (
    <div className="w-screen flex flex-col items-center">
      <h1 className="font-bold lg:text-7xl text-5xl mt-8 w-2/3 text-center">
        Find and support your <br />
        <span className="underline">Christian</span> businesses
      </h1>
      <p className="text-gray-500 lg:w-[45%] w-full text-center my-6 lg:text-lg px-10 lg:px-0">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati quae
        consequatur ea non beatae officiis deserunt saepe neque, minima
        aspernatur.
      </p>
    </div>
  );
};

export default Page;
