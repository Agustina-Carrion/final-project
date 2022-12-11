import { useEffect, useRef, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import geoJson from "../../data/destinationsLight.json";

mapboxgl.accessToken = "pk.eyJ1IjoiYW5kaXZ3aGl0ZSIsImEiOiJjbGIzeDQ4MmgwNXFmM3JxbnNlaW9neXc0In0.kyEmO_woTD50qizMwbHYmQ";
//process.env.REACT_APP_MAPBOX_TOKEN;

function Map() {
  const mapContainer = useRef();
  const map = useRef();
  const [ lng ] = useState(-90.0706);
  const [ lat ] = useState(29.9578);
  const [ zoom ] = useState(10);
 
  // initialize map only once
  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });
    //create default markers
    geoJson.features.map((feature) =>
      new mapboxgl.Marker()
        .setLngLat(feature.geometry.coordinates)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }) 
        .setHTML(
          `<div className="popupContent">
          <h3 className="title">${feature?.properties?.title}</>
           <p className="date">${feature?.properties?.date}</p>
           <p className="authorImage">${feature?.properties?.authorImage}</p>
           <p className="authorName">${feature?.properties?.authorName}</p>
           <p className="detailsLink">Link</p>
           </div>`
        )
        )
        .addTo(map.current)
    );
  });

  //   useEffect(() => {
  //     if (!map.current) return; // wait for map to initialize
  //     map.current.on('move', () => {
  //     setLng(map.current.getCenter().lng.toFixed(4));
  //     setLat(map.current.getCenter().lat.toFixed(4));
  //     setZoom(map.current.getZoom().toFixed(2));
  //     });
  // });

  //Clean up on unmount
  //     return () => map.remove();
  //   }, []);

  return (
    <>
      <div ref={mapContainer}  className="map-container" />
    </>
  );
}

export default Map;
