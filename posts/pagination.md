---
title: "Performant pagination"
date: "2024-09-05"
subtitle: "Solution and benchmarks"
status: "Done"
---

### SWR

- [SWR](https://swr.vercel.app/docs/advanced/performance) has built-in caching and deduplication skips unnecessary network requests, ensuring your app has no unnecessary requests, re-renders or code imported, without any code changes from you. Visible in DevTools Network tab, where cache hits are ~400 bytes, while misses are ~3 kilobytes.
- SWR requires a fetcher as an input (often axios or a fetch polyfill).
- Axios is a bit heavy and I should play with alternatives.
- useMemo is a React Hook that lets you cache the result of a calculation between re-renders. When we use useMemo, we're taking up more memory in order to free up CPU time. It is useful when you want to skip re-rendering if the watched value hasn't changed.
- This is in contrast with useCallback which remembers an existing value (typically a function's definition), between renders. You want to use useMemo to save yourself from rerunning an expensive calculation to generate a new value, and you want to use useCallback to store an existing value.

### Code sample

```typescript
import axios, { AxiosResponse } from "axios";
import React, { memo, useEffect, useState } from "react";
import useSWR from "swr";

import Profile from "./Profile";
import { PageData, ProfileData } from "../types";

const PAGE_SIZE = 6;
const MAX_PAGES = 20; // Limiting fetchable pages for this demo
const SEED = "a"; // Kept constant for this demo; see https://randomuser.me/documentation#seeds

const fetcher = (url: string) =>
  axios.get(url).then((res: AxiosResponse) => res.data);

const MemoizedPage = memo(function Page({
  index,
  backgroundColor,
}: {
  index: number;
  backgroundColor: string;
}): React.ReactElement | null {
  const { data, isLoading, error } = useSWR(
    `https://randomuser.me/api/?page=${index}&results=${PAGE_SIZE}&seed=${SEED}`,
    fetcher
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error && error.message) {
    // The most frequest error seen was 429 Too Many Requests, which resolves after wait.
    // Choosing to log, not render, with more robust error handling needed in the future.
    console.error("error", error);
    return null;
  }

  const page = data as PageData;
  return (
    <div className="flex flex-wrap">
      {page?.results?.map((profileData: ProfileData) => (
        <div
          className="my-2 w-full md:w-1/2 lg:min-h-[50vh] lg:w-1/3"
          key={profileData.id?.value}
        >
          <Profile
            profileData={profileData}
            backgroundColor={backgroundColor}
          />
        </div>
      ))}
    </div>
  );
});

function ProfileGrid({ backgroundColor }: { backgroundColor: string }) {
  const [pageIndex, setPageIndex] = useState(1);
  const pages = [];
  for (let i = 1; i <= pageIndex; i++) {
    pages.push(
      <MemoizedPage index={i} key={i} backgroundColor={backgroundColor} />
    );
  }

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
          document.documentElement.offsetHeight &&
        pageIndex < MAX_PAGES
      ) {
        setPageIndex(pageIndex + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pageIndex]);

  return <div>{pages}</div>;
}

export default ProfileGrid;

```
