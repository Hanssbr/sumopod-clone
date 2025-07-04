import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { supabase } from "../supabaseClient";

type Transactions = {
  id: string;
  user_id: string;
  amount: number;
  status: string;
};

const UserPayments = () => {
  const { user } = useAuth();
  const [transactions, setTransactions] = useState<Transactions[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      if (!user) return;

      const { data, error } = await supabase
        .from("transactions")
        .select("*")
        .eq("user_id", user.id);

      if (error) {
        console.error("Gagal ambil transaksi:", error.message);
      } else {
        setTransactions(data);
      }

      setLoading(false);
    };

    fetchTransactions();
  }, [user]);

  if (loading) return <div>Memuat transaksi...</div>;

  return (
    <>
      {transactions.map((pay: any) => (
        <>
          <tr className="hover:bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {new Date(pay.created_at).toLocaleDateString("id-ID", {
                day: "2-digit",
                month: "numeric",
                year: "numeric",
              })}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              Rp. {pay.amount}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm">
              {pay.amount} credits
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm ">
              <p className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                {pay.status}
              </p>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
              Invoice
            </td>
          </tr>
        </>
      ))}
    </>
  );
};

export default UserPayments;
