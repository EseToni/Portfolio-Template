interface Project {
	title: string
	description: string
	image: string
	link?: string
	color_1: string
	color_2: string
	name: string
}

const PROJECTS: Project[] = [
	{
		name: "WoF",
		color_1: "#1A80E5",
		color_2: "#1A80E5",
		title: "Sharing Platform",
		description:
			"Innovative pet care platform with secure tech (React, Express), diverse payments (PayPal, credit cards), and personalized data storage.",
		image: "../../images/example.png",
		link: "https://wof-project.vercel.app/",
	},
	{
		name: "Byder",
		color_1: "#1A80E5",
		color_2: "#1A80E5",
		title: "E-commerce App",
		description:
			"Find any fashion item in nearby stores with Byder. Redefining the offline shopping experience. Built with React Native.",
		image: "../../images/example.png",
		link: "https://example.com",
	},
	{
		name: "NextMenu",
		color_1: "#1A80E5",
		color_2: "#1A80E5",
		title: "App for Restaurants",
		description:
			"Simplifying menu creation and management for restaurants. Link menus with QR codes and generate personalized websites. Built with Next.js, Node.js, and MongoDB.",
		image: "../../images/example.png",
		link: "https://example.com",
	},
	{
		name: "F1-Stats",
		color_1: "#1A80E5",
		color_2: "#1A80E5",
		title: "Wiki Site",
		description:
			"Explore F1 at home! Discover drivers, design your driver. Dive into the exciting F1 universe. Built with React, SQL, Node.",
		image: "../../images/example.png",
		link: "https://pilotosformula1.vercel.app/",
	},
	{
		name: "Port-Idea",
		color_1: "#1A80E5",
		color_2: "#1A80E5",
		title: "Portfolio template",
		description:
			"Showcase your work elegantly and highlight your skills with a responsive design. Elevate your online presence effortlessly!",
		image: "../../images/example.png",
		link: "https://portfolio-esetoni.vercel.app/",
	},
    {
        name: "R&M Wiki",
        color_1: "#1A80E5",
        color_2: "#1A80E5",
        title: "Wiki Site",
        description:
            "Explore the Rick and Morty universe! Discover characters, locations, and episodes. Built with React, SQL, Node.",
        image: "../../images/example.png",
    }
]

export default PROJECTS
