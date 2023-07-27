import { Category } from "@/typescript/types";

const URL= `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  
  const res = await fetch(URL)// null
  const resJson= res.json()
  
  return resJson;
};

export default getCategories; 