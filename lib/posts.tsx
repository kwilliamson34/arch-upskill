import fs from "fs";
import matter from "gray-matter";
import path from "path";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPosts(): Post[] {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    const meta = matterResult.data as Post;

    // Combine the data with the id
    return {
      ...meta,
      id,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date > b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostsAsContextParams(): { params: { id: string } }[] {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(id: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
  const meta = matterResult.data as Post;
  const content = matterResult.content;

  return {
    ...meta,
    content,
    id,
  };
}

export async function getContentFromMd(fullPath: string): Promise<any> {
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { content } = matter(fileContents);
  return content;
}
