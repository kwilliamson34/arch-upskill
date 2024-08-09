import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About me",
};

export default function AboutPage() {
  return (
    <>
      <section>
        <h2>Intro</h2>
        <p>
          What gives me purpose in my work? Enablement, efficiency, impact. I
          have 10+ years of experience as an engineer working across the stack,
          and 3+ years providing technical leadership and unlocking high
          performance in delivery teams. I have started teams from scratch,
          built strong cross-functional partnerships, mentored other engineers,
          and delivered large features at high velocity and high quality. I am
          passionate about the user experience. My teammates recognize me for
          inspiring and upholding high standards in solution design, code
          quality, and end-to-end ownership.
        </p>
        <p>
          I started my software engineering journey with an Intro to CS class at{" "}
          <a href="https://compsci.sites.tjhsst.edu/">TJHSST</a>. I&apos;ve
          interned in a server basement and become briefly addicted to 5-Hour
          Energy. I fumbled through building an immersive{" "}
          <a
            href="https://www.mechdyne.com/av-vr-solutions/blog/direct-view-led-technology-the-roi-of-led-displays/"
            target="_blank"
          >
            VR experience
          </a>{" "}
          with Unity! I got my degrees in Computer Science and Computer
          Engineering at UVA, got my first real job, and built a{" "}
          <a
            href="https://medium.com/@miladd3/avoid-using-apache-cordova-if-you-can-6d1654bba5bd"
            target="_blank"
          >
            hybrid app
          </a>{" "}
          back when they were cool. Thus I was launched as a web app engineer,
          evolving over many different projects and teams to become the
          tech lead I am today.
        </p>
        <p>
          Besides software, I care about gardening and{" "}
          <a
            href="https://www.earthday.org/actions/call-for-green-spaces"
            target="_blank"
          >
            green roofs
          </a>
          , backpacking in national parks, scuba diving, watercolor painting,
          Orange Theory Fitness, coffee, and the DMV food scene.
        </p>
      </section>
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
