import { Timeline } from "./ui/Timeline";

const Experience = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const data = [
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
              Back-End: NodeJs, Express, Supabase, MongoDB
            </h6>
            <h6 className="mb-2 text-sm font-normal md:text-lg">
              Tools used: Git, Bitbucket, Monday.com, Stripo, EmailOnAcid,
              Trello
            </h6>
          </div>

          <ul className="list-disc ml-4">
            <li className="mb-2 text-sm font-normal md:text-lg text-neutral-300">
              Refactor and upgrade legacy applications, ensuring they are
              optimized and maintainable.
            </li>
            <li className="mb-2 text-sm font-normal md:text-lg text-neutral-300">
              Develop and integrate APIs using Node.js, Express, and Supabase
              for seamless backend functionality.
            </li>
            <li className="mb-2 text-sm font-normal md:text-lg text-neutral-300">
              Implement client-facing solutions using Next.js, React.js, and
              TypeScript to deliver high-quality user interfaces.
            </li>
            <li className="mb-2 text-sm font-normal md:text-lg text-neutral-300">
              Design and develop responsive email templates in plain HTML for
              email marketing campaigns.
            </li>
            <li className="mb-2 text-sm font-normal md:text-lg text-neutral-300">
              Upload and test email templates on Email on Acid to ensure
              compatibility across email clients.
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
              Tools used: Git, Github, JEST Unit Testing, Postman
            </h6>
          </div>

          <ul className="list-disc ml-4">
            <li className="mb-2 text-sm font-normal md:text-lg text-neutral-300">
              Developed a large-scale project focusing on advanced web
              development using Next.js, TypeScript, Tailwind CSS, JEST and
              Agile scrum methodology best practices. Using Confluence for
              documentation and ClickUp for project management.
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
      <Timeline data={data} />
    </div>
  );
};

export default Experience;
