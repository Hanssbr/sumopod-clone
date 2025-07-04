import { useState } from "react";
import Profile from "../components/Profile";
import SideBar from "../components/SideBar";
import axios from "axios";
import { supabase } from "../supabaseClient";

function TopUp() {
  const [amount, setAmount] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleSelectAmount = (value: number) => {
    setAmount(value.toString());
  };

  const handleSubmit = async () => {
    const { data } = await supabase.auth.getSession();
    const token = data.session?.access_token;
    if (!amount || isNaN(Number(amount))) {
      alert("Masukkan jumlah yang valid.");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "https://n8n-atftgzj7guso.bgxy.sumopod.my.id/webhook/coba-xendit",
        {
          amount: Number(amount),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("top up berhasil : ", response.data);
      let invoiceUrl = response.data.invoice_url;
      window.open(invoiceUrl);
    } catch (error) {
      console.log("Gagal top up : ", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="flex min-h-screen ">
        <div>
          <SideBar />
        </div>

        <main className="flex-1 bg-gray-100">
          <Profile />
          <div className="flex justify-center text-center">
            <div className="flex mt-10 w-1/2 justify-center bg-white rounded-xl">
              <div className="py-10">
                <h1 className="text-2xl pb-10">Halaman Top Up</h1>
                <input
                  type="number"
                  className="w-full px-4 py-2 border rounded-lg mb-4 text-center"
                  placeholder="Masukkan jumlah"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />

                <div className="flex flex-col gap-3">
                  {[10000, 50000, 100000].map((value) => (
                    <button
                      key={value}
                      onClick={() => handleSelectAmount(value)}
                      className="py-2 px-4 rounded-xl border-2 border-blue-600 bg-gray-100 hover:bg-blue-100 transition-all"
                    >
                      Rp {value.toLocaleString("ID")}
                    </button>
                  ))}
                </div>
                <div className="pt-10">
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
                  >
                    {loading ? "Mengirim..." : "Top Up"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default TopUp;
