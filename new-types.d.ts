interface Post {
  id: string;
  date: string;
  title: string;
  subtitle: string;
  status: string;
}

interface PostData {
  id: string;
  date: any;
  title: string;
  subtitle: string;
  status: string;
  contentHtml: any;
}
