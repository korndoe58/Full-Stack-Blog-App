import Link from "next/link";
import React from "react";

const MenuCategories = () => {
  return (
    <div className=''>
      <Link
        href="/blog?cat=style"
        className=''
      >
        Style
      </Link>
      <Link href="/blog" className=''>
        Fashion
      </Link>
      <Link href="/blog" className=''>
        Food
      </Link>
      <Link href="/blog" className=''>
        Travel
      </Link>
      <Link href="/blog" className=''>
        Culture
      </Link>
      <Link href="/blog" className=''>
        Coding
      </Link>
    </div>
  );
};

export default MenuCategories;