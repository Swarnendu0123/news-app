const Filters = (props) => {
  const { onChange } = props;

  return (
    <div class="hidden space-y-4 lg:block sticky top-20">
      <h1 class="text-xl font-bold text-gray-900 sm:text-1xl text-center">
        Filters :
      </h1>

      <div class="space-y-2">
        <details class="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
          <summary class="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition">
            <span class="text-sm font-medium">Location</span>

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
                <label
                  for="UserEmail"
                  class="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                >
                  <input
                    type="input"
                    id="Location"
                    placeholder="Location"
                    class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                    onChange={onChange}
                  />

                  <span class="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                    Search Country
                  </span>
                </label>{" "}
              </span>

              <button
                type="button"
                class="text-sm text-gray-900 underline underline-offset-4"
              >
                Reset
              </button>
            </header>
          </div>
        </details>

        <details class="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
          <summary class="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition">
            <span class="text-sm font-medium"> Topics </span>

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
                    Politics
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
                    Economics/Business
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

                  <span class="text-sm font-medium text-gray-700">Health</span>
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
                    Science/Technology
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
                    Environment
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
                    Entertainment
                  </span>
                </label>
              </li>
            </ul>
          </div>
        </details>
        <section class="bg-gray-50 dark:bg-gray-900">
          <div class="p-8 md:p-12 lg:px-16 lg:py-24">
            <div class="mx-auto max-w-lg text-center">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
                Subscribe
              </h2>

              <p class="hidden text-gray-500 dark:text-gray-400 sm:mt-4 sm:block">
                Enjoy newses in E-mail
              </p>
            </div>

            <div class="mx-auto mt-8 max-w-xl">
              <form action="#" class="sm:flex sm:gap-4 flex-col">
                <div class="sm:flex-1">
                  <label for="email" class="sr-only">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="Email address"
                    class="w-full rounded-md border-gray-200 bg-white p-3 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  />
                </div>
                <button
                  type="submit"
                  class="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-black transition  sm:mt-0 sm:w-auto"
                >
                  <span class="text-sm font-medium"> Subscribe </span>

                  <svg
                    class="h-5 w-5 rtl:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Filters;
