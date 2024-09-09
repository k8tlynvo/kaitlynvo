import Link from "next/link";

const NavBar = () => {
    return (
        <div className="flex flex-col w-[4rem] sm:w-[4rem] md:w-[4rem] lg:w-[6rem] xl:w-[6rem] items-end space-y-2 text-lg text-default-text">
            <div className='transition duration-300 hover:text-pink-300 hover:underline hover:decoration-pink-200'>
                <Link href="/">
                    Work
                </Link>
            </div>
            <div className='transition duration-300 hover:text-pink-300 hover:underline hover:decoration-pink-200'>
                <a href='/pdfs/resume.pdf' target='_blank' rel='noopener noreferrer'>
                    Resume 
                </a>
            </div>
        </div>
    );
}

export default NavBar;