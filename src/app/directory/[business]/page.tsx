import { db } from "@/lib/db";

const Page = async ({ params }: { params: { business: string } }) => {
  const decodedName = decodeURIComponent(
    params.business.replace(/%27/g, "'")
  ).replace(/\b\w/g, (l) => l.toUpperCase());

  const business = await db.findFirst({
    where: {
      name: decodedName,
    },
  });

  if (!business) {
    return <div>Business not found</div>;
  }

  return (
    <div className="flex flex-col h-screen items-center px-8 w-full">
      <h1 className="font-bold mb-1 text-4xl">{business.name}</h1>
      <p className="text-gray-500">{business.category}</p>
      <p className="my-4 text-center w-2/3">{business.description}</p>
      <div className="flex flex-col w-1/2">
        <div className="aspect-video bg-gray-50 border border-gray-200 mb-4 rounded-xl w-full"></div>
        <p>
          <span className="text-lg">⟟</span> {business.address},{" "}
          {business.postal}
        </p>
      </div>
    </div>
  );
};

export default Page;
