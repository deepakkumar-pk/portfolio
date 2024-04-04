import React from 'react';
import Image from "next/image";
import Link from 'next/link';


const Header = () => {
  return (
    <header className="py-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link href="">
            <Image
              src="/img/logoSecondary.svg"
              width={110}
              height={48}
              alt="Picture of the author"
            />
          </Link>
          <button className="btn btn-sm">Work with me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
