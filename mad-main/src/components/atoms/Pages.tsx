interface Props {
	pages: number
	currentPage: number
	setCurrentPage: (page: number) => void
}

import PagesArrow from "./PagesArrow"

const Pages = ({ pages, currentPage, setCurrentPage }: Props) => {
	return (
		<div>
			<div class="hidden lg:flex flex-row justify-center gap-4">
				{Array.from({ length: pages }, (_, i) => (
					<button
						onClick={() => setCurrentPage(i + 1)}
						class={`
					transition-all 
                        ${
													currentPage === i + 1
														? `bg-[var(--primary-color)] scale-125 opacity-95 rounded-lg `
														: "bg-[#4F7396] opacity-35 scale-90	"
												}
                     w-5 h-5 rounded-full`}
					></button>
				))}
			</div>
			<PagesArrow
				currentPage={currentPage}
				pages={pages}
				setCurrentPage={setCurrentPage}
			/>
		</div>
	)
}

export default Pages
