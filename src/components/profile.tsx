"use client";

import { useSession } from "next-auth/react";

const Profile = () => {
  const session = useSession();

  return session.data?.user ? (
    <div>From Cient: {JSON.stringify(session.data.user)}</div>
  ) : (
    <div>From Cient: Not Sign in</div>
  );
};
export default Profile;
