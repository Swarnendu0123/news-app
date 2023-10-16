import Search from "../search/search.component";

const Navagation = (props) => {
  const { onChange } = props;

  return (
    <header class="bg-white sticky top-0">
      <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="md:flex md:items-center md:gap-12">
            <a class="block text-black" href="/">
              <span class="sr-only">Home</span>
              <div class="flex items-center">
                <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
                  NewsWave
                </h2>
              </div>
            </a>
          </div>

          <div class="hidden md:block">
            <nav aria-label="Global">
              <ul class="flex items-center gap-6 text-sm">
                <li>
                  <a
                    class="text-gray-500 transition hover:text-gray-500/75"
                    href="/"
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    class="text-gray-500 transition hover:text-gray-500/75"
                    href=""
                  >
                    Categories
                  </a>
                </li>

                <li>
                  <a
                    class="text-gray-500 transition hover:text-gray-500/75"
                    href="/"
                  >
                    History
                  </a>
                </li>

                <li>
                  <a
                    class="text-gray-500 transition hover:text-gray-500/75"
                    href="/"
                  >
                    Services
                  </a>
                </li>

                <li>
                  <a
                    class="text-gray-500 transition hover:text-gray-500/75"
                    href="/"
                  >
                    API Refrences
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <Search onChange={onChange} />
          <div class="flex items-center gap-4">
            <div class="sm:flex sm:gap-4">
              <a
                class="rounded-md bg-black px-5 py-2.5 text-sm font-medium text-white shadow"
                href="/home"
              >
                Browse News
              </a>
            </div>

            <div class="block md:hidden">
              <button class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navagation;
