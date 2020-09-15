function CardList() {
  const API_KEY = "a7b1d8591f6349ceb52d3dbecf956934";
  const [data, setData] = React.useState([]);
  // `http://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`

  React.useEffect(() => {
    fetch("./assignment-assets/data.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [data.length]);

  const formatDate = (date) => {
    const months = [
      "jan",
      "feb",
      "march",
      "apr",
      "may",
      "june",
      "jule",
      "aug",
      "sept",
      "oct",
      "nov",
      "dec",
    ];
    const currentDate = new Date(date);

    const year = currentDate.getFullYear();
    const month = months[currentDate.getMonth()];
    const day = currentDate.getDate();

    return `${day} ${month} ${year}`;
  };

  return (
    <div className="card-wrapp">
      {data.map((item, index) => {
        return (
          <div className="card" key={index}>
            <img src={item.urlToImage} className="card-img" alt={item.title} />
            <span className="card-date">
              Project {formatDate(item.publishedAt)}
            </span>
            <a href={item.url} target="_blank">
              <h4 className="card-title">
                <span className="card-author">{item.author}</span> {item.title}
              </h4>
              <div className="card-arrow"></div>
            </a>
          </div>
        );
      })}
    </div>
  );
}
