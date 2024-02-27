interface Props {
	pages: number
	currentPage: number
	setCurrentPage: (page: number) => void
}

const Pages = ({ pages, currentPage, setCurrentPage }: Props) => {
	return (
		<div class="flex flex-row justify-center gap-4">

			{Array.from({ length: pages }, (_, i) => (
				<button
					onClick={() => setCurrentPage(i + 1)}
					class={`
					transition-all
                        ${
													currentPage === i + 1
														? `bg-[#0D141C] scale-125 opacity-95 `
														: "bg-[#4F7396] opacity-35 scale-90	"
												}
                     w-5 h-5 rounded-full`}
				></button>
			))}
		</div>
	)
}

export default Pages
