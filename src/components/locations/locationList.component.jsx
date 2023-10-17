const Location = (props) => {
  const { country } = props;
  let countries = country;
  return (
    <div>
      {countries.map((country) => {
        return (
          <span class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700  ">
            {country}
          </span>
        );
      })}
    </div>
  );
};

export default Location;
