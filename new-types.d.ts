interface Post {
  id: string;
  title: string;
  subtitle?: string;
  date: string;
  status: "Not Started" | "In Progress" | "Done with Todos" | "Done";
  content: string;
}

type PostMetadata = Omit<Post, "content">;
