// import Link from "next/link";
// import Default from "./templates/Default";
// export default function Home() {
//   return (
//     <>
//     <Default className="">
//       <main className="text-center flex flex-col gap-2 items-center">
//         <h1 className="text-3xl font-semibold">Hello, Guest!</h1>
//         <p className="text-xl">Meet StudyBuddy, your personal study</p>
//         <input type="text" name="" id="" placeholder="How can I help you today?" className="w-120  h-10 border rounded-xl px-4 py-6"/>
//         <Link href="/login" className="w-16 button button-default">Login</Link>
//       </main>
//     </Default>
//     </>
//   );
// }
import Default from './templates/Default'
import FormChat from './components/forms/FormChat'

export default function Home() {
  return (
    <Default className="flex items-center justify-center">
      <div className="flex flex-col gap-10">
        {/** Welcome message */}
        {/* <div className="w-200 mx-auto text-center">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold">Hello, Guest!</h1>
            <div className='max-w-md  mx-auto text-center'>
              <p>
              Welcome to Study Buddy!{' '}
              <a className="underline" href="/register">
                Create your free account
              </a>{' '}
              and upload your notes to get instant AI-powered study help.
            </p>
            </div>
          </div>
          <FormChat />
        </div> */}
        <div className="w-200 mx-auto text-center">
          <FormChat />

        </div>

        {/** Form */}
        {/* <FormChat /> */}
      </div>
    </Default>
  )
}