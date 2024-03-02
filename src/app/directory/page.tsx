import Directory from "@/components/Directory";
import { db } from "@/lib/db";

const Page = async ({ params }: { params: { slug: string } }) => {
  const businesses = await db.findMany();

  return <Directory businesses={businesses} />;
};

export default Page;
