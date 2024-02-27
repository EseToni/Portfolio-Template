import { useState, useEffect } from "preact/hooks"
import ProjectCard from "@components/ProjectCard"
import PROJECTS from "@data/PROJECTS"
import Pages from "./atoms/Pages"
import style from "./animation.module.css"

const DisplayProjectCards = () => {
	const [currentPage, setCurrentPage] = useState(1)
	const [changingPage, setChangingPage] = useState(false)
	const [items, setItems] = useState(PROJECTS)
	const itemsPerPage = 3
	const indexOfLastItem = currentPage * itemsPerPage
	const indexOfFirstItem = indexOfLastItem - itemsPerPage
	
	useEffect(() => {
		setItems(PROJECTS.slice(indexOfFirstItem, indexOfLastItem))
	}, [currentPage])

	return (
		<div class="flex flex-col relative gap-8 ">
			<div
				class={`flex flex-row gap-8 transition-all ${
					changingPage
						? currentPage == Math.ceil(PROJECTS.length / itemsPerPage)
							? style.translate_x_right
							: style.translate_x_left
						: ""
				}`}
			>
				{items.map((project, index) => (
					<ProjectCard
						key={index}
						title={project.title}
						description={project.description}
						image={project.image}
						name={project.name}
						color_1={project.color_1}
						color_2={project.color_2}
					/>
				))}
			</div>
			<Pages
				pages={Math.ceil(PROJECTS.length / itemsPerPage)}
				currentPage={currentPage}
				setCurrentPage={(page: number) => {
					setChangingPage(true)
					setCurrentPage(page)
					setTimeout(() => {
						setChangingPage(false)
					}, 300)
				}}
			/>
		</div>
	)
}

export default DisplayProjectCards
