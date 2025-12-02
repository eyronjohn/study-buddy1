import Link from "next/link";

export default function Login() {
  return (
    <div className="">
      <h1>Login</h1>    
      <p>Create an account today and experience another way of studying!</p>
      <Link href="/" className="underline">Back to Login</Link>
    </div>
  );
}
