import Link from "next/link";

export default function Register() {
  return (
    <div className="w-full flex min-h-screen">
      

      {/* Right Section */}
      <div className="w-2/4 bg-gradient-to-r from-[#224e3a] to-[#31694E]">
        <div className="flex flex-col p-16 gap-8 text-white">
          <h1 className="text-5xl">Lorem ipsum dolor sit amet, consectetur</h1>
          <p className="text-xl">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis lorem elit. Aenean finibus nulla sit amet lacus elementum commodo. "</p>
          <div className="flex gap-4">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmixgImUBkKOcVYWB9cmExu9B4X2lgp11nYQ&s  " alt="" className="w-14 h-14 border-2 border-white rounded-full"/>
            <div className="flex flex-col">
              <p className="text-lg">Wonyoung</p>
              <p className="text-md">Senior Student at Harvard</p>
            </div>
          </div>
        </div>
      </div>

      {/* Left Section */}
      <div className="w-2/4 p-24 flex flex-col gap-2">
        <h1 className="text-4xl font-semibold">Create an Account</h1>    
        <p className="text-xl">Register to exprience a lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis lorem elit.</p>
        
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" className="rounded border border-gray-400 px-6 py-2" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input type="password" name="" className="rounded-md border border-gray-400 px-6 py-2" />
        </div>
        <button className="w-full p-2 rounded-md bg-[#007E6E] text-white cursor-pointer">Sign In</button>
        <div className="w-full flex flex-col gap-2 mt-4">
          <button className="w-full p-2 font-semibold tracking-wide rounded-md border border-[#afafaf] flex items-center justify-center gap-2">
                  <img
                    src="https://developers.google.com/identity/images/g-logo.png"
                    alt="Google logo"
                    className="w-5 h-5 mb-2"
                  />
                  Continue with Google
        </button>
        <button className="w-full p-2 font-semibold tracking-wide rounded-lg border border-[#afafaf] flex items-center justify-center gap-2 ">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png"
                    alt="Google logo"
                    className="w-5 h-5"
                  />
                  Continue with Facebook
        </button>
        </div>
        <div className="flex gap-4 justify-center">
          <p>Already have an account?</p>
          <Link href="/login" className="text-[#00512f] cursor-pointer hover:underline">Sign In</Link>
        </div>
        <Link href="/" className="text-blue-500 underline">Back to Home</Link>
      </div>
    </div>
  );
}
