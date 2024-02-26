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

const ProjectCard2 = ({ image, title, description, link, name, color_1, color_2 }: Props) => {
	return (
		<article class="flex flex-col gap-2 max-w-80 h-72">
			<picture class={`relative h-44 w-80 ${styles.group_card} `}>
				<div class={`absolute overflow-hidden rounded-xl `}>
					<h3 class={`font-bold text-3xl  transition-all absolute text-white opacity-85 z-10 ${styles.text_card}`}>{name}</h3>
					<div
						class={`bg-[${color_1}] h-44 w-80  absolute opacity-80 rounded-xl transition-all  ${styles.bg_left}`}
					/>
					<div
						class={`bg-[${color_2}] h-44 w-80  opacity-80 rounded-xl transition-all  ${styles.bg_right}`}
					/>
				</div>
				<img src={image} alt={title} class="h-44 w-80" />
			</picture>
			<div>
				<h3 class="font-bold text-zinc-800">{title}</h3>
				<p class="text-slate-500 text-sm text-wrap">{description}</p>
			</div>
		</article>
	)
}

export default ProjectCard2
