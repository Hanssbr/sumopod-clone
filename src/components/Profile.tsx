import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

function Profile() {
  const getCurrentUser = async () => {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error) {
      console.error("Gagal ambil user:", error.message);
      return null;
    }

    console.log("User aktif:", user);
    return user;
  };

  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getCurrentUser();
      if (user) setEmail(user.email ?? null);
    };

    fetchUser();
  }, []);

  return (
    <>
      <div className="flex justify-end gap-2 p-3 bg-white border-l-2 border-gray-100">
        <div className="flex-row flex items-center justify-center gap-2">
          <p className="flex justify-center items-center bg-red-300 w-8 h-8 rounded-full">
            R
          </p>
          <div className="flex flex-col">
            <p className="text-md font-normal">User</p>
            <p className="text-xs text-gray-600">{email}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
