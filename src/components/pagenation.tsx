export default function Pagination({pageNumber, totalPages}: {pageNumber: number, totalPages: number}) {
    return (
        <div className="w-full">
            <ul className="mx-auto">
                <li className="text-white inline-block mx-1 px-2 cursor-pointer border border-transparent h-[32px] leading-[32px] hover:bg-[#092C39] rounded-md font-montserrat-bold">Prev</li>
                {Array.from({ length: totalPages }, (_, index) => (
                    <li 
                        key={index + 1} 
                        className={`text-white inline-block h-[32px] w-[32px] leading-[32px] mx-1 font-montserrat-bold cursor-pointer border border-transparent items-center text-center justify-center hover:${
                            pageNumber === index + 1 ? 'bg-[#2BD17E]' : 'bg-[#2BD17E]'
                        } rounded-md ${
                            pageNumber === index + 1 ? 'bg-[#2BD17E]' : 'bg-[#092C39]'
                        }`}
                    >
                        {index + 1}
                    </li>
                ))}
                <li className="text-white inline-block mx-1 px-2 cursor-pointer border border-transparent h-[32px] leading-[32px] hover:bg-[#092C39] rounded-md font-montserrat-bold">Next</li>
            </ul>
        </div>   
    );
}