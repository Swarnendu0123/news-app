import data from "../../Sample_Report.json";
const newses = data.results;

const Card = (props) => {
  const { pubDate, link, title, description, image_url } = props.news;

  return (
    <li>
      <article class="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <img alt="Office" src={image_url} class="h-56 w-full object-cover" />

        <div class="bg-white p-4 sm:p-6">
          <time datetime="2022-10-10" class="block text-xs text-gray-500">
            {pubDate}
          </time>

          <a href={"/news/" + newses.indexOf(props.news)}>
            <h3 class="mt-0.5 text-lg text-gray-900">{title}</h3>
          </a>

          <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            {description}
          </p>
        </div>
      </article>
    </li>
  );
};

export default Card;
