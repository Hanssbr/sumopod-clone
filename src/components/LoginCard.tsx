import { Link, useNavigate } from "react-router-dom";
import Google from "../assets/google.png";
import { supabase } from "../supabaseClient";
import { useState } from "react";

function LoginCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      alert(error.message);
      return;
    }

    if (data.session) {
      navigate("/billing/payments");
    } else {
      alert("Email Belum Di Verifikasi. silahkan cek email kamu");
    }
  };
  return (
    <>
      <div className="min-h-screen py-12 flex justify-center align-center bg-gray-100 text-center">
        <div className="py-20">
          <div className="pt-14 pb-10 px-20 bg-white rounded-xl">
            <h3 className="text-3xl font-bold">Welcome Back</h3>
            <p className="pt-2 pb-5 text-sm font-normal">
              Sign in to your account to continue
            </p>
            <div className="mb-2">
              <div className="flex justify-center items-center gap-1 py-1 px-32 bg-white border-2 rounded-lg border-gray-100 hover:bg-gray-100">
                <img src={Google} alt="google" className="w-7" />
                <p>Sign up with Google</p>
              </div>
              <div className="py-8">
                <div className="text-sm py-2 text-gray-400 border-t-2 border-gray-300">
                  Or continue with email
                </div>
              </div>
              <div className="flex flex-col justify-start items-start">
                <label htmlFor="email">Email Adress</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  type="text"
                  placeholder="youremail@example.com"
                  title="email"
                  className="border-gray-400 border-2 rounded-sm pl-1 pr-64 py-1 focus:ring-blue-500 focus:outline-none focus:border-blue-400"
                />
              </div>
              <div className="flex flex-col justify-start items-start">
                <label htmlFor="password">Password</label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  type="password"
                  placeholder="Password"
                  title="Password"
                  className="border-gray-400 border-2 rounded-sm pl-1 pr-64 py-1 focus:ring-blue-500 focus:outline-none focus:border-blue-400"
                />
              </div>
              <div className="mt-6 bg-blue-600 py-2 rounded-md text-sm font-medium text-white hover:bg-blue-400">
                <button onClick={handleLogin}>Login</button>
              </div>
              <div className="text-sm mt-5">
                <p className="text-gray-600">
                  Don't have an account?{" "}
                  <Link to={"/signup"} className="text-blue-600">
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginCard;
