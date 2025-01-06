"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
    const router = useRouter();
    const [error, setError] = useState<boolean>(false);
    
    useEffect(() => {
        if(!localStorage.getItem('email') || !localStorage.getItem('password')){
          router.push("/");
        }
    }, [])
    
    return (
        <div className="grid grid-rows-[1fr_20px] items-center justify-items-center min-h-screen p-6 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[#093545] bg-[url('/images/Vectors.png')] bg-contain bg-no-repeat bg-left-bottom">
          <main className="container flex flex-col flex-top gap-20 row-start-1 items-top justify-top h-full max-w-screen-xl mx-auto">
            <nav className="w-full flex flex-row items-center justify-between py-10 lg:px-20">
                {/* Logo */}
                <div className="flex items-center gap-4">
                    <h2 className="text-[32px] leading-[40px] sm:text-[48px] sm:leading-[56px] text-start text-white font-montserrat-600">
                    Create a new movie
                    </h2>
                </div>
            </nav>

            <div className="flex flex-col sm:flex-row items-start justify-start gap-4 sm:gap-x-32 lg:px-20">
                <div className="w-full sm:w-[473px] sm:h-[504px] flex flex-col items-center justify-center bg-[#224957] border-2 border-dashed border-white rounded-lg aspect-square">
                    <img src="/images/file_download_black_24dp.png" alt="Download Icon" />
                    <label className="block text-white text-[14px] leading-[24px] font-montserrat">Drop an image here</label>
                </div>

                <div className="flex flex-col items-center sm:items-start w-full sm:w-[302px] md:w-[382px]">
                    <div className="mb-3 w-full">
                        <input
                            type="text"
                            id="title"
                            name="title"
                            autoComplete="off"
                            required
                            className={`w-full px-4 py-2 border-none rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500  ${error ? 'bg-white border-[#EB5757]': 'bg-[#224957] border-[#224957]'} font-montserrat focus:border-[#224957] focus:bg-white focus:text-[#224957] focus:shadow-none`}
                            placeholder="Title"
                        />
                    </div>
                    <div className="mb-3 w-full">
                        <input
                            type="text"
                            id="publish_year"
                            name="publish_year"
                            autoComplete="off"
                            required
                            className={`w-full sm:w-[216px] px-4 py-2 border-none rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500  ${error ? 'bg-white border-[#EB5757]': 'bg-[#224957] border-[#224957]'} font-montserrat focus:border-[#224957] focus:bg-white focus:text-[#224957] focus:shadow-none`}
                            placeholder="Publish Year"
                        />
                    </div>
                    <div className="flex flex-row gap-4 w-full sm:mt-24">
                        <button
                        type="submit"
                        className="w-full sm:w-1/2 h-[56px] py-2 bg-transparent border border-white text-white rounded-md focus:outline-none focus:ring-2 text-[16px] leading-[24px] font-montserrat-bold"
                        >
                        Cancel
                        </button>
                        <button
                        type="submit"
                        className="w-full sm:w-1/2 h-[56px] py-2 bg-[#2BD17E] text-white rounded-md hover:bg-[#31ed8f] focus:outline-none focus:ring-2 text-[16px] leading-[24px] font-montserrat-bold"
                        >
                        Submit
                        </button>
                    </div>
                </div>
            </div>
          </main>
        </div>
      );
}
