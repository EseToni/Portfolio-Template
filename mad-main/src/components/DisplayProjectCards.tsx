import { useState, useEffect } from "preact/hooks"
import ProjectCard from "@components/ProjectCard"
import PROJECTS from "@data/PROJECTS"
import Pages from "./atoms/Pages"

const DisplayProjectCards = () => {
	const [currentPage, setCurrentPage] = useState(1)
	const [items, setItems] = useState(PROJECTS)
	const itemsPerPage = 3
	const indexOfLastItem = currentPage * itemsPerPage
	const indexOfFirstItem = indexOfLastItem - itemsPerPage

	useEffect(() => {
		setItems(PROJECTS.slice(indexOfFirstItem, indexOfLastItem))
	}, [currentPage])

	return (
		<div class="flex flex-col relative gap-4 items-center">
			<div class="flex flex-row gap-4">
				{items.map((project, index) => (
					<ProjectCard
						key={index}
						title={project.title}
						description={project.description}
						image={project.image}
					/>
				))}
			</div>
			<Pages
				pages={Math.ceil(PROJECTS.length / itemsPerPage)}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
			/>
		</div>
	)
}

export default DisplayProjectCards
