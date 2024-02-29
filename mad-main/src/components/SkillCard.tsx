interface Props {
	name: string
	icon: string
	description: string
}

const SkillCard = ({ name, icon, description }: Props) => {
	return (
		<article class="flex  flex-col gap-2 border-solid  border-2 border-[#E5E8EB] rounded-xl p-2 md:p-4 w-[150px] h-36 md:w-44 md:h-36 overflow-hidden transition-all hover:border-transparent hover:scale-105 hover:shadow-sm cursor-default">
			<img src={icon} alt={name} class="w-8 h-8" />
			<div class="flex flex-col gap-0">
				<h3 class="font-bold text-[#0D141C]">{name}</h3>
				<p class="text-[#4F7396] text-xs font-normal ">
					{description}
				</p>
			</div>
		</article>
	)
}

export default SkillCard
