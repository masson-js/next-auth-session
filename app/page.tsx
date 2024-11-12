import { getSession } from "@/actions";

export default async function HomePage() {
  const session = await getSession();
  return (
    <div>
      Home
      <p>User ID:</p>
      <span>{session.userId}</span>
    </div>
  );
}
