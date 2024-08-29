import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { cache } from "react";

const postsDirectory = path.join(process.cwd(), "posts");

export const getAllPosts = cache((): PostMetadata[] => {
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
    const meta = matterResult.data as PostMetadata;

    // Combine the data with the id
    return {
      ...meta,
      id,
    };
  });
  return allPostsData;
});

export const sortByDate = cache((): PostMetadata[] => {
  const allPostsData = getAllPosts();
  return allPostsData
    .filter((post) => !!post.date)
    .sort((a, b) => {
      if (!!b.date && !a.date) return -1;
      return a.date > b.date ? 1 : -1;
    });
});

export function getNextPrevPost(id: string): {
  next: PostMetadata;
  prev: PostMetadata;
} {
  const sortedPostsData = sortByDate().filter((post) => post.title !== "Blank");
  const index = sortedPostsData.findIndex((post) => post.id === id);
  return {
    next: sortedPostsData[index + 1],
    prev: sortedPostsData[index - 1],
  };
}

export function getUndated(): PostMetadata[] {
  const allPostsData = getAllPosts();
  return allPostsData.filter((post) => !post.date);
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
