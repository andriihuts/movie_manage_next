import { Movie } from "@/types";

export default function Card({data}: {data: Movie}) {
    return (
        <div className="bg-[#092C39] p-2 rounded-xl justify-between flex flex-col">
            <img src={`/images/` + data.image + '.png'} alt="Logo" className="w-full h-full" />
            <div className="my-2">
                <div className="text-white font-montserrat-500 text-[20px] leading-[32px] my-2 px-1">{data.title}</div>
                <div className="text-white font-montserrat text-[14px] leading-[24px] my-2 px-1">{data.publish_year}</div>
            </div>
        </div>   
    );
}