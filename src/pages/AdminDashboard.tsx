import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { supabase } from "@/integrations/supabase/client";
import { LogOut } from "lucide-react";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) navigate("/admin");
      else setUser(session.user);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) navigate("/admin");
      else setUser(session.user);
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin");
  };

  if (!user) return null;

  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <SectionHeader title="ADMIN DASHBOARD" subtitle="Manage your website content" />
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
            >
              <LogOut className="w-5 h-5" /> Logout
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Hero Slides", "Gallery", "Services", "Mixtapes", "Music", "Videos", "About", "Contact Info"].map((section) => (
              <div key={section} className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                <h3 className="font-heading text-lg font-semibold mb-2">{section}</h3>
                <p className="text-muted-foreground text-sm mb-4">Manage {section.toLowerCase()} content</p>
                <span className="text-primary text-xs font-heading uppercase tracking-widest">Coming Soon</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AdminDashboard;
