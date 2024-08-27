import { Metadata } from "next";
import JokeWrapper from "../../components/joke";
import { siteTitle } from "../constants";

export const metadata: Metadata = {
  title: `${siteTitle} - About`,
};

export default function AboutPage() {
  return (
    <>
      <section>
        <h2>Intro</h2>

        <p>
          What gives me purpose in my work? Enablement, efficiency, impact. I
          have 10+ years of experience as an engineer working across the stack,
          and 3+ years providing technical leadership at the squad and group
          level. I have built and mentored high-performing engineering teams,
          invested in strong cross-functional partnerships, and delivered
          scalable high-quality solutions. I am passionate about the user
          experience. My teammates recognize me for inspiring and upholding high
          standards in solution design, code quality, and end-to-end ownership.
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
          back when they were cool. Thus I was launched as a web app engineer.
          Through my time at Sapient (almost 7 years) and Storyblocks (almost 4
          years), I have been lucky enough to work on 5+ distinct web products
          and 7+ distinct teams. I have formed, stormed, normed, and performed,
          and it&apos;s taught me so much about how to work with different kinds
          of people, towards different objectives.
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
          Orange Theory Fitness, coffee, and the DMV food scene. See more on{" "}
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
            <strong>Refuse to be blocked.</strong> When I don&apos;t have the
            right obvious answer, I will commit, and contribute to a culture of
            committing, to a course of action to move forward. I am wary of
            spending too much time to achieve consensus, focusing instead on
            building trusting relationships by doing good work and being
            accountable. &quot;Disagree and commit&quot; isn&apos;t quite right;
            I constructively debate, communicate clearly, document decisions,
            bring people along, and adjust in the face of new information. (
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
            codebase, to the context of my project, to stakeholder clarity, to
            maintaining and expanding my knowledge, and beyond. I am reliable
            and I follow through. I do Big Design Up Front (BDUF) and build
            prototypes to know what I don&apos;t know. I take responsibility for
            mistakes and poor results, and the plan for what to do next. (
            <a
              href="https://medium.com/@marijnscholtens/applying-extreme-ownership-in-software-engineering-1e1ca9235fa9"
              target="_blank"
            >
              read more
            </a>
            )
          </li>
          <li>
            <strong>Low ego.</strong> I&apos;m a low ego engineer, which helps
            me learn and build trusting relationships. I spend time listening
            and considering before asserting. I approach everything with
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
            <strong>Short feedback loops.</strong> Feedback loops should be
            short enough that the value of learning outweighs the cost of being
            wrong. I have the agency to adjust, and contribute to a team culture
            of adjusting, when we learn something new. I build incrementally
            with confidence, rather than over-engineering at the start. (
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
            <strong>Make good tradeoffs.</strong> I am idealistic and practical
            at the same time. I employ creativity, critical thinking, research,
            and data-based decision making to solve problems efficiently. I
            always strive to write clean, maintainable code&mdash; but my goal
            is creating value, not being perfect. I learn more than enough to be
            dangerous, explore multiple options, and avoid &quot;one size fits
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
            &nbsp;(this project); built with NextJS, TypeScript, and Vercel
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
  );
}
