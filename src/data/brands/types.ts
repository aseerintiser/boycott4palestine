
export interface Brand {
  id: string;
  name: string;
  category: Category;
  description: string;
  reasons: string[];
  alternatives: Alternative[];
  logo?: string;
}

export interface Alternative {
  id: string;
  name: string;
  description: string;
  link?: string;
}

export type Category = 
  | "Food & Beverage" 
  | "Tech & Electronics" 
  | "Fashion & Apparel" 
  | "Cosmetics & Personal Care" 
  | "Household" 
  | "Entertainment";
