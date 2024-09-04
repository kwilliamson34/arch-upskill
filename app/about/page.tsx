import { Metadata } from "next";
import FunSection from "../../components/fun-section";
import JokeWrapper from "../../components/joke";
import { siteTitle } from "../constants";
import Value from "../../components/value";

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
              <h2>Finding Software Development</h2>

              <p>
                Early on, my best subjects in school were English, Math, and
                Art. Was it an unconventional mix for a future software
                engineer? I&apos;m not sure, but it definitely explains my
                obsession with pixel-perfect execution, good copy writing, and
                fibonacci python-turtle.
              </p>
              <p>
                I&aos;m also fortunate to have incredible female role models in
                my family. My mom and aunt built long careers from electrical
                engineering, while my grandmother was an accomplished painter.
                Their success continuously shows me that creativity + technical
                expertise is unstoppable.
              </p>
              <p>
                I started my software engineering journey with an Intro to CS
                class at <a href="https://compsci.sites.tjhsst.edu/">TJHSST</a>.
                I was drawn in by the art of crafting neat, elegant programs and
                bringing small games to life. After briefly toying with
                Journalism and Chemical Engineering, I applied myself to
                Computer Engineering in undergrad at UVA. I loved Computer
                Graphics and I railed against Embedded Systems. I had a few
                memorable internships: setting up private cloud networks in a
                server basement, where I became briefly addicted to 5-Hour
                Energy, and fumbling through the construction of an immersive{" "}
                <a
                  href="https://www.mechdyne.com/av-vr-solutions/blog/direct-view-led-technology-the-roi-of-led-displays/"
                  target="_blank"
                >
                  VR experience
                </a>{" "}
                with Unity. I got dual degrees in Computer Science and Computer
                Engineering, got my first real job, and built a{" "}
                <a
                  href="https://medium.com/@miladd3/avoid-using-apache-cordova-if-you-can-6d1654bba5bd"
                  target="_blank"
                >
                  hybrid app
                </a>{" "}
                back when they were cool. Thus I was launched as a web app
                engineer.
              </p>
              <p>
                I credit so many peers along the way for feeding my awe and
                appreciation for software development. Most of all, the peers
                that got so excited about applying a new tech to our problem
                that you couldn&apos;t talk them out of it. This is what taught
                me the most. Constant innovation, and infectious enthusiasm, is
                what makes this field so fun!
              </p>
            </section>
            <section>
              <h2>Besides software, I care about...</h2>
              <p>
                <Value title="Backpacking in US national parks" dark={true}>
                  My husband Pan and I have been to 25 parks, and try to get
                  lost in the Yosemite wilderness for a few days each year.
                </Value>
                <Value title="Scuba diving" dark={true}>
                  I&apos;m open water certified and love to travel to dive/dive
                  to travel! From the top-20 dive sites in the world, I have
                  checked off the Galapagos and the Manta Ray Night Dive in
                  Hawaii.
                </Value>
                <Value title="Watercolor painting" dark={true}>
                  While my skills are amateur, I make a mean greeting card.
                </Value>
                <Value title="Gardening" dark={true}>
                  I always have home-grown tomatoes on hand, know the scientific
                  names of my shrubs, and have fond memories of pushing for{" "}
                  <a
                    href="https://www.earthday.org/actions/call-for-green-spaces"
                    target="_blank"
                  >
                    green roof
                  </a>{" "}
                  policy while interning for Earth Day Network.
                </Value>
                <Value title="Orange Theory Fitness" dark={true}>
                  Member of the HIIT squad since 2015. Maybe the only person you
                  know who loves treadmills.
                </Value>
                <Value title="Coffee" dark={true}>
                  I don&apos;t go a day without it, and I love trying new types
                  and processes from all over the world. Recently found a love
                  for fermented beans.
                </Value>
                <Value title="The DMV food scene" dark={true}>
                  There&apos;s always something new to try in DC. If I could
                  only pick one cuisine for the rest of my life, it would be
                  Thai.
                </Value>
              </p>
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
              <Value
                title="Refuse to be blocked"
                readMoreLink="https://gavinadams.com/disagree-and-commit/"
              >
                When I don&apos;t have the right obvious answer, I will commit
                to a course of action to move forward. I know I can learn enough
                to unblock myself (and I do it often). I constructively debate,
                communicate clearly, document decisions, bring people along, and
                adjust in the face of new information.
              </Value>
              <Value
                title="Extreme ownership"
                readMoreLink="https://medium.com/@marijnscholtens/applying-extreme-ownership-in-software-engineering-1e1ca9235fa9"
              >
                I hold my work to a high standard, from code I write, to code I
                review, to the whole codebase, to the context of my project, to
                stakeholder clarity, to maintaining and expanding my knowledge,
                and beyond. I am reliable and I follow through. I do Big Design
                Up Front (BDUF) and build prototypes to know what I don&apos;t
                know. I take responsibility for mistakes and poor results, and
                the plan for what to do next.
              </Value>
              <Value
                title="Low ego"
                readMoreLink="https://hackernoon.com/put-your-ego-aside-humility-and-confidence-in-software-development"
              >
                I&apos;m a low ego engineer, committed to showing over telling,
                which helps me learn and build trusting relationships. I spend
                time listening and considering before asserting. I approach
                everything with curiosity and a desire to learn. I am honest,
                transparent, and authentic. I value the right answer over being
                right.
              </Value>
              <Value
                title="Seek data"
                readMoreLink="https://developertea.com/episodes/e8545729-3383-4d50-a48a-1ce0919c1889"
              >
                Feedback loops should be short enough that the value of learning
                outweighs the cost of being wrong. I have the agency to adjust,
                and contribute to a team culture of adjusting, when we learn
                something new. I build incrementally with confidence, rather
                than over-engineering at the start.
              </Value>
              <Value title="Make good tradeoffs">
                I am idealistic and practical at the same time. I employ
                creativity, critical thinking, research, and data-based decision
                making to solve problems efficiently. I always strive to write
                clean, maintainable code&mdash; but my goal is creating value,
                not being perfect. I learn more than enough to be dangerous,
                explore multiple options, and avoid &quot;one size fits
                all&quot; decision-making.
              </Value>
              <Value title="Autonomy, Mastery, Purpose">
                AMP is an important framework for me. I seek it for myself, and
                I respect and foster it for my peers. As a leader, I invest in
                helping others feel connected to the mission, prepared and
                empowered to take proactive autonomous measures. I thrive in
                collaborative environments that value learning and initiative,
                and where I can contribute meaningfully as an integral part of
                the team.
              </Value>
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
