import { useState, useEffect } from "preact/hooks"
import ProjectCard from "./ProjectCard"
import Pages from "./atoms/Pages"
import style from "./animation.module.css"
import projects from "@data/projects.json"

const DisplayProjectCards = () => {
	const [prevPage, setPrevPage] = useState(0)
	const [currentPage, setCurrentPage] = useState(1)
	const [changingPage, setChangingPage] = useState(false)
	const [itemsPerPage, setItemPerPage] = useState(1)
	const [items, setItems] = useState(projects.slice(0, itemsPerPage))
	const indexOfLastItem = currentPage * itemsPerPage
	const indexOfFirstItem = indexOfLastItem - itemsPerPage

	const calculateItemsPerPage = () => {
		const width = window.innerWidth

		if (width > 1024) {
			return 3
		} else if (width >= 640) {
			return 2
		} else {
			return 1
		}
	}

	useEffect(() => {
		setItemPerPage(calculateItemsPerPage())
	}, [])

	useEffect(() => {
		setItems(projects.slice(indexOfFirstItem, indexOfLastItem))
	}, [currentPage, itemsPerPage])

	return (
		<div class="flex flex-col relative gap-4 lg:gap-8 items-center ">
			<div
				class={`flex flex-row sm:gap-4 md:gap-6 lg:gap-8 transition-all ${
					changingPage
						? currentPage > prevPage
							? style.translate_x_right
							: style.translate_x_left
						: ""
				}`}
			>
				{items.map((project, index: number) => {
					return (
						<ProjectCard
							key={index}
							title={project.title}
							description={project.description}
							image={project.image}
							name={project.name}
							color_1={project.color_1}
							color_2={project.color_2}
							link={project.link}
						/>
					)
				})}
			</div>
			<Pages
				pages={Math.ceil(projects.length / itemsPerPage)}
				currentPage={currentPage}
				setCurrentPage={(page: number) => {
					if (currentPage === page) return
					setPrevPage(currentPage)
					setCurrentPage(page)
					setChangingPage(true)
					setTimeout(() => {
						setChangingPage(false)
					}, 500)
				}}
			/>
		</div>
	)
}

export default DisplayProjectCards
