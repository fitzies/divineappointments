import ServerMotionDiv from "@/components/ServerMotionDiv";
import Image from "next/image";

const Page = ({ params }: { params: { slug: string } }) => {
  return (
    <div className="w-screen flex flex-col items-center">
      <h1 className="font-bold lg:text-7xl text-5xl mt-8 w-2/3 text-center">
        Find and support your <br />
        <span className="underline">Christian</span> businesses
      </h1>
      <p className="text-gray-500 lg:w-2/3 w-full text-center my-6 lg:text-lg px-10 lg:px-0">
        Our lives in Christ are meant to be purposefull, eventfull and enjoyable
        because Christ said He has come to give us life and life in abundance.
        Embarking in this journey of life together we invite all of you to be
        part of this community where you can find support and enrich your
        calling in businesses
      </p>
      <ServerMotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        className="w-full flex justify-center"
      >
        <Image
          src="https://i.ibb.co/KhGtwzW/pexels-pixabay-355747.png"
          alt="proverbs 3:5"
          className="lg:w-2/3 w-5/6 my-6 rounded-xl p-1 bg-gray-100"
        />
      </ServerMotionDiv>
    </div>
  );
};

export default Page;
