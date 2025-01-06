"use client"
import Card from "@/components/card";
import Pagination from "@/components/pagenation";
import { IMovie } from "@/types";
import { useEffect, useState } from "react";

export default function Page() {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(4);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [movies, setMovies] = useState<IMovie[]>([
      {
          id: 1,
          image: 'movie1',
          title: 'Movie 1',
          publish_year: 2019
      },
      {
          id: 2,
          image: 'movie2',
          title: 'Movie 2',
          publish_year: 2020
      },
      {
          id: 3,
          image: 'movie3',
          title: 'Movie 3',
          publish_year: 2021
      },
      {
          id: 4,
          image: 'movie4',
          title: 'Movie 4',
          publish_year: 2022
      },
      {
          id: 5,
          image: 'movie5',
          title: 'Movie 5',
          publish_year: 2023
      },
      {
          id: 6,
          image: 'movie6',
          title: 'Movie 6',
          publish_year: 2024
      },
      {
          id: 7,
          image: 'movie7',
          title: 'Movie 7',
          publish_year: 2025
      }
  ]);

  useEffect(() => {
    if(movies != null && movies.length > 0){
      setTotalPages(Math.ceil(movies.length / perPage))
    }
  }, movies)

    return (
      (movies && movies.length > 0) ?
        <div className="grid grid-rows-[1fr_20px] items-center justify-items-center min-h-screen p-6 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[#093545] bg-[url('/images/Vectors.png')] bg-contain bg-no-repeat bg-left-bottom">
            <main className="container flex flex-col flex-top gap-20 row-start-1 items-top justify-top h-full max-w-screen-xl mx-auto">
              <nav className="w-full flex flex-row items-center justify-between py-10 lg:px-20">
                  {/* Logo */}
                  <div className="flex items-center gap-4">
                      <h2 className="text-[32px] leading-[40px] sm:text-[48px] sm:leading-[56px] text-start text-white font-montserrat-600">
                          My Movies
                      </h2>
                      <a href="/dashboard/add">
                          <img src="/images/add_circle_outline_black_24dp.png" alt="Add Movie" className="mt-1.5 sm:mt-2.5 h-6 w-6 sm:h-8 sm:w-8" />
                      </a>
                  </div>
                  
                  {/* Logout Button */}
                  <div>
                      <a href="/" className="bg-transparent text-white py-2 rounded-md text-sm font-montserrat-bold flex items-center gap-2">
                          <span className="hidden sm:block">Logout</span> <img src="/images/logout_black_24dp.png" alt="Logo" className="h-8" />
                      </a>
                  </div>
              </nav>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:px-20">
                  {movies.map((item: IMovie) => (
                      <Card key={item.id} data={item} />
                  ))}
              </div>

              <div className="items-center text-center justify-center lg:px-20">
                  <Pagination pageNumber={pageNumber} totalPages={totalPages} />
              </div>
            </main>
          </div>
        :
          <div className="grid grid-rows-[1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[#093545] bg-[url('/images/Vectors.png')] bg-contain bg-no-repeat bg-left-bottom">
            <main className="flex flex-col flex-center gap-8 row-start-1 items-center justify-center h-full max-w-screen-xl mx-auto">
              <div className="w-full bg-transparent rounded-md text-center">
                <h2 className="text-[32px] leading-[40px] sm:text-[48px] sm:leading-[56px] mb-[40px] text-center text-white font-montserrat-bold">Your movie list is empty</h2>
                <div>
                  <button
                  type="submit"
                  className="w-full sm:w-[202px] h-[56px] py-2 bg-[#2BD17E] text-white rounded-md hover:bg-[#31ed8f] focus:outline-none focus:ring-2 text-[16px] leading-[24px] font-montserrat-bold"
                  >
                  Add a new movie
                  </button>
                </div>
              </div>
            </main>
          </div>
      );
}