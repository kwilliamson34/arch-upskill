import { Metadata } from "next";
import FunSection from "../../components/fun-section";
import JokeWrapper from "../../components/joke";
import { siteTitle } from "../constants";

export const metadata: Metadata = {
  title: `${siteTitle} - About`,
};

export default function AboutPage() {
  return (
    <>
      <FunSection
        funChildren={
          <>
            <section>
              <h2>Bio</h2>

              <p>
                What gives me purpose in my work? Enablement, efficiency,
                impact. I have 10+ years of experience as an engineer working
                across the stack, and 3+ years providing technical leadership at
                the squad and group level. I have built and mentored
                high-performing engineering teams, invested in strong
                cross-functional partnerships, and delivered scalable
                high-quality solutions. I am passionate about the user
                experience. My teammates recognize me for inspiring and
                upholding high standards in solution design, code quality, and
                end-to-end ownership.
              </p>
              <p>
                I started my software engineering journey with an Intro to CS
                class at <a href="https://compsci.sites.tjhsst.edu/">TJHSST</a>.
                I&apos;ve interned in a server basement and become briefly
                addicted to 5-Hour Energy. I fumbled through building an
                immersive{" "}
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
                back when they were cool. Thus I was launched as a web app
                engineer. Through my time at Sapient (almost 7 years) and
                Storyblocks (almost 4 years), I have been lucky enough to work
                on 6+ distinct web products and 7+ distinct teams. I have
                formed, stormed, normed, and performed, and it&apos;s taught me
                so much about how to work with different kinds of people,
                towards different objectives.
              </p>
            </section>
            <section>
              <h2>Values</h2>
              <p>
                Besides software, I care about:
                <ul>
                  <li>
                    Backpacking in US national parks. My husband Pan and I have
                    been to 25 parks, and try to get lost in the Yosemite
                    wilderness for a few days each year.
                  </li>
                  <li>
                    Scuba diving. I&apos;m open water certified and love to
                    travel to dive/dive to travel! From the top-20 dive sites in
                    the world, I have checked off the Galapagos and the Manta
                    Ray Night Dive in Hawaii.
                  </li>
                  <li>
                    Watercolor painting. While my skills are amateur, I make a
                    mean greeting card.
                  </li>
                  <li>
                    Gardening and urban greenery. I always have home-grown
                    tomatoes on hand, know the scientific names of my shrubs,
                    and have fond memories of pushing for{" "}
                    <a
                      href="https://www.earthday.org/actions/call-for-green-spaces"
                      target="_blank"
                    >
                      green roof
                    </a>{" "}
                    policy while interning for Earth Day Network.
                  </li>
                  <li>
                    Orange Theory Fitness. Member of the HIIT squad since 2015.
                    Maybe the only person you know who loves treadmills.
                  </li>
                  <li>
                    Coffee. I don&apos;t go a day without it, and I love trying
                    new types and processes from all over the world. Recently
                    found a love for fermented beans.
                  </li>
                  <li>
                    The DMV food scene. There&apos;s always something new to try
                    in DC. If I could only pick one cuisine for the rest of my
                    life, it would be Thai.
                  </li>
                  <li>Lists, apparently.</li>
                </ul>
              </p>
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
                    A decade of shade: automated testing from someone who wants
                    the robots to take it already
                  </a>
                </li>
                <li>
                  Storyblocks tech blog:&nbsp;
                  <a
                    href="https://medium.com/storyblocks-engineering/php-isnt-that-bad-68faa2bc5cca"
                    target="_blank"
                  >
                    PHP isn&apos;t that bad
                  </a>
                </li>
              </ol>
            </section>
            <section>
              <h2>Wanna hear a joke?</h2>
              <JokeWrapper />
            </section>
          </>
        }
        seriousChildren={
          <>
            <section>
              <h2>Bio</h2>

              <p>
                While I’ve focused on different parts of the stack across my
                career, I now have a decade of experience with full-stack
                development and technical leadership skills, and a front-end
                lean.
              </p>
              <p>
                My journey began at Sapient, where I worked on large-scale
                applications for public sector clients for 6+ years. I honed my
                skills in front-end and back-end development. I was promoted
                quickly, with increasing leadership responsibilities, due to my
                ability to break down and deliver complex projects efficiently,
                and my readiness to think critically about business problems,
                strategy, and continuous improvement.
              </p>
              <p>
                Then I joined Storyblocks as a fullstack engineer, and took on
                larger and larger roles, from Lead Engineer to Engineering
                Manager. I led multiple high-impact projects, from creative
                tools and workflows that expanded the Storyblocks platform (e.g.
                canvas-based video editor, AI feature, Adobe plugin) to
                significant product growth initiatives (e.g. plans overhaul,
                stack modernization, core web vitals, SEO). My ability to
                technically direct my teams after layoffs, and be a trusted
                thought partner to Product and Design, was crucial in driving
                these successes.
              </p>
              <p>
                I pride myself on my strong cross-functional collaboration
                skills, and applying an ownership mindset to all stages of
                development. I thrive in environments where I can apply my
                technical expertise and strategic thinking to make innovation
                possible and practical.
              </p>
              <p>
                See more on{" "}
                <a href="https://www.linkedin.com/in/kcww" target="_blank">
                  LinkedIn
                </a>
                .
              </p>
            </section>
            <section>
              <h2>Values</h2>
              <ul>
                <li>
                  <strong>Refuse to be blocked.</strong> When I don&apos;t have
                  the right obvious answer, I will commit to a course of action
                  to move forward. I know I can learn enough to unblock myself
                  (and I do it often). I constructively debate, communicate
                  clearly, document decisions, bring people along, and adjust in
                  the face of new information. (
                  <a
                    href="https://gavinadams.com/disagree-and-commit/"
                    target="_blank"
                  >
                    read more
                  </a>
                  )
                </li>
                <li>
                  <strong>Extreme ownership.</strong> I hold my work to a high
                  standard, from code I write, to code I review, to the whole
                  codebase, to the context of my project, to stakeholder
                  clarity, to maintaining and expanding my knowledge, and
                  beyond. I am reliable and I follow through. I do Big Design Up
                  Front (BDUF) and build prototypes to know what I don&apos;t
                  know. I take responsibility for mistakes and poor results, and
                  the plan for what to do next. (
                  <a
                    href="https://medium.com/@marijnscholtens/applying-extreme-ownership-in-software-engineering-1e1ca9235fa9"
                    target="_blank"
                  >
                    read more
                  </a>
                  )
                </li>
                <li>
                  <strong>Low ego.</strong> I&apos;m a low ego engineer,
                  committed to showing over telling, which helps me learn and
                  build trusting relationships. I spend time listening and
                  considering before asserting. I approach everything with
                  curiosity and a desire to learn. I am honest, transparent, and
                  authentic. I value the right answer over being right. (
                  <a
                    href="https://hackernoon.com/put-your-ego-aside-humility-and-confidence-in-software-development"
                    target="_blank"
                  >
                    read more
                  </a>
                  )
                </li>
                <li>
                  <strong>Short feedback loops.</strong> Feedback loops should
                  be short enough that the value of learning outweighs the cost
                  of being wrong. I have the agency to adjust, and contribute to
                  a team culture of adjusting, when we learn something new. I
                  build incrementally with confidence, rather than
                  over-engineering at the start. (
                  <a
                    href="https://developertea.com/episodes/e8545729-3383-4d50-a48a-1ce0919c1889"
                    target="_blank"
                  >
                    hear more
                  </a>
                  ) (
                  <a
                    href="https://www.tatvasoft.com/outsourcing/2022/05/software-development-principles.html"
                    target="_blank"
                  >
                    read more
                  </a>
                  )
                </li>
                <li>
                  <strong>Make good tradeoffs.</strong> I am idealistic and
                  practical at the same time. I employ creativity, critical
                  thinking, research, and data-based decision making to solve
                  problems efficiently. I always strive to write clean,
                  maintainable code&mdash; but my goal is creating value, not
                  being perfect. I learn more than enough to be dangerous,
                  explore multiple options, and avoid &quot;one size fits
                  all&quot; decision-making.
                </li>
              </ul>
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
                  &nbsp;(this project); built with NextJS, TypeScript, and
                  Vercel
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
                    A decade of shade: automated testing from someone who wants
                    the robots to take it already
                  </a>
                </li>
                <li>
                  Storyblocks tech blog:&nbsp;
                  <a
                    href="https://medium.com/storyblocks-engineering/php-isnt-that-bad-68faa2bc5cca"
                    target="_blank"
                  >
                    PHP isn&apos;t that bad
                  </a>
                </li>
              </ol>
            </section>
          </>
        }
      />
    </>
  );
}
