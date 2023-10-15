const Search = (props) => {
  const { onChange } = props;

  return (
    <div class="mx-auto max-w-screen-xl px-4 py-8 ">
      <header class="flex flex-col items-start">
        <div class="flex items-center">
          <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
            Product Collection
          </h2>
        </div>
        <div class="flex justify-between">
          <div>
            <p class="mt-4 max-w-500px text-gray-900">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              praesentium cumque iure dicta incidunt est ipsam, officia dolor
              fugit natus?
            </p>{" "}
          </div>
          <div class="ml-4">
            <input
              type="search"
              id="search"
              placeholder="Search News"
              class="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
              onChange={onChange} 
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Search;
