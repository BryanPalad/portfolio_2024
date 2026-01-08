import { Timeline } from "./ui/Timeline";

const Experience = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;

  const ExperienceData = [
    {
      title: "Full Stack Developer",
      content: (
        <div>
          <h5 className="mb-2 text-sm font-semibold md:text-lg text-white">
            Allied Marketing Group (Los Angeles, California, United States) -
            Remote
          </h5>
          <h6 className="text-neutral-300 italic font-normal mb-6 text-xs md:text-md">
            November 11, 2024 - Present ({currentMonth} months)
          </h6>
          <div className="flex flex-col mb-4">
            <h6 className="mb-2 text-sm font-normal md:text-lg">
              Front-End: Next JS, React JS, Typescript, TailwindCSS
            </h6>
            <h6 className="mb-2 text-sm font-normal md:text-lg">
              Back-End: NodeJs, Fastify, Express, Supabase, MongoDB
            </h6>
            <h6 className="mb-2 text-sm font-normal md:text-lg">
              Tools used: Git, Bitbucket, Monday.com, Stripo, EmailOnAcid,
              Trello, Wordpress, Elementor, Metabase
            </h6>
          </div>

          <ul className="list-disc ml-4">
            <li className="mb-2 text-sm font-normal md:text-lg text-neutral-300">
              Refactored and upgraded legacy applications to improve
              maintainability and performance.
            </li>
            <li className="mb-2 text-sm font-normal md:text-lg text-neutral-300">
              Developed and integrated RESTful APIs using Node.js, Fastify,
              Express, and Supabase.
            </li>
            <li className="mb-2 text-sm font-normal md:text-lg text-neutral-300">
              Implement client-facing solutions using Next.js, React.js, and
              TypeScript to deliver high-quality user interfaces.
            </li>
            <li className="mb-2 text-sm font-normal md:text-lg text-neutral-300">
              Built responsive, high-quality user interfaces with Tailwind CSS
              and Shadcn.
            </li>
            <li className="mb-2 text-sm font-normal md:text-lg text-neutral-300">
              Translated designer-provided email designs into responsive,
              production-ready HTML templates.
            </li>
            <li className="mb-2 text-sm font-normal md:text-lg text-neutral-300">
              Tested and validated email template compatibility across clients
              using Email on Acid.
            </li>
            <li className="mb-2 text-sm font-normal md:text-lg text-neutral-300">
              Collaborated with cross-functional teams using Git, Bitbucket,
              Monday.com, and Trello
            </li>
            <li className="mb-2 text-sm font-normal md:text-lg text-neutral-300">
              Used Metabase to generate and update monthly points statement
              reports for clients
            </li>
            <li className="mb-2 text-sm font-normal md:text-lg text-neutral-300">
              Refactored the company website portfolio using WordPress and
              Elementor, and implemented SEO best practices using Yoast SEO,
              with ongoing performance monitoring via Google Search Console.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Software Engineer",
      content: (
        <div>
          <h5 className="mb-2 text-sm font-semibold md:text-lg text-neutral-100">
            Arxon Solutions. LLC (Roseville, CA, United States) - Part Time
          </h5>
          <h6 className="text-neutral-300 italic font-normal mb-6 text-xs md:text-md">
            August 12, 2024 - April 2025 (8 months)
          </h6>
          <div className="flex flex-col mb-4">
            <h6 className="mb-2 text-sm font-normal md:text-lg">
              Front-End: Next JS, Typescript, TailwindCSS, Material UI, Turbo
              Repo
            </h6>
            <h6 className="mb-2 text-sm font-normal md:text-lg">
              Tools used: Git, Github, JEST Unit Testing, Postman, ClickUp,
              Confluence and Padlet
            </h6>
          </div>

          <ul className="list-disc ml-4">
            <li className="mb-2 text-sm font-normal md:text-lg text-neutral-300">
              Developed large-scale web applications using Next.js, TypeScript,
              and Tailwind CSS.
            </li>
            <li className="mb-2 text-sm font-normal md:text-lg text-neutral-300">
              Applied Agile Scrum methodologies to deliver features in iterative
              sprints.
            </li>
            <li className="mb-2 text-sm font-normal md:text-lg text-neutral-300">
              Wrote and maintained unit tests using Jest to improve code
              reliability.
            </li>
            <li className="mb-2 text-sm font-normal md:text-lg text-neutral-300">
              Managed tasks and documentation using ClickUp, Confluence and
              Padlet.
            </li>
            <li className="mb-2 text-sm font-normal md:text-lg text-neutral-300">
              Collaborated with distributed teams using GitHub and Postman for
              API Testing.
            </li>
            <li className="mb-2 text-sm font-normal md:text-lg text-neutral-300">
              Led the integration of Bunny streaming platform APIs, modifying
              existing .NET Core backend services to support frontend
              functionality.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Software Developer / Front End Engineer",
      content: (
        <div>
          <h5 className="mb-2 text-sm font-semibold md:text-lg text-neutral-100">
            eMandarin Ventures Inc. (Bonifacio Global City, Taguig) - Full Time
          </h5>
          <h6 className="text-neutral-300 italic font-normal mb-6 text-xs md:text-md">
            December 12, 2022 - August 19, 2024 (1yr & 8 months)
          </h6>
          <div className="flex flex-col mb-4">
            <h6 className="mb-2 text-sm font-normal md:text-lg">
              Front-End: HTML, CSS, JavaScript ES6, VueJS, Vuex, UniApp,
              Tailwind CSS
            </h6>
            <h6 className="mb-2 text-sm font-normal md:text-lg">
              Back-End: Java Spring Boot, Spring MVC, MyBatis, Redis, MySQL,
              Thymeleaf
            </h6>
            <h6 className="mb-2 text-sm font-normal md:text-lg">
              Tools used: Git, Gitlab, Npm, HBuilder, VSCode, Intellij Idea,
              DataGrip, Postman, Termius, Figma
            </h6>
          </div>

          <ul className="list-disc ml-4">
            <li className="mb-2 text-sm font-normal md:text-lg text-neutral-300">
              Led the development of the e-Wallet (PayLoro), specializing in
              front-end development with VueJS, Vuex, Axios, UniApp and RESTful
              API integration.
            </li>
            <li className="mb-2 text-sm font-normal md:text-lg text-neutral-300">
              Collaborated with graphic/web designer to conceptualize the
              e-Wallet design using Figma, translating wireframes into a
              user-friendly interfaces.
            </li>
            <li className="mb-2 text-sm font-normal md:text-lg text-neutral-300">
              Maintained and innovated the Payment Gateway system (SaaS) using
              Java Spring Boot, Spring MVC, MyBatis, Redis, Thymeleaf, and
              MySQL, ensuring efficient and effective tracking of business
              transactions.
            </li>
            <li className="mb-2 text-sm font-normal md:text-lg text-neutral-300">
              Developed RESTful APIs with Java Spring Boot, utilizing MyBatis
              for data handling and MySQL for queries. Integrated these APIs
              with the e-Wallet using Axios and tested endpoints with Postman.
            </li>
            <li className="mb-2 text-sm font-normal md:text-lg text-neutral-300">
              Payment API Integration from companies like Coins.ph, Bayad
              Center, NetBank, and StarPay. This involved reviewing API
              documentation, ensuring compatibility, and integrating with our
              payment gateway and e-Wallet (PayLoro) using JWT and OAuth 2.0 for
              secure transactions.
            </li>
            <li className="mb-2 text-sm font-normal md:text-lg text-neutral-300">
              Developed front-end websites, including QRPH, Checkout Counter,
              and PayBills pages, integrating them with our payment gateway and
              e-Wallet using VueJS, Vuex, Axios, and TailwindCSS.
            </li>
          </ul>
        </div>
      ),
    },
  ];
  return (
    <div className="py-20 mt-20" id="experience">
      <h1 className="heading">
        Highlights from My <span className="text-purple">Work Experience</span>
      </h1>
      <Timeline data={ExperienceData} />
    </div>
  );
};

export default Experience;
