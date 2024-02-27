interface Props {
	image: string
	title: string
	description: string
	link?: string
	name: string
	color_1: string
	color_2: string
}

import styles from "./animation.module.css"

const ProjectCard2 = ({
	image,
	title,
	description,
	link,
	name,
	color_1,
	color_2,
}: Props) => {
	return (
		<article class="flex flex-col gap-3 max-w-80 h-72 transition-all ">
			<picture
				class={`relative h-44 w-80 ${styles.group_card} cursor-pointer transition-all hover:scale-105 hover:shadow-md rounded-xl`}
			>
				<div class={`absolute overflow-hidden rounded-xl `}>
					<h3
						class={`font-bold text-3xl  transition-all absolute text-white opacity-95 z-10 ${styles.text_card}`}
					>
						{name}
					</h3>
					<div
						style={{ backgroundColor: color_1 }}
						class={`h-44 w-80  absolute opacity-90 rounded-xl transition-all  ${styles.bg_left}`}
					/>
					<div
						style={{ backgroundColor: color_2 }}
						class={`bg-[${color_2}] h-44 w-80  opacity-80 rounded-xl transition-all  ${styles.bg_right}`}
					/>
				</div>
				<img src={image} alt={title} class="h-44 w-80 rounded-xl" />
			</picture>
			<div>
				<h3 class="font-bold text-[#0D141C]">{title}</h3>
				<p class="text-[#4F7396] text-sm text-wrap">{description}</p>
			</div>
		</article>
	)
}

export default ProjectCard2
