import { useState, useEffect } from "preact/hooks"
import SKILLS from "@data/SKILLS"
import SkillCard from "./SkillCard"
import Pages from "./atoms/Pages"

const DisplaySkills = () => {
	const [currentPage, setCurrentPage] = useState(1)
	const [items, setItems] = useState(SKILLS)
	const itemsPerPage = 10
	const indexOfLastItem = currentPage * itemsPerPage
	const indexOfFirstItem = indexOfLastItem - itemsPerPage

	useEffect(() => {
		setItems(SKILLS.slice(indexOfFirstItem, indexOfLastItem))
	}, [currentPage])
	return (
		<div class="flex flex-col relative gap-4 ">
            
			<div class="grid grid-cols-5 grid-rows-2 gap-x-6 gap-y-2">
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
				setCurrentPage={setCurrentPage}
			/>
		</div>
	)
}

export default DisplaySkills
