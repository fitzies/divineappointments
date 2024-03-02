import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  try {
    // Fetch the file
    const response = await fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vT8u2BIxDOoUn82gPBCWJwRn7rZnoyQvkkFtmpdQ39T1eqkwq06YbyCXLNzonYMhhx-MOmYITJC6K45/pub?output=csv",
      { next: { revalidate: 3600 } }
    );

    const data = await response.text();

    // Define the path where the file will be saved
    const filePath = path.resolve("/tmp/file.txt");

    // Write the file to disk
    await fs.writeFile(filePath, data);

    // Read the file
    const fileContent = await fs.readFile(filePath, "utf-8");

    // Send the first 100 characters of the file as the response
    return Response.json({ data: CSVToJSON(fileContent) });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "error" });
  }
}

type CSVRow = Record<string, string>;

const CSVToJSON = (data: string, delimiter: string = ","): CSVRow[] => {
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
      }, {} as CSVRow);
    });
};
