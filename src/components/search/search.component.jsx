const Search = (props) => {
  const { onChange } = props;

  return (
    <header class="flex flex-col items-start">
      <div class="flex justify-between">
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
  );
};

export default Search;
