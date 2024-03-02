// Searchbar.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type searchBarProps = {
  filter?: boolean;
  filterOptions?: { name: string; count: number }[];
  onCategoryClick?: (categoryName: string) => void;

  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};

const Searchbar = (props: searchBarProps) => {
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div className="flex flex-col w-2/3 justify-center relative">
      <div className="flex justify-center items-center gap-2 my-2">
        <input
          className="border-2 px-3 py-2 rounded-xl w-full outline-none"
          placeholder="Barbershop, hairdresser, etc."
          value={props.value}
          onChange={(e) => props.onChange && props.onChange(e)}
        />
        {props.filter ? (
          <button
            className="btn-inverse mx-2"
            onClick={() => setFilterOpen(() => !filterOpen)}
          >
            ☰
          </button>
        ) : null}
      </div>
      {props.filter && props.filterOptions && filterOpen ? (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 100 }}
          className="w-full gap-2 flex justify-start text-grey absolute overflow-x-scroll whitespace-nowrap"
          style={{ top: "100%" }}
        >
          {props.filterOptions.map((category) => {
            return (
              <span
                key={category.name}
                onClick={() =>
                  props.onCategoryClick && props.onCategoryClick(category.name)
                }
                className="border border-gray-300 px-2 rounded-xl hover:border-black hover:text-black cursor-pointer duration-150"
              >
                {category.name} ({category.count})
              </span>
            );
          })}
          <span
            onClick={() => props.onCategoryClick && props.onCategoryClick("")}
            className="border border-gray-300 px-2 rounded-xl hover:border-black hover:text-black cursor-pointer duration-150"
          >
            ✕
          </span>
        </motion.div>
      ) : null}
    </div>
  );
};

export default Searchbar;
