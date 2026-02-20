import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCMS } from "@/admin/context/CMSContext";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";
import { uid } from "@/admin/context/initialState";

export function ArticleEditorPage() {
  const { id } = useParams<{ id: string }>();
  const { state, dispatch } = useCMS();
  const navigate = useNavigate();
  const { toast } = useToast();
  const isNew = id === "new";

  const existing = state.articles.find((a) => a.id === id);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("Bunifu Team");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [featuredImage, setFeaturedImage] = useState("");

  useEffect(() => {
    if (existing) {
      setTitle(existing.title);
      setAuthor(existing.author);
      setBody(existing.body);
      setTags(existing.tags);
      setMetaDescription(existing.metaDescription);
      setFeaturedImage(existing.featuredImage || "");
    } else if (!isNew) {
      setTitle("");
      setAuthor("Bunifu Team");
      setBody("");
      setTags("");
      setMetaDescription("");
      setFeaturedImage("");
    }
  }, [existing, isNew]);

  const saveDraft = () => {
    const articleId = isNew ? uid() : id!;
    dispatch({
      type: "ARTICLE_SAVE",
      payload: {
        id: articleId,
        title,
        author,
        status: "Draft",
        datePublished: existing?.datePublished || "",
        body,
        tags,
        metaDescription,
        featuredImage: featuredImage || undefined,
      },
    });
    toast({ title: "Saved as draft" });
    if (isNew) navigate(`/admin/articles/${articleId}`);
  };

  const submitForReview = () => {
    const articleId = isNew ? uid() : id!;
    dispatch({
      type: "ARTICLE_SAVE",
      payload: {
        id: articleId,
        title,
        author,
        status: "In Review",
        datePublished: existing?.datePublished || "",
        body,
        tags,
        metaDescription,
        featuredImage: featuredImage || undefined,
      },
    });
    toast({ title: "Submitted for review" });
    if (isNew) navigate(`/admin/articles/${articleId}`);
  };

  const publish = () => {
    const articleId = isNew ? uid() : id!;
    const now = new Date().toISOString().slice(0, 10);
    dispatch({
      type: "ARTICLE_SAVE",
      payload: {
        id: articleId,
        title,
        author,
        status: "Published",
        datePublished: existing?.datePublished || now,
        body,
        tags,
        metaDescription,
        featuredImage: featuredImage || undefined,
      },
    });
    toast({ title: "Article published" });
    if (isNew) navigate(`/admin/articles/${articleId}`);
  };

  return (
    <div className="space-y-6 max-w-3xl">
      <Button variant="ghost" size="sm" asChild>
        <Link to="/admin/articles" className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to articles
        </Link>
      </Button>

      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="text-lg">{isNew ? "New article" : "Edit article"}</CardTitle>
          <p className="text-sm text-muted-foreground">
            {existing?.status === "Published"
              ? "Editing a published article will set it back to Draft until you re-publish."
              : "Title, featured image, content, and meta."}
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Article title"
              className="rounded-md"
            />
          </div>
          <div className="space-y-2">
            <Label>Featured image URL</Label>
            <Input
              value={featuredImage}
              onChange={(e) => setFeaturedImage(e.target.value)}
              placeholder="https://example.com/image.jpg"
              className="rounded-md"
            />
            {featuredImage && (
              <div className="relative mt-2 aspect-video max-w-md overflow-hidden rounded-md border border-border bg-muted">
                <img src={featuredImage} alt="Featured" className="object-cover w-full h-full" />
              </div>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="body">Content</Label>
            <Textarea
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Write your article content here…"
              rows={12}
              className="rounded-md resize-none"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="tags">Tags</Label>
            <Input
              id="tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="e.g. product, updates"
              className="rounded-md"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="meta">Meta description</Label>
            <Textarea
              id="meta"
              value={metaDescription}
              onChange={(e) => setMetaDescription(e.target.value)}
              placeholder="Short description for SEO"
              rows={2}
              className="rounded-md resize-none"
            />
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button variant="outline" className="rounded-md" onClick={saveDraft}>
              Save draft
            </Button>
            <Button variant="outline" className="rounded-md" onClick={submitForReview}>
              Submit for review
            </Button>
            <Button className="rounded-md" onClick={publish}>
              Publish
            </Button>
            <Button variant="ghost" className="rounded-md" onClick={() => navigate("/admin/articles")}>
              Cancel
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
