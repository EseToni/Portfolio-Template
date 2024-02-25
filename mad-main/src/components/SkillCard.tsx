interface Props {
	name: string
	icon: string
	description: string
}

const SkillCard = ({ name, icon, description }: Props) => {
	return (
		<article class="flex flex-col gap-2 max-w-80 border-solid border-slate-300 border-2  rounded-lg p-4 w-44 h-36 overflow-hidden">
			<img src={icon} alt={name} class="w-8 h-8" />
			<div>
				<h3 class="font-bold text-zinc-950">{name}</h3>
				<p
					class="text-slate-500 text-xs text-wrap font-normal"
				>
					{description}
				</p>
			</div>
		</article>
	)
}

export default SkillCard
