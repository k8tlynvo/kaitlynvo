import Image from 'next/image';
import Link from 'next/link';

const Header = () => {

    return (
        <div className='flex flex-col w-[4rem] sm:w-[4rem] md:w-[4rem] lg:w-[6rem] xl:w-[6rem] items-center justify-start'>
            <Link href="/">
                <Image
                    src={"/kaitlynvo/svgs/bow.svg"}
                    width={80}
                    height={80}
                    alt="bow drawing"
                />
            </Link>
        </div>
    )
}

export default Header;