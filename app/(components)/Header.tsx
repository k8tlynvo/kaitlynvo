import Image from 'next/image';
import bow from "../../public/bow.jpg"

const Header = () => {
    
    return (
        <div className='flex w-full items-center justify-center pt-5'>
            <Image
                src={bow}
                width={80}
                height={80}
                alt="bow drawing"
            />
        </div>
    )
}

export default Header;