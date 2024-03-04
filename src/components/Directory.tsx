"use client";

import { useState } from "react";
import Container from "./Container";
import Searchbar from "./Searchbar";
import { useRouter } from "next/navigation";

const Directory = ({ businesses }: { businesses: Business[] }) => {
  const [search, setSearch] = useState("");
  // const router = useRouter();

  // if (businesses.length <= 0) {
  //   router.refresh();
  // }

  const filteredBusinesses = businesses.filter(
    (b: Business) =>
      b.name.toLowerCase().includes(search.toLowerCase()) ||
      b.category.toLowerCase().includes(search.toLowerCase())
  );

  const filterOptions: { name: string; count: number }[] = businesses
    .map((b: Business) => b.category)
    .reduce((acc: { name: string; count: number }[], curr: string) => {
      const found = acc.find((el) => el.name === curr);
      if (found) {
        found.count++;
      } else {
        acc.push({ name: curr, count: 1 });
      }
      return acc;
    }, []);

  return (
    <div className="w-screen flex flex-col items-center">
      <Searchbar
        filter
        onChange={(e) => setSearch(() => e.target.value)}
        value={search}
        filterOptions={filterOptions}
        onCategoryClick={(categoryName: string) =>
          setSearch(() => categoryName)
        }
      />
      <div className="w-2/3 flex flex-col justify-center items-center lg:grid lg:grid-cols-3 py-10 gap-4">
        {filteredBusinesses.map((b: Business) => {
          return <Container business={b} key={b.name} />;
        })}
      </div>
    </div>
  );
};

export default Directory;
