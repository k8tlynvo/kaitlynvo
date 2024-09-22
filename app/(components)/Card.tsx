import Image from 'next/image';

interface CardProps {
    imageUrl: string;
    title: string;
    description: string,
    link: string;
}

const Card = (props: CardProps) => {
    const { imageUrl, title, description, link } = props;

    return (
        <a 
            href={link ? link : undefined}
            target='_blank'
            rel='noopener noreferrer'
        >
            <div className='bg-white h-96 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-95 hover:shadow-lg hover:shadow-pink-300'>
                <div className='relative w-full h-72'>
                    <Image 
                        src={imageUrl}  
                        alt={title} 
                        fill={true}
                        style={{objectFit: "cover", objectPosition: "top" }}
                    />
                </div>
                <div className='p-4 flex-1'>
                    <div className='text-default-text'>{title}</div>
                    <div className='text-sub-text'>{description}</div>
                </div>  
            </div>
        </a>
    )
}

export default Card;