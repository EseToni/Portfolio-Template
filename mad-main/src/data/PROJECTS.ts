interface Project {
	title: string
	description: string
	image: string
	link?: string
}

const PROJECTS: Project[] = [
	{
		title: "E-commerce Site",
		description: "A full stack e-commerce website built with React, Redux, Node.js, Express, and MongoDB.",
		image: "../../images/example.png",
		link: "https://example.com",
	},
    {
        title: "Travel Blog",
        description: "A travel blog built with Gatsby, React, and GraphQL. It features a custom CMS for managing blog posts.",
        image: "../../images/example.png",
        link: "https://example.com",
    },
    {
        title: "Recipe App",
        description: "A recipe app built with React and TypeScript. It features a custom API for managing recipes.",
        image: "../../images/example.png",
        link: "https://example.com",
    },    {
        title: "TFEFE",
        description: "A travel blog built with Gatsby, React, and GraphQL. It features a custom CMS for managing blog posts.",
        image: "../../images/example.png",
        link: "https://example.com",
    },
    {
        title: "ReFEFEEASS",
        description: "A recipe app built with React and TypeScript. It features a custom API for managing recipes.",
        image: "../../images/example.png",
        link: "https://example.com",
    }
]

export default PROJECTS
