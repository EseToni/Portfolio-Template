import { useState, useEffect } from "preact/hooks"
import SKILLS from "@data/SKILLS"
import SkillCard from "./SkillCard"
import Pages from "./atoms/Pages"
import style from "./animation.module.css"

const DisplaySkills = () => {
	const [currentPage, setCurrentPage] = useState(1)
	const [changingPage, setChangingPage] = useState(false)
	const [items, setItems] = useState(SKILLS)
	const itemsPerPage = 10
	const indexOfLastItem = currentPage * itemsPerPage
	const indexOfFirstItem = indexOfLastItem - itemsPerPage

	useEffect(() => {
		setItems(SKILLS.slice(indexOfFirstItem, indexOfLastItem))
	}, [currentPage])
	return (
		<div class={`flex flex-col relative gap-10  `}>
			<div
				class={`grid grid-cols-5 grid-rows-2 gap-x-8 gap-y-6 transition-all ${
					changingPage
						? currentPage == Math.ceil(SKILLS.length / itemsPerPage)
							? style.translate_x_right
							: style.translate_x_left
						: ""
				}`}
			>
				{items.map((skill) => (
					<SkillCard
						name={skill.name}
						icon={skill.icon}
						description={skill.description}
					/>
				))}
			</div>
			<Pages
				pages={Math.ceil(SKILLS.length / itemsPerPage)}
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

export default DisplaySkills
