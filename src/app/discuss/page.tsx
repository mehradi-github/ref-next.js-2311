import { auth } from "@/auth";
import { Button } from "@nextui-org/react";
import * as actions from "@/actions";
const page = async () => {
  const session = await auth();
  return (
    <div>
      <form action={actions.signIn}>
        <Button type="submit">Sign In</Button>
      </form>
    </div>
  );
};
export default page;
