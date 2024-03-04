import Link from "next/link";
import ServerMotionDiv from "./ServerMotionDiv";

const Container = (props: { business: Business }) => {
  let business = props.business;
  return (
    <ServerMotionDiv initial={{ opacity: 0 }} animate={{ opacity: 100 }}>
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
          </div>
        </div>
      </Link>
    </ServerMotionDiv>
  );
};

export default Container;
