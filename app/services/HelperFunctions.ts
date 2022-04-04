import { Strings } from "../constants";
interface GenreProp {
  id: number;
  name: string;
}

//returns the genre list from genre object.
export const getGenreList = (array: any[]): string => {
  return array
    .map((x: GenreProp) => x.name)
    .join(Strings.commaWithLeadingSpace);
};
