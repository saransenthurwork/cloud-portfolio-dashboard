import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { login } from "../../../services/authService";
import Button from "../../../components/ui/Button/Button";
import { useAuth } from "../AuthProvider";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const auth = useAuth();
  const navigate = useNavigate();

  async function handleLogin() {
    try {
      setLoading(true);
      setError("");

      const result = await login(email, password);

      auth.login(result.token);

      navigate("/");

    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0B0D10] px-6">
      <div className="w-full max-w-md rounded-[28px] border border-[#232B36] bg-[#12161C] p-10 shadow-2xl">

        <h1 className="text-3xl font-semibold text-white">
          Welcome Back
        </h1>

        <p className="mt-2 text-[#8E96A5]">
          Sign in to Nimbus Cloud
        </p>

        <input
          type="email"
          className="mt-8 h-12 w-full rounded-xl border border-[#232B36] bg-[#171D26] px-4 text-white outline-none transition focus:border-[#5B7FFF]"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="mt-4 h-12 w-full rounded-xl border border-[#232B36] bg-[#171D26] px-4 text-white outline-none transition focus:border-[#5B7FFF]"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <p className="mt-4 text-sm text-red-400">
            {error}
          </p>
        )}

        <div className="mt-8">
          <Button
            className="w-full"
            onClick={handleLogin}
          >
            {loading ? "Signing In..." : "Sign In"}
          </Button>
        </div>

      </div>
    </div>
  );
}