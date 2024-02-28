import projects from "@data/projects.json"

import styles from "./paddle.module.css"
import { useState } from "preact/hooks"

const ChangeTheme = () => {
	const colors = projects.flatMap(
		({ color_1, color_2 }: { color_1: string; color_2: string }) => [
			color_1,
			color_2,
		]
	)

	const [selectedColor, setSelectedColor] = useState("#6C91C2")
	const handleColor = (color: string) => {
		const root = document.documentElement
		root.style.setProperty("--primary-color", color)
		setSelectedColor(color)
	}
	const handleContainerClick = () => {
		// Programmatically focus on the hidden input field
		if (innerWidth < 640) {
			document.getElementById("colorContainer")?.focus()
		}
		return
	}
	return (
		<div
			onClick={handleContainerClick}
			id="colorContainer"
			class={`${styles.miniScroll} sm:sshadow-sm group/colors sticky z-30 w-16 sm:w-14   h-28  overflow-y-scroll   transition-all hover:scale-110 sm:hover:shadow-md  left-[82%] sm:left-[90%] top-28 sm:top-32 rounded-xl  flex flex-col items-center pt-2 justify-start gap-2 `}
		>
			{colors.map((color: string, index: number) => (
				<div
					key={index}
					onClick={() => handleColor(color)}
					class={`w-5 h-5 transition-all ${
						selectedColor == color && "scale-125 hover:scale-125 rounded-[6px]"
					} group-hover:shadow-none hover:scale-110 hover:shadow-lg cursor-pointer rounded-[8px] shadow-md text-transparent `}
					style={{ backgroundColor: color }}
				>
					.
				</div>
			))}
		</div>
	)
}

export default ChangeTheme
