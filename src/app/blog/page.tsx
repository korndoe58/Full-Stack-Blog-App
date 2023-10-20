'use client'
import CardList from "../components/CardList";
import Menu from "../components/Menu";

const BlogPage = ({ searchParams }: {searchParams: { [key: string]: string | string[] | undefined }}) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;
 console.log({cat});
 
  return (
    <div className=''>
      <h1 className=''>{cat} Blog</h1>
      <div className=''>
        <CardList page={page} cat={cat}/>
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
