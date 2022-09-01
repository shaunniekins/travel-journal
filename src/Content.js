export default function Content(props) {
  return (
    <section className="content">
      <img src={props.item.imageUrl} alt={props.item.imageUrl} className="content--image"/>
      <div className="content--description">
        <div>
          <img src="./assets/location.png" alt="" />
          <span className="content--description-location">{props.item.location}</span>
          <a className="content--description-viewUrl" href={props.item.googleMapsUrl} target='_blank'>View on Google Maps</a>
        </div>
        <h1>{props.item.title}</h1>
        <h6>{props.item.startDate} - {props.item.endDate}</h6>
        <p>{props.item.description}</p>
      </div>
    </section>
  )
}