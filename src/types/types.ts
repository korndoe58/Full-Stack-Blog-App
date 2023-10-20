
export type MenuType = {
    id: string;
    slug: string;
    title: string;
    desc?: string;
    img?: string;
    color: string;
  }[];
  
  export type ProductType = {
    id: string;
    title: string;
    desc?: string;
    img?: string;
    price: number;
    options?: { title: string; additionalPrice: number }[];
  };

export type Post = {
    id: number;
    title: string;
    content: string;
};  
  
export type Category = {
    id: String; 
    slug:  String;  
    title: String;
    img:   String;
    Posts: Post[];

};