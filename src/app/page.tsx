"use client"
import { useAppDispatch } from "@/store/hooks";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [error, setError] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();
  const dispatch = useAppDispatch();
  
  const login = (e: any) => {
    e.preventDefault()
    if(email != '' && password != ''){
      router.push("/dashboard");
    }
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[#093545] bg-[url('/images/Vectors.png')] bg-contain bg-no-repeat bg-left-bottom">
      <main className="flex flex-col flex-center gap-8 row-start-2 items-center justify-center h-full w-full">
        <div className="w-full bg-transparent rounded-md max-w-[300px] text-center">
          <h2 className="text-[64px] leading-[80px] mb-6 text-center text-white font-montserrat-bold">Sign In</h2>

          <form>
            {/* Email Field */}
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="off"
                required
                className={`w-full sm:w-[300px] px-4 py-2 border rounded-md mt-2 text-white focus:outline-none focus:ring-2 font-montserrat ${error ? 'bg-white border-[#EB5757]': 'bg-[#224957] border-[#224957]'} focus:bg-white focus:text-[#224957] focus:shadow-none`}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password Field */}
            <div className="mb-4">
              <input
                type="password"
                id="password"
                name="password"
                autoComplete="off"
                required
                className={`w-full sm:w-[300px] px-4 py-2 border rounded-md mt-2 text-white focus:outline-none focus:ring-2 font-montserrat  ${error ? 'bg-white border-[#EB5757]': 'bg-[#224957] border-[#224957]'} focus:bg-white focus:text-[#224957] focus:shadow-none`}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Remember Me Checkbox */}
            <div className="flex justify-center items-center mb-4">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="h-4 w-4 border-gray-300 text-blue-600 rounded appearance-none bg-[#224957] checked:bg-[#224957] checked:border-transparent font-montserrat-bold checked:before:content-['✓'] checked:before:text-white checked:before:block checked:before:text-center"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-white">Remember me</label>
            </div>

            {/* Login Button */}
            <div>
              <button
                type="submit"
                className="w-full sm:w-[300px] py-2 bg-[#2BD17E] text-white rounded-md hover:bg-[#31ed8f] focus:outline-none focus:ring-2 font-montserrat-bold"
                onClick={(e) => login(e)}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>

  );
}
