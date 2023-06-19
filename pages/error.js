import Link from "next/link";

export default function Error() {
  return (
    <div className="md:flex bg-[#20232a]">
      <h2 style={{ color: "#fff" }}>Github User: {error || "Not Found"}</h2>
      <button>Go back home</button>
      <Link to="/">Go back</Link>
    </div>
  );
}
