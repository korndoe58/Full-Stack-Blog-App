import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuPosts from "./MenuPosts";
import MenuCategories from "./MenuCategories";

const Menu = () => {
  return (
    <div className=''>
      <h2 className=''>{"What's hot"}</h2>
      <h1 className=''>Most Popular</h1>
      <MenuPosts withImage={false} />
      <h2 className=''>Discover by topic</h2>
      <h1 className=''>Categories</h1>
      <MenuCategories />
      <h2 className=''>Chosen by the editor</h2>
      <h1 className=''>Editors Pick</h1>
      <MenuPosts withImage={true} />
    </div>
  );
};

export default Menu;