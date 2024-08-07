import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About me",
};

export default function AboutPage() {
  return (
    <>
      <h1>About me</h1>
      <section>
        <h2>Projects</h2>
        <ol>
          <li>
            <a
              href="https://github.com/kwilliamson34/arch-upskill"
              target="_blank"
            >
              Arch Upskill
            </a>
            &nbsp;(this project)
          </li>
        </ol>
      </section>
      <section>
        <h2>Blogs</h2>
        <ol>
          <li>
            Storyblocks tech blog:&nbsp;
            <a
              href="https://medium.com/storyblocks-engineering/a-decade-of-shade-automated-testing-from-someone-who-wants-the-robots-to-take-it-already-60193d470eab"
              target="_blank"
            >
              A decade of shade: automated testing from someone who wants the
              robots to take it already
            </a>
          </li>
          <li>
            Storyblocks tech blog:&nbsp;
            <a
              href="https://medium.com/storyblocks-engineering/php-isnt-that-bad-68faa2bc5cca"
              target="_blank"
            >
              PHP isn’t that bad
            </a>
          </li>
        </ol>
      </section>
    </>
  );
}
