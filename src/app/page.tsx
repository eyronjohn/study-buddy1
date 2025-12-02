import Link from "next/link";

export default function Home() {
  return (
    <div className="cl">
      <p>Hello BulSU</p>
      <Link href="/login" className="text-blue-500 underline">Create an Account</Link>
    </div>
  );
}
