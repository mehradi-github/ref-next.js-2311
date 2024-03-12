import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { Button } from "@nextui-org/react";
import * as actions from "@/actions";
import Profile from "@/components/profile";
const page = async () => {
  const session = await getServerSession(options);
  if (!session) redirect("/api/auth/signin?callbackUrl=/discuss");

  return (
    <div>
      <div>
        {/* <form action={actions.signIn}>
          <Button type="submit">Sign In</Button>
        </form>
        <form action={actions.signOut}>
          <Button type="submit">Sign Out</Button>
        </form> */}
        {session?.user ? (
          <div>{JSON.stringify(session.user)}</div>
        ) : (
          <div> Sign Out</div>
        )}
      </div>
      <Profile />
    </div>
  );
};
export default page;
