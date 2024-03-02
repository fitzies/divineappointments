import Link from "next/link";

const Container = (props: { business: Business }) => {
  let business = props.business;
  return (
    <Link
      href={`/directory/${business.name.toLowerCase()}`}
      className="border border-gray-400 rounded-lg flex flex-col h-52 aspect-video hover:-translate-y-2 cursor-pointer duration-150 w-full"
    >
      <div className="w-full bg-green-50 h-[60%] rounded-t-xl"></div>
      <div className="w-full flex flex-col px-3 py-3">
        <h1 className="font-bold">{business.name}</h1>
        <p className="overflow-hidden text-overflow-ellipsis whitespace-nowrap">
          {business.description}
        </p>
        <div className="text-gray-400 text-sm mt-2 flex items-center">
          <span className="mr-2">⟟</span> <p>{business.address}</p>
          {/* <p className="ml-auto">{business.categoryId}</p> */}
        </div>
      </div>
    </Link>
  );
};

export default Container;
