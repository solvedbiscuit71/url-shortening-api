import Card from "./Card";

function Cards(props) {
  const cards = [
    {
      image: "assets/icon-brand-recognition.svg",
      alt: "Brand Recognition",
      title: "Brand Recognition",
      content: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
    },
    {
      image: "assets/icon-detailed-records.svg",
      alt: "Detailed Records",
      title: "Detailed Records",
      content: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
    },
    {
      image: "assets/icon-fully-customizable.svg",
      alt: "Fully Customizable",
      title: "Fully Customizable",
      content: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
    },
  ]

  return (
    <div className="card-flex">
      {cards.map(card => { return <Card key={card.title} image={card.image} alt={card.alt} title={card.title} content={card.content} /> }) }
    </div>
  );
}

export default Cards;