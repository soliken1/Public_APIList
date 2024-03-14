function RectangularCard(props) {
  return (
    <div>
      {props.data.entries.map((entry, index) => (
        <div key={index} className="rect_card">
          <div className="container">
            <label className="color-white font-size-28 font-sans-serif overlap-normal">
              {entry.API}
            </label>
            <label className="font-sans-serif color-white font-size-16 overlap-normal">
              {entry.Description}
            </label>
            <label className="font-sans-serif color-white font-size-16 overlap-normal">
              {entry.Category}
            </label>
            <label className="font-sans-serif color-white font-size-16 overlap-normal mt-1">
              URLs:
            </label>
            <a
              href={entry.Link}
              target="_blank"
              className="font-sans-serif color-white font-size-16 overlap-normal debug"
            >
              {entry.Link}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RectangularCard;
