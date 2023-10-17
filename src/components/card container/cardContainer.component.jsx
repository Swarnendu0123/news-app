import Card from "../card/card.component";
import Filters from "../filters/filters.component";

const CardContainer = (props) => {
  const { onChange } = props;
  const onLocationChange = onChange[1];

  return (
    <section>
      <div class="mx-auto max-w-screen-xl px-4   ">
        <div class="mt-8 block lg:hidden">
          <button class="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-4 w-4 rtl:rotate-180"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>

        <div class="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
          <Filters onChange={onLocationChange} />
          <div class="lg:col-span-3">
            <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {props.data.map((news) => {
                return <Card news={news} />;
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardContainer;
