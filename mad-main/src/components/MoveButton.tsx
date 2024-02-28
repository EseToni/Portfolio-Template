import type { ComponentChildren } from "preact"

interface Props {
	children: ComponentChildren
	targetId: "start" | "hero" | "projects" | "skills" | "contact"
}

const MoveButton = ({ children, targetId }: Props) => {
	const handleClick = () => {
		const targetElement = document.getElementById(targetId)
		if (targetElement) {
			var offSetTop = targetElement.offsetTop
			window.scrollTo({
				top: offSetTop - 128,
				behavior: "smooth",
			})
		}
	}

	return <div onClick={handleClick}>{children}</div>
}

export default MoveButton
