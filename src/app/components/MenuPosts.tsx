import Image from "next/image";
import Link from "next/link";

const MenuPosts = ({ withImage }) => {
  return (
    <div className=''>
      <Link href="/" className=''>
        {withImage && (
          <div className=''>
            <Image src="/p1.jpeg" alt="" fill className='' />
          </div>
        )}
        <div className=''>
          <span className=''>Travel</span>
          <h3 className=''>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className=''>
            <span className=''>John Doe</span>
            <span className=''> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className=''>
        {withImage && (
          <div className=''>
            <Image src="/p1.jpeg" alt="" fill className='' />
          </div>
        )}
        <div className=''>
          <span className=''>
            Culture
          </span>
          <h3 className=''>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className=''>
            <span className=''>John Doe</span>
            <span className=''> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className=''>
        {withImage && (
          <div className=''>
            <Image src="/p1.jpeg" alt="" fill className='' />
          </div>
        )}
        <div className=''>
          <span className=''>Food</span>
          <h3 className=''>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className=''>
            <span className=''>John Doe</span>
            <span className=''> - 10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className=''>
        {withImage && (
          <div className=''>
            <Image src="/p1.jpeg" alt="" fill className='' />
          </div>
        )}
        <div className=''>
          <span className=''>
            Fashion
          </span>
          <h3 className=''>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className=''>
            <span className=''>John Doe</span>
            <span className=''> - 10.03.2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;