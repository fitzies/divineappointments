import { promises as fs } from "fs";
import path from "path";

type CSVRow = Record<string, string>;

const CSVToJSON = <T extends CSVRow>(
  data: string,
  delimiter: string = ","
): T[] => {
  const titles: string[] = data
    .slice(0, data.indexOf("\n"))
    .split(delimiter)
    .map((title) => title.trim());
  return data
    .slice(data.indexOf("\n") + 1)
    .split("\n")
    .map((v: string) => {
      const values: string[] = v.split(delimiter).map((value) => value.trim());
      return titles.reduce((obj: CSVRow, title: string, index: number) => {
        obj[title.toLowerCase()] = values[index];
        return obj;
      }, {} as CSVRow) as T;
    });
};

async function fetchData<T extends CSVRow>(url: string): Promise<T[]> {
  try {
    // Fetch the file
    const response = await fetch(url, { next: { revalidate: 3600 } });

    const data = await response.text();

    // Define the path where the file will be saved
    const filePath = path.resolve("/tmp/file.txt");

    // Write the file to disk
    await fs.writeFile(filePath, data);

    // Read the file
    const fileContent = await fs.readFile(filePath, "utf-8");

    // Convert the CSV content to JSON
    return CSVToJSON<T>(fileContent);
  } catch (error) {
    console.error(error);
    return [];
  }
}

class Database<T extends CSVRow> {
  data: T[] = [];
  url: string;

  constructor(url: string) {
    this.url = url;
    this.initialize();
  }

  async initialize() {
    this.data = await fetchData<T>(this.url);
  }

  async findMany() {
    return this.data;
  }

  async findFirst(params: { where: Partial<T> }) {
    return this.data.find((item: T) => {
      return Object.keys(params.where).every((key) => {
        const itemValue = item[key as keyof T];
        const paramValue = params.where[key as keyof T];

        if (typeof itemValue === "string" && typeof paramValue === "string") {
          return itemValue.toLowerCase() === paramValue.toLowerCase();
        }

        return itemValue === paramValue;
      });
    });
  }
}

export const db = new Database<Business>(
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vT8u2BIxDOoUn82gPBCWJwRn7rZnoyQvkkFtmpdQ39T1eqkwq06YbyCXLNzonYMhhx-MOmYITJC6K45/pub?output=csv"
);
