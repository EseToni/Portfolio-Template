interface Props {
	image: string
	title: string
	description: string
	link?: string
}

const ProjectCard2 = ({ image, title, description, link }: Props) => {
	return (
		<article class="flex flex-col gap-2 max-w-80">
			<img src={image} alt={title} class="h-44 w-80" />
			<div>
				<h3 class="font-bold text-zinc-800">{title}</h3>
				<p class="text-slate-500 text-sm text-wrap">{description}</p>
			</div>
		</article>
	)
}

export default ProjectCard2
