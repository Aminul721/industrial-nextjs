import Link from 'next/link';
import Title from '@/components/ui/title';
import OutLineSvgText from '@/components/ui/outLineSvgText';

const AddressCard = ({ id, address, company, email, phone, lat_lng, setMapDirection, country }) => {
    return (
        <div className='-mt-6 lg:-mt-0 mb-10'>
            <OutLineSvgText >{id}</OutLineSvgText>
            <Title size={"4xl"} className="mb-1">{country}</Title>
            <div>
                <p className='font-semibold text-muted-foreground'>{company}</p>
                <p className='max-w-64'>{address}</p>
            </div>
            <div className='lg:mt-5 mt-3 lg:mb-7.5 pb-5'>
                <Link href={`tel:${phone}`} className='hover-underline block'><b className='font-normal'>Phone: </b><span>{phone}</span></Link>
                <Link href={`mailto:${email}`} className='hover-underline block'><b className='font-normal'>Email: </b><span>{email}</span></Link>
            </div>
            <p onClick={() => setMapDirection(lat_lng)} className='inline-flex items-center gap-3 text-xl font-bold text-muted-foreground cursor-pointer relative after:contents=[""] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-primary '>
                View on Map
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="21" viewBox="0 0 35 21" fill="none">
                    <path d="M24 19.5L33 10.4999L24 1.5" stroke="#253B2F" strokeWidth="2" strokeLinecap="square" />
                    <path d="M1 10.5L32 10.5" stroke="#253B2F" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
                </svg>
            </p>
        </div>
    )
}

export default AddressCard