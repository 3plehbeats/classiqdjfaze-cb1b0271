import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { supabase } from "@/integrations/supabase/client";
import { LogOut, Plus, Trash2, Save, Edit2 } from "lucide-react";
import { toast } from "sonner";

type ContentItem = {
  id: string;
  page: string;
  section: string;
  title: string | null;
  body: string | null;
  image_url: string | null;
  display_order: number;
};

type HeroSlide = {
  id: string;
  title: string;
  subtitle: string | null;
  image_url: string;
  link: string | null;
  display_order: number;
  is_active: boolean;
};

const PAGES = ["home", "about", "services", "gallery", "contact", "mixtapes", "music", "videos"];

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<"content" | "hero">("content");
  const [content, setContent] = useState<ContentItem[]>([]);
  const [heroSlides, setHeroSlides] = useState<HeroSlide[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<ContentItem & HeroSlide>>({});

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

  useEffect(() => {
    if (user) {
      fetchContent();
      fetchHeroSlides();
    }
  }, [user]);

  const fetchContent = async () => {
    const { data } = await supabase.from("site_content").select("*").order("display_order");
    if (data) setContent(data);
  };

  const fetchHeroSlides = async () => {
    const { data } = await supabase.from("hero_slides").select("*").order("display_order");
    if (data) setHeroSlides(data);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin");
  };

  const saveContent = async () => {
    if (editingId === "new-content") {
      const { error } = await supabase.from("site_content").insert({
        page: formData.page || "home",
        section: formData.section || "main",
        title: formData.title,
        body: formData.body,
        image_url: formData.image_url,
        display_order: formData.display_order || 0,
      });
      if (error) toast.error(error.message);
      else { toast.success("Content added!"); fetchContent(); }
    } else if (editingId === "new-hero") {
      const { error } = await supabase.from("hero_slides").insert({
        title: formData.title || "",
        subtitle: formData.subtitle,
        image_url: formData.image_url || "",
        link: formData.link,
        display_order: formData.display_order || 0,
        is_active: formData.is_active ?? true,
      });
      if (error) toast.error(error.message);
      else { toast.success("Slide added!"); fetchHeroSlides(); }
    } else if (editingId) {
      if (activeTab === "content") {
        const { error } = await supabase.from("site_content").update({
          page: formData.page,
          section: formData.section,
          title: formData.title,
          body: formData.body,
          image_url: formData.image_url,
          display_order: formData.display_order,
        }).eq("id", editingId);
        if (error) toast.error(error.message);
        else { toast.success("Updated!"); fetchContent(); }
      } else {
        const { error } = await supabase.from("hero_slides").update({
          title: formData.title,
          subtitle: formData.subtitle,
          image_url: formData.image_url,
          link: formData.link,
          display_order: formData.display_order,
          is_active: formData.is_active,
        }).eq("id", editingId);
        if (error) toast.error(error.message);
        else { toast.success("Updated!"); fetchHeroSlides(); }
      }
    }
    setEditingId(null);
    setFormData({});
  };

  const deleteItem = async (id: string, table: "site_content" | "hero_slides") => {
    const { error } = await supabase.from(table).delete().eq("id", id);
    if (error) toast.error(error.message);
    else {
      toast.success("Deleted!");
      table === "site_content" ? fetchContent() : fetchHeroSlides();
    }
  };

  if (!user) return null;

  return (
    <Layout>
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <SectionHeader title="ADMIN DASHBOARD" subtitle="Manage your website content" />
            <button onClick={handleLogout} className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
              <LogOut className="w-5 h-5" /> Logout
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mb-6">
            {(["content", "hero"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); setEditingId(null); }}
                className={`font-heading text-sm uppercase tracking-widest px-4 py-2 rounded-lg transition-colors ${activeTab === tab ? "bg-accent text-accent-foreground" : "bg-secondary text-muted-foreground hover:text-foreground"}`}
              >
                {tab === "content" ? "Page Content" : "Hero Slides"}
              </button>
            ))}
          </div>

          {/* Add Button */}
          <button
            onClick={() => {
              setEditingId(activeTab === "content" ? "new-content" : "new-hero");
              setFormData(activeTab === "content" ? { page: "home", section: "main", display_order: 0 } : { title: "", image_url: "", display_order: 0, is_active: true });
            }}
            className="flex items-center gap-2 mb-6 text-accent hover:text-accent/80 transition-colors font-heading text-sm uppercase tracking-widest"
          >
            <Plus className="w-4 h-4" /> Add {activeTab === "content" ? "Content" : "Slide"}
          </button>

          {/* Edit Form */}
          {editingId && (
            <div className="bg-card border border-border rounded-lg p-6 mb-6 space-y-4">
              <h3 className="font-heading text-lg font-semibold">
                {editingId.startsWith("new") ? "Add New" : "Edit"} {activeTab === "content" ? "Content" : "Slide"}
              </h3>
              {activeTab === "content" ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <select value={formData.page || ""} onChange={(e) => setFormData({ ...formData, page: e.target.value })} className="bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground">
                      {PAGES.map((p) => <option key={p} value={p}>{p}</option>)}
                    </select>
                    <input placeholder="Section" value={formData.section || ""} onChange={(e) => setFormData({ ...formData, section: e.target.value })} className="bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground" />
                    <input type="number" placeholder="Order" value={formData.display_order || 0} onChange={(e) => setFormData({ ...formData, display_order: +e.target.value })} className="bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground" />
                  </div>
                  <input placeholder="Title" value={formData.title || ""} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground" />
                  <textarea placeholder="Body" value={formData.body || ""} onChange={(e) => setFormData({ ...formData, body: e.target.value })} rows={4} className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground resize-none" />
                  <input placeholder="Image URL" value={formData.image_url || ""} onChange={(e) => setFormData({ ...formData, image_url: e.target.value })} className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground" />
                </>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input placeholder="Title" value={formData.title || ""} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground" />
                    <input placeholder="Subtitle" value={formData.subtitle || ""} onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })} className="bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground" />
                  </div>
                  <input placeholder="Image URL" value={formData.image_url || ""} onChange={(e) => setFormData({ ...formData, image_url: e.target.value })} className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground" />
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <input placeholder="Link" value={formData.link || ""} onChange={(e) => setFormData({ ...formData, link: e.target.value })} className="bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground" />
                    <input type="number" placeholder="Order" value={formData.display_order || 0} onChange={(e) => setFormData({ ...formData, display_order: +e.target.value })} className="bg-secondary border border-border rounded-lg px-4 py-3 text-sm text-foreground" />
                    <label className="flex items-center gap-2 text-sm text-foreground">
                      <input type="checkbox" checked={formData.is_active ?? true} onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })} className="accent-accent" />
                      Active
                    </label>
                  </div>
                </>
              )}
              <div className="flex gap-3">
                <button onClick={saveContent} className="flex items-center gap-2 bg-accent text-accent-foreground font-heading text-sm uppercase tracking-widest px-6 py-2 rounded-lg hover:opacity-90">
                  <Save className="w-4 h-4" /> Save
                </button>
                <button onClick={() => { setEditingId(null); setFormData({}); }} className="text-muted-foreground hover:text-foreground text-sm">Cancel</button>
              </div>
            </div>
          )}

          {/* Content List */}
          {activeTab === "content" ? (
            <div className="space-y-3">
              {content.length === 0 && <p className="text-muted-foreground text-sm">No content yet. Add your first entry above.</p>}
              {content.map((item) => (
                <div key={item.id} className="bg-card border border-border rounded-lg p-4 flex items-center justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded font-heading uppercase">{item.page}</span>
                      <span className="text-xs text-muted-foreground">{item.section}</span>
                    </div>
                    <p className="text-sm font-semibold truncate">{item.title || "(no title)"}</p>
                    {item.body && <p className="text-xs text-muted-foreground truncate">{item.body}</p>}
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    <button onClick={() => { setEditingId(item.id); setFormData(item); }} className="text-muted-foreground hover:text-accent"><Edit2 className="w-4 h-4" /></button>
                    <button onClick={() => deleteItem(item.id, "site_content")} className="text-muted-foreground hover:text-destructive"><Trash2 className="w-4 h-4" /></button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-3">
              {heroSlides.length === 0 && <p className="text-muted-foreground text-sm">No hero slides yet. Add your first slide above.</p>}
              {heroSlides.map((slide) => (
                <div key={slide.id} className="bg-card border border-border rounded-lg p-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    {slide.image_url && <img src={slide.image_url} alt={slide.title} className="w-16 h-10 rounded object-cover flex-shrink-0" />}
                    <div className="min-w-0">
                      <p className="text-sm font-semibold truncate">{slide.title}</p>
                      {slide.subtitle && <p className="text-xs text-muted-foreground truncate">{slide.subtitle}</p>}
                    </div>
                    {!slide.is_active && <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded">Inactive</span>}
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    <button onClick={() => { setEditingId(slide.id); setFormData(slide); }} className="text-muted-foreground hover:text-accent"><Edit2 className="w-4 h-4" /></button>
                    <button onClick={() => deleteItem(slide.id, "hero_slides")} className="text-muted-foreground hover:text-destructive"><Trash2 className="w-4 h-4" /></button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default AdminDashboard;
