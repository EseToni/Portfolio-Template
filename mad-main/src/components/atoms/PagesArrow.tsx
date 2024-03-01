interface Props {
	pages: number
	currentPage: number
	setCurrentPage: (page: number) => void
}

import projects from "@data/projects.json"

const PagesArrow = ({ pages, currentPage, setCurrentPage }: Props) => {
	const handlePage = (page_s: number) => {
		setCurrentPage(page_s)
		if (pages === projects.length) {
			const root = document.documentElement
			root.style.setProperty("--primary-color", projects[page_s - 1].color_2)
		}
	}
	return (
		<div class="flex w-full justify-center flex-row gap-10   lg:hidden ">
			<button
				aria-label="Submit Form"
				class="shadow-lg rounded-xl py-1 pl-1 pr-3 disabled:opacity-65 disabled:shadow-sm"
				disabled={0 == currentPage - 1}
				onClick={() => handlePage(currentPage - 1)}
			>
				<svg width="44" height="44" viewBox="0 0 256 256">
					<path
						class={`${
							pages === projects.length
								? "fill-[var(--primary-color)]"
								: "fill-[#0D141C]"
						}`}
						d="M224 128a8 8 0 0 1-8 8H59.31l58.35 58.34a8 8 0 0 1-11.32 11.32l-72-72a8 8 0 0 1 0-11.32l72-72a8 8 0 0 1 11.32 11.32L59.31 120H216a8 8 0 0 1 8 8"
					/>
				</svg>
			</button>
			<button
				aria-label="Submit Form"
				class="shadow-lg rounded-xl py-1 pl-3 pr-1 disabled:opacity-65 disabled:shadow-sm"
				disabled={pages + 1 == currentPage + 1}
				onClick={() => handlePage(currentPage + 1)}
			>
				<svg width="44" height="44" viewBox="0 0 256 256">
					<path
						class={`${
							pages === projects.length
								? "fill-[var(--primary-color)]"
								: "fill-[#0D141C]"
						}`}
						d="m221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32"
					/>
				</svg>
			</button>
		</div>
	)
}

export default PagesArrow
