interface Props {
	pages: number
	currentPage: number
	setCurrentPage: (page: number) => void
}

const Pages = ({ pages, currentPage, setCurrentPage }: Props) => {
	return (
		<div class="flex flex-row justify-center gap-2">
			{Array.from({ length: pages }, (_, i) => (
				<button
					onClick={() => setCurrentPage(i + 1)}
					class={`
                        ${
													currentPage === i + 1
														? "bg-zinc-800"
														: "bg-slate-300 "
												}
                     p-2 rounded-full`}
				></button>
			))}
		</div>
	)
}

export default Pages
