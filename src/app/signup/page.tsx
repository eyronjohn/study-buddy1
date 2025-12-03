import Bare from '../templates/Bare'
import Logo from '../components/Logo'
import FormSignup from '../components/forms/FormSignUp'
import Image from "next/image";

export default function Signup() {
  return (
    <Bare>
      <div className="min-h-screen w-full flex">
        <div className="w-2/4 bg-white flex flex-col text-center">
          {/* <Logo /> */}
          <div className="p-24 flex flex-col gap-4">
            <h1 className="text-4xl font-semibold text-center flex">Sign up</h1>
            <p className="text-start text-lg">
              Register to experience a lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Maecenas quis lorem elit.
            </p>

            {/* Form */}
            <FormSignup />
          </div>
        </div>

        <div className="w-2/4 bg-gradient-to-r from-[#224e3a] to-[#31694E]">
        <div className="flex flex-col p-16 gap-8 text-white">
                  <h1 className="text-5xl">Lorem ipsum dolor sit amet, consectetur</h1>
                  <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis lorem elit. Aenean finibus nulla sit amet lacus elementum commodo.</p>
                  <div className="flex gap-4">
                    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmixgImUBkKOcVYWB9cmExu9B4X2lgp11nYQ&s" alt="" width={64} height={14} className="border-2 border-white rounded-full"/>
                    <div className="flex flex-col">
                      <p className="text-lg">Wonyoung</p>
                      <p className="text-md">Senior Student at Harvard</p>
                    </div>
                  </div>
                </div>
        </div>
      </div>
    </Bare>
  )
}
