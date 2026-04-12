import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (isRegister) {
      const { error } = await supabase.auth.signUp({ email, password });
      setLoading(false);
      if (error) {
        toast.error(error.message);
      } else {
        toast.success("Registration successful! Please check your email to verify your account.");
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      setLoading(false);
      if (error) {
        toast.error(error.message);
      } else {
        toast.success("Welcome back, Admin!");
        navigate("/admin/dashboard");
      }
    }
  };

  return (
    <Layout>
      <section className="section-padding min-h-[60vh] flex items-center">
        <div className="container mx-auto max-w-md">
          <SectionHeader title={isRegister ? "REGISTER" : "ADMIN LOGIN"} subtitle={isRegister ? "Create an admin account" : "Access the CMS dashboard"} />
          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8 space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-accent text-accent-foreground font-heading text-sm uppercase tracking-widest py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {loading ? (isRegister ? "Registering..." : "Signing in...") : (isRegister ? "Register" : "Sign In")}
            </button>
            <button
              type="button"
              onClick={() => setIsRegister(!isRegister)}
              className="w-full text-muted-foreground text-sm hover:text-accent transition-colors"
            >
              {isRegister ? "Already have an account? Sign In" : "Don't have an account? Register"}
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default AdminLogin;
