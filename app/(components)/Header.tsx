import Image from 'next/image';
import Link from 'next/link';

const linkPrefix = process.env.NODE_ENV === "production" ? "/kaitlynvo" : "";

const Header = () => {

    return (
        <div className='flex flex-col w-[4rem] sm:w-[4rem] md:w-[4rem] lg:w-[6rem] xl:w-[9rem] items-center justify-start'>
            <Link href="/">
                <Image
                    src={linkPrefix + "/svgs/bow.svg"}
                    width={80}
                    height={80}
                    alt="bow drawing"
                />
            </Link>
        </div>
    )
}

export default Header;