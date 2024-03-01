import { useState, useEffect } from "preact/hooks"
import skills from "../data/skills.json"
import SkillCard from "./SkillCard"
import Pages from "./atoms/Pages"
import style from "./animation.module.css"
import type { Skill } from "types/skills"

const DisplaySkills = () => {
	const [prevPage, setPrevPage] = useState(0)
	const [currentPage, setCurrentPage] = useState(1)
	const [changingPage, setChangingPage] = useState(false)
	const [items, setItems] = useState(skills as Skill[])
	const [itemsPerPage, setItemsPerPage] = useState(4)
	const indexOfLastItem = currentPage * itemsPerPage
	const indexOfFirstItem = indexOfLastItem - itemsPerPage

	const calculateItemsPerPage = () => {
		const width = window.innerWidth

		if (width > 1024) {
			return 10
		} else if (width < 1024 && width >= 640) {
			return 6
		} else {
			return 4
		}
	}
	useEffect(() => {
		setItemsPerPage(calculateItemsPerPage())
	}, [])

	useEffect(() => {
		setItems(skills.slice(indexOfFirstItem, indexOfLastItem))
	}, [currentPage, itemsPerPage])
	return (
		<div class={`flex flex-col relative gap-10  `}>
			<div
				class={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 grid-rows-2 gap-x-4 gap-4 md:gap-x-8 md:gap-y-6 transition-all ${
					changingPage
						? currentPage > prevPage
							? style.translate_x_right
							: style.translate_x_left
						: ""
				}`}
			>
				{items.map((skill: Skill) => (
					<SkillCard
						name={skill.name}
						icon={skill.icon}
						description={skill.description}
					/>
				))}
			</div>
			<Pages
				pages={Math.ceil(skills.length / itemsPerPage)}
				currentPage={currentPage}
				setCurrentPage={(page: number) => {
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

export default DisplaySkills
