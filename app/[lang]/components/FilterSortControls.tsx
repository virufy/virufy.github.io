type SortOrder = 'newest' | 'oldest';

type FilterSortControlsProps = {
  selectedYear: string | number | 'all';
  years: Array<string | number>;
  onYearChange: (year: string) => void;
  sortOrder: SortOrder;
  onSortOrderChange: (order: SortOrder) => void;
  labels: {
    filterByYearLabel: string;
    allYearsOption: string;
    sortByLabel: string;
    newestFirst: string;
    oldestFirst: string;
  };
};

export default function FilterSortControls({
  selectedYear,
  years,
  onYearChange,
  sortOrder,
  onSortOrderChange,
  labels,
}: FilterSortControlsProps) {
  return (
    <div className="mb-6 flex flex-col gap-3 md:flex-row md:justify-end lg:mb-8">
      <div className="flex w-full min-w-0 items-center gap-2 md:w-auto">
        <label htmlFor="listing-year-filter" className="shrink-0 text-sm text-[#485663]">
          {labels.filterByYearLabel}
        </label>
        <select
          id="listing-year-filter"
          value={String(selectedYear)}
          onChange={(event) => onYearChange(event.target.value)}
          aria-label={labels.filterByYearLabel}
          className="min-h-11 min-w-0 max-w-full flex-1 cursor-pointer rounded-full border border-[#cbd8e2] bg-white px-4 py-2 text-sm font-medium text-[#253341] shadow-[0_2px_4px_rgba(25,47,65,0.14)] outline-none focus:border-[#1689c5] focus:ring-2 focus:ring-[#1689c5]/20 md:flex-none md:min-w-[140px]"
        >
          <option value="all">{labels.allYearsOption}</option>
          {years.map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>

      <div className="flex w-full min-w-0 items-center gap-2 md:w-auto">
        <label htmlFor="listing-sort-order" className="shrink-0 text-sm text-[#485663]">
          {labels.sortByLabel}
        </label>
        <select
          id="listing-sort-order"
          value={sortOrder}
          onChange={(event) => onSortOrderChange(event.target.value as SortOrder)}
          aria-label={labels.sortByLabel}
          className="min-h-11 min-w-0 max-w-full flex-1 cursor-pointer rounded-full border border-[#cbd8e2] bg-white px-4 py-2 text-sm font-medium text-[#253341] shadow-[0_2px_4px_rgba(25,47,65,0.14)] outline-none focus:border-[#1689c5] focus:ring-2 focus:ring-[#1689c5]/20 md:flex-none md:min-w-[200px]"
        >
          <option value="newest">{labels.newestFirst}</option>
          <option value="oldest">{labels.oldestFirst}</option>
        </select>
      </div>
    </div>
  );
}
