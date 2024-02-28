import { s as styles, a as style } from '../index.287a6ed1_yq8vgBkJ.mjs';
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderHead, j as renderSlot, m as maybeRenderHead, h as addAttribute, k as renderComponent } from '../astro_BvCfnv2U.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { jsx, jsxs } from 'preact/jsx-runtime';
import { useState, useEffect } from 'preact/hooks';

const $$Astro$a = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Portfolio template for community, v1 @tonidev"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/icons/astro.svg"><title>${title}</title>${renderHead()}</head> <body class="flex flex-col relative items-center py-0 justify-start  overflow-x-hidden w-full bg-[#F7FAFC]"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/salta/Documents/Portfolio-2.0/mad-main/src/layouts/Layout.astro", void 0);

const MoveButton = ({
  children,
  targetId
}) => {
  const handleClick = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      var offSetTop = targetElement.offsetTop;
      window.scrollTo({
        top: offSetTop - 128,
        behavior: "smooth"
      });
    }
  };
  return jsx("div", {
    onClick: handleClick,
    children
  });
};

const alias = "Tonidev";
const hero_img = "/images/hero_img.webp";
const name = "Hi, I'm Antonio";
const description = "I'm a full-stack developer with a passion for web technologies and a love for design.";
const resume = "/resources/CV.pdf";
const formspreeUrl = "https://formspree.io/f/xeqykrok";
const gitUrl = "https://github.com/EseToni/Portfolio-Template";
const linkedinUrl = "https://www.linkedin.com/in/antonio-fullstackdev/";
const info = {
	alias: alias,
	hero_img: hero_img,
	name: name,
	description: description,
	resume: resume,
	formspreeUrl: formspreeUrl,
	gitUrl: gitUrl,
	linkedinUrl: linkedinUrl
};

const $$Astro$9 = createAstro();
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Navbar;
  return renderTemplate`${maybeRenderHead()}<nav id="navbar" class="flex justify-center py-3 md:py-4 border-b-2 border-[#E5E8EB] fixed top-0 w-full left-0 z-20 navbar md:px-8 xl:px-0 px-10"> <div class="flex fle-row justify-between w-[1080px]"> <div class="md:flex flex-row gap-4 items-center hidden"> <a${addAttribute(`${info.gitUrl }`, "href")} target="_blank"> <svg width="22" height="22" viewBox="0 0 256 256"><path fill="#0D141C" d="M208 112a32.06 32.06 0 0 0-31 24h-25a40.19 40.19 0 0 1-32-16L93.69 84.92A32 32 0 1 0 72 87v82a32 32 0 1 0 16 0v-65l19.2 25.6A56.26 56.26 0 0 0 152 152h25a32 32 0 1 0 31-40M96 200a16 16 0 1 1-16-16a16 16 0 0 1 16 16m112-40a16 16 0 0 1-16-16a16 16 0 1 1 16 16"></path></svg> </a> <a href="https://github.com/EseToni/Portfolio-Template" target="_blank"> <h4 class="font-bold text-[#0D141C] text-xl">${info.alias }</h4> </a> </div> <div class="flex flex-row gap-4 md:gap-8 font-medium w-full md:w-auto text-[#0D141C] justify-center text-base items-center"> ${renderComponent($$result, "MoveButton", MoveButton, { "client:idle": true, "targetId": "hero", "client:component-hydration": "idle", "client:component-path": "C:/Users/salta/Documents/Portfolio-2.0/mad-main/src/components/MoveButton", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate` <button class="rounded-xl px-3 py-1 text-center transition-all hover:shadow-sm hover:scale-105">
Hero</button> ` })} ${renderComponent($$result, "MoveButton", MoveButton, { "client:idle": true, "targetId": "projects", "client:component-hydration": "idle", "client:component-path": "C:/Users/salta/Documents/Portfolio-2.0/mad-main/src/components/MoveButton", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate` <button class="rounded-xl px-3 py-1 text-center transition-all hover:shadow-sm hover:scale-105">
Projects</button> ` })} ${renderComponent($$result, "MoveButton", MoveButton, { "client:idle": true, "targetId": "skills", "client:component-hydration": "idle", "client:component-path": "C:/Users/salta/Documents/Portfolio-2.0/mad-main/src/components/MoveButton", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate` <button class="rounded-xl px-3 py-1 text-center transition-all hover:shadow-sm hover:scale-105">
Skills</button> ` })} ${renderComponent($$result, "MoveButton", MoveButton, { "client:idle": true, "targetId": "contact", "client:component-hydration": "idle", "client:component-path": "C:/Users/salta/Documents/Portfolio-2.0/mad-main/src/components/MoveButton", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate` <button class="bg-[var(--primary-color)] text-[#F7FAFC] rounded-xl px-4 py-2 font-bold text-center transition-all hover:bg-[#F7FAFC] hover:text-[var(--primary-color)] hover:shadow-sm hover:scale-105">
Contact
</button> ` })} </div> </div> </nav>`;
}, "C:/Users/salta/Documents/Portfolio-2.0/mad-main/src/components/Navbar.astro", void 0);

const projects = [
	{
		name: "WoF",
		color_1: "#6C91C2",
		color_2: "#373F47",
		title: "Sharing Platform",
		description: "Innovative pet care platform with secure tech (React, Express), diverse payments (PayPal, credit cards), and personalized data storage.",
		image: "/images/wof_img.webp",
		link: "https://wof-project.vercel.app/"
	},
	{
		name: "Byder",
		color_1: "#dbfba4",
		color_2: "#564d80",
		title: "E-commerce App",
		description: "Find any fashion item in nearby stores with Byder. Redefining the offline shopping experience. Built with React Native.",
		image: "/images/byder_img.webp",
		link: "https://apps.apple.com/es/app/byder-app/id6472192997?l=en-GB"
	},
	{
		name: "NextMenu",
		color_1: "#A9E5BB",
		color_2: "#F7B32B",
		title: "App for Restaurants",
		description: "Simplifying menu creation and management for restaurants. Link menus with QR codes and generate personalized websites. Built with Next.js, Node.js, and MongoDB.",
		image: "/images/nextmenu_img.webp",
		link: "https://github.com/EseToni/NextMenu"
	},
	{
		name: "F1-Stats",
		color_1: "#f52a41",
		color_2: "#2D1E2F",
		title: "Wiki Site",
		description: "Explore F1 at home! Discover drivers, design your driver. Dive into the exciting F1 universe. Built with React, SQL, Node.",
		image: "/images/f1stats_img.webp",
		link: "https://pilotosformula1.vercel.app/"
	},
	{
		name: "Port-Temp",
		color_1: "#bd93f9",
		color_2: "#53a684",
		title: "Portfolio template",
		description: "Showcase your work elegantly and highlight your skills with a responsive design. Elevate your online presence effortlessly!",
		image: "/images/portfolio_template_img.webp",
		link: "https://portfolio-esetoni.vercel.app/"
	},
	{
		name: "R&M Wiki",
		color_1: "#e0e0e0",
		color_2: "#2a2b2e",
		title: "Wiki Site",
		description: "Explore the Rick and Morty universe! Discover characters, locations, and episodes. Built with React, SQL, Node.",
		image: "/images/r&m_wiki_img.webp",
		link: "https://rickandmortywiki.vercel.app/"
	}
];

const ChangeTheme = () => {
  const colors = projects.flatMap(({
    color_1,
    color_2
  }) => [color_1, color_2]);
  const [selectedColor, setSelectedColor] = useState("#6C91C2");
  const handleColor = (color) => {
    const root = document.documentElement;
    root.style.setProperty("--primary-color", color);
    setSelectedColor(color);
  };
  const handleContainerClick = () => {
    if (innerWidth < 640) {
      document.getElementById("colorContainer")?.focus();
    }
    return;
  };
  return jsx("div", {
    onClick: handleContainerClick,
    id: "colorContainer",
    class: `${styles.miniScroll} sm:sshadow-sm group/colors sticky z-30 w-16 sm:w-14   h-28  overflow-y-scroll   transition-all hover:scale-110 sm:hover:shadow-md  left-[82%] sm:left-[90%] top-28 sm:top-32 rounded-xl  flex flex-col items-center pt-2 justify-start gap-2 `,
    children: colors.map((color, index) => jsx("div", {
      onClick: () => handleColor(color),
      class: `w-5 h-5 transition-all ${selectedColor == color && "scale-125 hover:scale-125 rounded-[6px]"} group-hover:shadow-none hover:scale-110 hover:shadow-lg cursor-pointer rounded-[8px] shadow-md text-transparent `,
      style: {
        backgroundColor: color
      },
      children: "."
    }, index))
  });
};

const $$Astro$8 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col items-start w-[360px] md:w-[640px] md:justify-center md:gap-4 lg:w-[960px] md:flex-row gap-6" id="hero"> <picture> <img${addAttribute(info.hero_img , "src")} alt="hero" class="w-[320px] h-[200px] lg:w-[385px] md:w-[420px] md:h-[180px] lg:h-[220px] rounded-lg shadow-lg"> </picture> <div class="flex flex-col justify-center gap-6"> <div class="flex flex-col gap-2"> <h2 class="text-[#0D141C] text-5xl font-black">${info.name}</h2> <p class="text-[#0D141C] text-left text-balance"> ${info.description} </p> </div> <div class="flex flex-row gap-4 font-bold"> <a${addAttribute(`${info.resume}`, "href")}${addAttribute("resume_cv_" + info.alias, "download")}> <button class="group items-start gap-1 bg-[var(--primary-color)] rounded-xl text-[#F7FAFC] py-2 px-4 flex text-center transition-all hover:bg-[#F7FAFC] hover:text-[var(--primary-color)] hover:shadow-md hover:scale-105">
Resume
<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 256 256"><path class=" fill-[#F7FAFC] group-hover:fill-[var(--primary-color)] transition-all" d="M228 152v56a20 20 0 0 1-20 20H48a20 20 0 0 1-20-20v-56a12 12 0 0 1 24 0v52h152v-52a12 12 0 0 1 24 0m-108.49 8.49a12 12 0 0 0 17 0l40-40a12 12 0 0 0-17-17L140 123V40a12 12 0 0 0-24 0v83l-19.51-19.49a12 12 0 0 0-17 17Z"></path></svg> </button> </a> ${renderComponent($$result, "MoveButton", MoveButton, { "client:idle": true, "targetId": "contact", "client:component-hydration": "idle", "client:component-path": "@components/MoveButton", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate` <button class="shadow-md hover:text-[var(--primary-color)] rounded-xl text-[#0D141C] py-2 px-4 flex text-center hover:shadow-sm hover:scale-105 transition-all">Contact</button> ` })} </div> </div> </section>`;
}, "C:/Users/salta/Documents/Portfolio-2.0/mad-main/src/sections/Hero.astro", void 0);

const ProjectCard2 = ({
  image,
  title,
  description,
  link,
  name,
  color_1,
  color_2
}) => {
  return jsxs("article", {
    class: "flex flex-col gap-3 max-w-80 h-72 transition-all ",
    children: [jsx("picture", {
      class: `relative h-44 w-80 group/picture cursor-pointer transition-all hover:scale-105 hover:shadow-md rounded-xl`,
      children: jsxs("a", {
        href: link,
        target: "_blank",
        children: [jsxs("div", {
          class: `absolute overflow-hidden rounded-xl `,
          children: [jsx("h3", {
            class: `font-bold text-3xl  transition-all absolute text-white opacity-95 z-10 top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 group-hover/picture:opacity-0`,
            children: name
          }), jsx("div", {
            style: {
              backgroundColor: color_1,
              clipPath: "polygon(0 0, 0 100%, 100% 0)"
            },
            class: `h-44 w-80 group-hover/picture:-translate-y-28 group-hover/picture:-translate-x-28 group-hover/picture:-translate-full  absolute opacity-90 rounded-xl transition-all `
          }), jsx("div", {
            style: {
              backgroundColor: color_2,
              clipPath: "polygon(100% 0, 0 100%, 100% 100%)"
            },
            class: `bg-[${color_2}] h-44 w-80 group-hover/picture:translate-y-28 group-hover/picture:translate-x-28  opacity-80 rounded-xl transition-all  `
          })]
        }), jsx("img", {
          src: image,
          alt: title,
          class: "h-44 w-80 rounded-xl"
        })]
      })
    }), jsxs("div", {
      children: [jsx("h3", {
        class: "font-bold text-[#0D141C]",
        children: title
      }), jsx("p", {
        class: "text-[#4F7396] text-sm text-wrap",
        children: description
      })]
    })]
  });
};

const PagesArrow = ({
  pages,
  currentPage,
  setCurrentPage
}) => {
  const handlePage = (page_s) => {
    setCurrentPage(page_s);
    if (pages === projects.length) {
      const root = document.documentElement;
      root.style.setProperty("--primary-color", projects[page_s - 1].color_2);
    }
  };
  return jsxs("div", {
    class: "flex w-full justify-center flex-row gap-10   lg:hidden ",
    children: [jsx("button", {
      class: "shadow-lg rounded-xl py-1 pl-1 pr-3 disabled:opacity-65 disabled:shadow-sm",
      disabled: 0 == currentPage - 1,
      onClick: () => handlePage(currentPage - 1),
      children: jsx("svg", {
        width: "44",
        height: "44",
        viewBox: "0 0 256 256",
        children: jsx("path", {
          class: `${pages === projects.length ? "fill-[var(--primary-color)]" : "fill-[#0D141C]"}`,
          d: "M224 128a8 8 0 0 1-8 8H59.31l58.35 58.34a8 8 0 0 1-11.32 11.32l-72-72a8 8 0 0 1 0-11.32l72-72a8 8 0 0 1 11.32 11.32L59.31 120H216a8 8 0 0 1 8 8"
        })
      })
    }), jsx("button", {
      class: "shadow-lg rounded-xl py-1 pl-3 pr-1 disabled:opacity-65 disabled:shadow-sm",
      disabled: pages + 1 == currentPage + 1,
      onClick: () => handlePage(currentPage + 1),
      children: jsx("svg", {
        width: "44",
        height: "44",
        viewBox: "0 0 256 256",
        children: jsx("path", {
          class: `${pages === projects.length ? "fill-[var(--primary-color)]" : "fill-[#0D141C]"}`,
          d: "m221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32"
        })
      })
    })]
  });
};

const Pages = ({
  pages,
  currentPage,
  setCurrentPage
}) => {
  return jsxs("div", {
    children: [jsx("div", {
      class: "hidden lg:flex flex-row justify-center gap-4",
      children: Array.from({
        length: pages
      }, (_, i) => jsx("button", {
        onClick: () => setCurrentPage(i + 1),
        class: `
					transition-all 
                        ${currentPage === i + 1 ? `bg-[var(--primary-color)] scale-125 opacity-95 rounded-lg ` : "bg-[#4F7396] opacity-35 scale-90	"}
                     w-5 h-5 rounded-full`
      }))
    }), jsx(PagesArrow, {
      currentPage,
      pages,
      setCurrentPage
    })]
  });
};

const DisplayProjectCards = () => {
  const [prevPage, setPrevPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [changingPage, setChangingPage] = useState(false);
  const [items, setItems] = useState(projects);
  const [itemsPerPage, setItemPerPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const calculateItemsPerPage = () => {
    const width = window.innerWidth;
    if (width > 1024) {
      return 3;
    } else if (width > 768) {
      return 2;
    } else {
      return 1;
    }
  };
  useEffect(() => {
    setItemPerPage(calculateItemsPerPage());
  }, []);
  useEffect(() => {
    setItems(projects.slice(indexOfFirstItem, indexOfLastItem));
  }, [currentPage, itemsPerPage]);
  return jsxs("div", {
    class: "flex flex-col relative gap-4 lg:gap-8 items-center ",
    children: [jsx("div", {
      class: `flex flex-row gap-8 transition-all ${changingPage ? currentPage > prevPage ? style.translate_x_right : style.translate_x_left : ""}`,
      children: items.slice(indexOfFirstItem, indexOfLastItem).map((project, index) => {
        return jsx(ProjectCard2, {
          title: project.title,
          description: project.description,
          image: project.image,
          name: project.name,
          color_1: project.color_1,
          color_2: project.color_2,
          link: project.link
        }, index);
      })
    }), jsx(Pages, {
      pages: Math.ceil(projects.length / itemsPerPage),
      currentPage,
      setCurrentPage: (page) => {
        if (currentPage === page)
          return;
        setPrevPage(currentPage);
        setCurrentPage(page);
        setChangingPage(true);
        setTimeout(() => {
          setChangingPage(false);
        }, 500);
      }
    })]
  });
};

const $$Astro$7 = createAstro();
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Projects;
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col mt-10 gap-10" id="projects"> <h3 class="text-2xl font-bold text-[#0D141C] ">Featured Projects</h3> ${renderComponent($$result, "DisplayProjectCards", DisplayProjectCards, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@components/DisplayProjectCards", "client:component-export": "default" })} </section>`;
}, "C:/Users/salta/Documents/Portfolio-2.0/mad-main/src/sections/Projects.astro", void 0);

const skills = [
	{
		name: "JavaScript",
		icon: "/icons/javascript.svg",
		description: "Dynamic language for web development."
	},
	{
		name: "TypeScript",
		icon: "/icons/typescript.svg",
		description: "Typed superset enhancing JS."
	},
	{
		name: "HTML/CSS",
		icon: "/icons/html.svg",
		description: "Essential web markup and styling."
	},
	{
		name: "Python",
		icon: "/icons/python.svg",
		description: "Readability and versatility in scripting."
	},
	{
		name: "Php",
		icon: "/icons/php.svg",
		description: "Server-side scripting for web."
	},
	{
		name: "C",
		icon: "/icons/c.svg",
		description: "Foundational programming language."
	},
	{
		name: "React",
		icon: "/icons/react.svg",
		description: "Facebook's UI library for web apps."
	},
	{
		name: "Astro",
		icon: "/icons/astro.svg",
		description: "Modern static site generator."
	},
	{
		name: "NextJs",
		icon: "/icons/nextjs.svg",
		description: "React-based web application framework."
	},
	{
		name: "Laravel",
		icon: "/icons/laravel.svg",
		description: "Elegant PHP framework for web apps."
	},
	{
		name: "NodeJs",
		icon: "/icons/nodejs.svg",
		description: "JavaScript runtime for server-side development."
	},
	{
		name: "Express",
		icon: "/icons/express.svg",
		description: "Minimal and flexible Node.js web framework."
	},
	{
		name: "NestJs",
		icon: "/icons/nestjs.svg",
		description: "Fast and minimalist web framework for Node.js."
	},
	{
		name: "WebSockets",
		icon: "/icons/websockets.svg",
		description: "Cross-platform real-time communication."
	},
	{
		name: "Moongose",
		icon: "/icons/orm.svg",
		description: "Elegant MongoDB object modeling tool."
	},
	{
		name: "Sequelize",
		icon: "/icons/orm.svg",
		description: "Promise-based Node.js ORM for databases."
	},
	{
		name: "Jest",
		icon: "/icons/jest.svg",
		description: "Delightful JavaScript testing framework."
	},
	{
		name: "Redux",
		icon: "/icons/redux.svg",
		description: "Predictable state container for JS apps."
	},
	{
		name: "Tailwind",
		icon: "/icons/tailwind.svg",
		description: "Utility-first CSS framework for UI."
	},
	{
		name: "Bootstrap",
		icon: "/icons/bootstrap.svg",
		description: "Front-end framework for responsive design."
	},
	{
		name: "Sass",
		icon: "/icons/sass.svg",
		description: "Stylesheet language extending CSS."
	},
	{
		name: "SQL",
		icon: "/icons/sql.svg",
		description: "Structured Query Language for databases."
	},
	{
		name: "MongoDB",
		icon: "/icons/mongodb.svg",
		description: "NoSQL database for high performance."
	},
	{
		name: "Firebase",
		icon: "/icons/firebase.svg",
		description: "Google's platform for app development."
	},
	{
		name: "Docker",
		icon: "/icons/docker.svg",
		description: "Open-source platform for container deployment."
	},
	{
		name: "Aws",
		icon: "/icons/aws.svg",
		description: "Amazon's on-demand cloud computing services."
	}
];

const SkillCard = ({
  name,
  icon,
  description
}) => {
  return jsxs("article", {
    class: "flex  flex-col gap-2 border-solid  border-2 border-[#E5E8EB] rounded-xl p-4 w-[150px] h-36 md:w-44 md:h-36 overflow-hidden transition-all hover:border-transparent hover:scale-105 hover:shadow-sm cursor-default",
    children: [jsx("img", {
      src: icon,
      alt: name,
      class: "w-8 h-8"
    }), jsxs("div", {
      class: "flex flex-col gap-0",
      children: [jsx("h3", {
        class: "font-bold text-[#0D141C]",
        children: name
      }), jsx("p", {
        class: "text-[#4F7396] text-xs text-wrap font-normal",
        children: description
      })]
    })]
  });
};

const DisplaySkills = () => {
  const [prevPage, setPrevPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [changingPage, setChangingPage] = useState(false);
  const [items, setItems] = useState(skills);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const calculateItemsPerPage = () => {
    const width = window.innerWidth;
    if (width > 1024) {
      return 10;
    } else if (width < 1024 && width > 768) {
      return 6;
    } else {
      return 4;
    }
  };
  useEffect(() => {
    setItemsPerPage(calculateItemsPerPage());
  }, []);
  useEffect(() => {
    setItems(skills.slice(indexOfFirstItem, indexOfLastItem));
  }, [currentPage, itemsPerPage]);
  return jsxs("div", {
    class: `flex flex-col relative gap-10  `,
    children: [jsx("div", {
      class: `grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 grid-rows-2 gap-x-4 gap-4 md:gap-x-8 md:gap-y-6 transition-all ${changingPage ? currentPage > prevPage ? style.translate_x_right : style.translate_x_left : ""}`,
      children: items.map((skill) => jsx(SkillCard, {
        name: skill.name,
        icon: skill.icon,
        description: skill.description
      }))
    }), jsx(Pages, {
      pages: Math.ceil(skills.length / itemsPerPage),
      currentPage,
      setCurrentPage: (page) => {
        setPrevPage(currentPage);
        setCurrentPage(page);
        setChangingPage(true);
        setTimeout(() => {
          setChangingPage(false);
        }, 500);
      }
    })]
  });
};

const $$Astro$6 = createAstro();
const $$Skills = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Skills;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-6 items-center" id="skills"> <div class="flex flex-row justify-start items-start w-full"> <h3 class="text-2xl font-bold text-[#0D141C]">Skills</h3> </div> ${renderComponent($$result, "DisplaySkills", DisplaySkills, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@components/DisplaySkills.tsx", "client:component-export": "default" })} </div>`;
}, "C:/Users/salta/Documents/Portfolio-2.0/mad-main/src/sections/Skills.astro", void 0);

const experiencie = [
	{
		title: "FullStack Developer",
		description: "I focus on creating and improving landing pages, dashboards, and online applications. My tasks include designing frontend interfaces, maintaining and optimizing websites, and addressing critical issues to enhance web page performance.",
		location: "Remote",
		date: "2022 - Present",
		icon: "/icons/fullstack.svg"
	},
	{
		title: "HVAC Tech",
		description: "Enhanced my problem-solving, teamwork, and project management skills. It instilled a self-directed learning mindset, forming a strong foundation for my transition into programming",
		location: "Sevilla, Spain",
		date: "2019 - 2021",
		icon: "/icons/hvac.svg"
	}
];

const $$Astro$5 = createAstro();
const $$ExperiencieCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ExperiencieCard;
  const { title, description, icon, date, location } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="flex flex-row gap-6 items-start cursor-default w-[340px] md:w-[480px] lg:w-auto   "> <picture class="w-16 h-16 bg-[#e8edf2a0] hidden  relative rounded-xl lg:flex items-center justify-center shadow-md p-1"> <img${addAttribute(icon, "src")}${addAttribute(title, "alt")}> </picture> <div class="flex flex-col gap-1 text-[#4F7396] text-wrap w-[880px]"> <h2 class="font-semibold text-lg  text-[#0D141C]  ">${title}</h2> <p class="font-normal text-wrap ">${description}</p> <div class="flex flex-row gap-4"> <time>${date}</time> <span>${location}</span> </div> </div> </article>`;
}, "C:/Users/salta/Documents/Portfolio-2.0/mad-main/src/components/ExperiencieCard.astro", void 0);

const $$Astro$4 = createAstro();
const $$Experiencie = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Experiencie;
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col gap-10"> <h3 class="text-2xl font-bold text-[#0D141C]">Experiencie</h3> <div class="flex flex-col gap-8"> ${experiencie.map((experiencie2) => renderTemplate`${renderComponent($$result, "ExperiencieCard", $$ExperiencieCard, { "location": experiencie2.location, "title": experiencie2.title, "date": experiencie2.date, "description": experiencie2.description, "icon": experiencie2.icon })}`)} </div> </section>`;
}, "C:/Users/salta/Documents/Portfolio-2.0/mad-main/src/sections/Experiencie.astro", void 0);

const $$Astro$3 = createAstro();
const $$SocialMedia = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SocialMedia;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-row gap-0"> <!-- 
		social media icons <a><svg/></a>
		 media links href a tag = "\${INFO.gitUrl}"  
	--> <a class="rounded-xl px-2 py-1 transition-all hover:scale-105 hover:shadow-md"${addAttribute(`${info.gitUrl }`, "href")} target="_blank"> <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 256 256"><path fill="var(--primary-color)" d="M212.62 75.17A63.7 63.7 0 0 0 206.39 26A12 12 0 0 0 196 20a63.71 63.71 0 0 0-50 24h-20a63.71 63.71 0 0 0-50-24a12 12 0 0 0-10.39 6a63.7 63.7 0 0 0-6.23 49.17A61.5 61.5 0 0 0 52 104v8a60.1 60.1 0 0 0 45.76 58.28A43.66 43.66 0 0 0 92 192v4H76a20 20 0 0 1-20-20a44.05 44.05 0 0 0-44-44a12 12 0 0 0 0 24a20 20 0 0 1 20 20a44.05 44.05 0 0 0 44 44h16v12a12 12 0 0 0 24 0v-40a20 20 0 0 1 40 0v40a12 12 0 0 0 24 0v-40a43.66 43.66 0 0 0-5.76-21.72A60.1 60.1 0 0 0 220 112v-8a61.5 61.5 0 0 0-7.38-28.83M196 112a36 36 0 0 1-36 36h-48a36 36 0 0 1-36-36v-8a37.87 37.87 0 0 1 6.13-20.12a11.65 11.65 0 0 0 1.58-11.49a39.9 39.9 0 0 1-.4-27.72a39.87 39.87 0 0 1 26.41 17.8a12 12 0 0 0 10.1 5.53h32.35a12 12 0 0 0 10.11-5.53a39.84 39.84 0 0 1 26.41-17.8a39.9 39.9 0 0 1-.4 27.72a12 12 0 0 0 1.61 11.53A37.85 37.85 0 0 1 196 104Z"></path></svg> </a> <a class="rounded-xl px-2 py-1 transition-all hover:scale-105 hover:shadow-md"${addAttribute(`${info.linkedinUrl }`, "href")} target="_blank"> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"> <circle cx="4" cy="4" r="2" fill="var(--primary-color)" fill-opacity="1"></circle> <g fill="none" stroke="var(--primary-color)" stroke-linecap="round" stroke-width="4"> <path d="M4 10V20"></path> <path d="M10 10V20"></path> <path d="M10 15C10 12.2386 12.2386 10 15 10C17.7614 10 20 12.2386 20 15V20"></path> </g> </svg> </a> </div>`;
}, "C:/Users/salta/Documents/Portfolio-2.0/mad-main/src/components/SocialMedia.astro", void 0);

const $$Astro$2 = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col gap-10" id="contact"> <section class="flex flex-col gap-10"> <h3 class="text-2xl font-bold text-[#0D141C]">Contact</h3> <div class="flex flex-col gap-20 lg:grid lg:grid-cols-2 lg:gap-x-10 md:h-[295px]"> <form id="contactForm"${addAttribute(`${info.formspreeUrl }`, "action")} method="POST" class="flex flex-col gap-6 font-medium w-[340px] md:w-[480px] text-[#4F7396]"> <div class="flex flex-col md:flex-row md:gap-4"> <div class="flex flex-col gap-2"> <label for="name" class="text-[#0D141C]">Name</label> <input type="text" id="name" name="name" placeholder="Your name" autocomplete="additional-name" class="px-2 py-3 rounded-xl font-base bg-transparent border-2 transition-all focus:border-transparent focus:shadow-md focus:scale-105 border-[#D1DBE8] md:w-[233px] focus:outline-none" required> </div> <div class="flex flex-col gap-2"> <label for="email" class="text-[#0D141C]">Email</label> <input type="email" id="email" name="email" placeholder="Your email" class="px-2 py-3 rounded-xl font-base bg-transparent focus:scale-105 transition-all focus:border-transparent focus:shadow-md border-2 border-[#D1DBE8] md:w-[233px] focus:outline-none" required> </div> </div> <div class="flex flex-col"> <!-- <label for="message">Message</label> --> <textarea id="message" name="message" placeholder="Write your message here" class="resize-none px-2 py-3 font-base transition-all focus:border-transparent focus:shadow-md rounded-xl bg-transparent focus:scale-105 border-2 border-[#D1DBE8] h-32 focus:outline-none" required></textarea> </div> <button type="submit" class="px-3 py-3 text-[#F7FAFC] bg-[var(--primary-color)] rounded-xl font-bold transition-all hover:scale-105 hover:shadow-md hover:text-[var(--primary-color)] hover:bg-[#F7FAFC] hover:text-lg">
Send Message
</button> </form> <div class="flex1 flex-col flex justify-end items-end px-6 gap-2"> ${renderComponent($$result, "SocialMedia", $$SocialMedia, {})} ${renderComponent($$result, "MoveButton", MoveButton, { "client:idle": true, "targetId": "start", "client:component-hydration": "idle", "client:component-path": "@components/MoveButton", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate` <button class="bg-transparent shadow-md fill-[#0D141C] text-[#0D141C] hover:fill-[var(--primary-color)] hover:text-[var(--primary-color)] items-center font-bold rounded-xl gap-0 py-1 px-4 text-base flex text-center hover:shadow-sm hover:bg-[#F7FAFC] hover:scale-105 transition-all"> <svg width="36" height="36" viewBox="0 0 24 24"> <path d="m11 8.8l-2.9 2.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.6-4.6q.3-.3.7-.3t.7.3l4.6 4.6q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275L13 8.8V17q0 .425-.288.713T12 18q-.425 0-.712-.288T11 17z"></path> </svg> <span class="mr-2">Back to top</span> </button> ` })} </div> </div> </section> </section> `;
}, "C:/Users/salta/Documents/Portfolio-2.0/mad-main/src/sections/Contact.astro", void 0);

const $$Astro$1 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="flex flex-row border-t-2 w-[360px] lg:w-[960px] border-[var(--primary-color)] lg:border-slate-300"> <div class="flex flex-col px-4 lg:px-0 gap-2 items-center w-full justify-center lg:justify-between lg:flex-row py-4 mb-4"> <div> <p class="text-center lg:text-start text-wrap text-[#0D141C]">
Portfolio template crafted for the community. Feel free to use, modify, or collaborate; pull requests are welcome.
</p> </div> <div class="flex flex-row gap-4 text-lg lg:text-base font-medium text-[var(--primary-color)]"> <a href="https://github.com/EseToni/Portfolio-Template" target="_blank">Repo-Project</a> </div> </div> </footer>`;
}, "C:/Users/salta/Documents/Portfolio-2.0/mad-main/src/sections/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Portfolio" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ChangeTheme", ChangeTheme, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@components/ChangeTheme", "client:component-export": "default" })} ${maybeRenderHead()}<main class="flex flex-col gap-16 overflow-x-hidden  w-full   bg-transparent relative" id="start"> ${renderComponent($$result2, "Navbar", $$Navbar, {})} <div class="w-full flex flex-col items-center"> ${renderComponent($$result2, "Hero", $$Hero, {})} </div> <div class="w-full flex flex-col items-center"> ${renderComponent($$result2, "Projects", $$Projects, {})} </div> <div class="w-full flex flex-col items-center"> ${renderComponent($$result2, "Skills", $$Skills, {})} </div> <div class="w-full flex flex-col items-center"> ${renderComponent($$result2, "Experiencie", $$Experiencie, {})} </div> <div class="w-full flex flex-col items-center"> ${renderComponent($$result2, "Contact", $$Contact, {})} </div> <div class="w-full flex flex-col items-center"> ${renderComponent($$result2, "Footer", $$Footer, {})} </div> </main> ` })}`;
}, "C:/Users/salta/Documents/Portfolio-2.0/mad-main/src/pages/index.astro", void 0);

const $$file = "C:/Users/salta/Documents/Portfolio-2.0/mad-main/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
