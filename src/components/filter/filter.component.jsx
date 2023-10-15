const Filter = () => {
  return (
    <div class="hidden space-y-4 lg:block">
      <div>
        <p class="block text-xs font-medium text-gray-700">Filters</p>

        <div class="mt-1 space-y-2">
          <details class="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
            <summary class="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
              <span class="text-sm font-medium"> Availability </span>

              <span class="transition group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </summary>

            <div class="border-t border-gray-200 bg-white">
              <header class="flex items-center justify-between p-4">
                <span class="text-sm text-gray-700"> 0 Selected </span>

                <button
                  type="button"
                  class="text-sm text-gray-900 underline underline-offset-4"
                >
                  Reset
                </button>
              </header>

              <ul class="space-y-1 border-t border-gray-200 p-4">
                <li>
                  <label
                    for="FilterInStock"
                    class="inline-flex items-center gap-2"
                  >
                    <input
                      type="checkbox"
                      id="FilterInStock"
                      class="h-5 w-5 rounded border-gray-300"
                    />

                    <span class="text-sm font-medium text-gray-700">
                      In Stock (5+)
                    </span>
                  </label>
                </li>

                <li>
                  <label
                    for="FilterPreOrder"
                    class="inline-flex items-center gap-2"
                  >
                    <input
                      type="checkbox"
                      id="FilterPreOrder"
                      class="h-5 w-5 rounded border-gray-300"
                    />

                    <span class="text-sm font-medium text-gray-700">
                      Pre Order (3+)
                    </span>
                  </label>
                </li>

                <li>
                  <label
                    for="FilterOutOfStock"
                    class="inline-flex items-center gap-2"
                  >
                    <input
                      type="checkbox"
                      id="FilterOutOfStock"
                      class="h-5 w-5 rounded border-gray-300"
                    />

                    <span class="text-sm font-medium text-gray-700">
                      Out of Stock (10+)
                    </span>
                  </label>
                </li>
              </ul>
            </div>
          </details>

          <details class="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
            <summary class="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
              <span class="text-sm font-medium"> Price </span>

              <span class="transition group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </summary>

            <div class="border-t border-gray-200 bg-white">
              <header class="flex items-center justify-between p-4">
                <span class="text-sm text-gray-700">
                  The highest price is $600
                </span>

                <button
                  type="button"
                  class="text-sm text-gray-900 underline underline-offset-4"
                >
                  Reset
                </button>
              </header>

              <div class="border-t border-gray-200 p-4">
                <div class="flex justify-between gap-4">
                  <label for="FilterPriceFrom" class="flex items-center gap-2">
                    <span class="text-sm text-gray-600">$</span>

                    <input
                      type="number"
                      id="FilterPriceFrom"
                      placeholder="From"
                      class="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                    />
                  </label>

                  <label for="FilterPriceTo" class="flex items-center gap-2">
                    <span class="text-sm text-gray-600">$</span>

                    <input
                      type="number"
                      id="FilterPriceTo"
                      placeholder="To"
                      class="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                    />
                  </label>
                </div>
              </div>
            </div>
          </details>

          <details class="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
            <summary class="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
              <span class="text-sm font-medium"> Colors </span>

              <span class="transition group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </summary>

            <div class="border-t border-gray-200 bg-white">
              <header class="flex items-center justify-between p-4">
                <span class="text-sm text-gray-700"> 0 Selected </span>

                <button
                  type="button"
                  class="text-sm text-gray-900 underline underline-offset-4"
                >
                  Reset
                </button>
              </header>

              <ul class="space-y-1 border-t border-gray-200 p-4">
                <li>
                  <label for="FilterRed" class="inline-flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="FilterRed"
                      class="h-5 w-5 rounded border-gray-300"
                    />

                    <span class="text-sm font-medium text-gray-700">Red</span>
                  </label>
                </li>

                <li>
                  <label
                    for="FilterBlue"
                    class="inline-flex items-center gap-2"
                  >
                    <input
                      type="checkbox"
                      id="FilterBlue"
                      class="h-5 w-5 rounded border-gray-300"
                    />

                    <span class="text-sm font-medium text-gray-700">Blue</span>
                  </label>
                </li>

                <li>
                  <label
                    for="FilterGreen"
                    class="inline-flex items-center gap-2"
                  >
                    <input
                      type="checkbox"
                      id="FilterGreen"
                      class="h-5 w-5 rounded border-gray-300"
                    />

                    <span class="text-sm font-medium text-gray-700">Green</span>
                  </label>
                </li>

                <li>
                  <label
                    for="FilterOrange"
                    class="inline-flex items-center gap-2"
                  >
                    <input
                      type="checkbox"
                      id="FilterOrange"
                      class="h-5 w-5 rounded border-gray-300"
                    />

                    <span class="text-sm font-medium text-gray-700">
                      Orange
                    </span>
                  </label>
                </li>

                <li>
                  <label
                    for="FilterPurple"
                    class="inline-flex items-center gap-2"
                  >
                    <input
                      type="checkbox"
                      id="FilterPurple"
                      class="h-5 w-5 rounded border-gray-300"
                    />

                    <span class="text-sm font-medium text-gray-700">
                      Purple
                    </span>
                  </label>
                </li>

                <li>
                  <label
                    for="FilterTeal"
                    class="inline-flex items-center gap-2"
                  >
                    <input
                      type="checkbox"
                      id="FilterTeal"
                      class="h-5 w-5 rounded border-gray-300"
                    />

                    <span class="text-sm font-medium text-gray-700">Teal</span>
                  </label>
                </li>
              </ul>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Filter;