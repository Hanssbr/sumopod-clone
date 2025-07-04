import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { supabase } from "../supabaseClient";

type Balance = {
  id: string;
  user_id: string;
  balance: number;
};

const UserBalance = () => {
  const { user } = useAuth();
  const [balance, setBalance] = useState<Balance[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBalance = async () => {
      if (!user) return;

      const { data, error } = await supabase
        .from("balances")
        .select("*")
        .eq("user_id", user.id);
      if (error) {
        console.log("data gagal di ambil : ", error.message);
      } else {
        setBalance(data);
      }

      setLoading(false);
    };
    fetchBalance();
  }, [user]);

  if (loading) return <div>Memuat Balance</div>;

  return (
    <>
      <div>
        <p className="text-sm text-gray-500">Current Credits</p>
        {balance.length > 0 ? (
          balance.map((bal: any) => (
            <p className="text-2xl font-bold" key={bal.id}>
              Rp {(bal.balance ?? 0).toLocaleString("id-ID")}
            </p>
          ))
        ) : (
          <p className="text-2xl font-bold">Rp 0</p>
        )}
      </div>
    </>
  );
};

export default UserBalance;
