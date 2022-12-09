import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import geoJson from "../../data/destinationsLight.json";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const Popup = ({ routeName, routeNumber, city, type }) => (
  <div className="popup">
    <h3 className="title">{title}</h3>
    <div className="route-metric-row">
      <div className="row-value">{image}</div>
    </div>
    <p className="author-name">Author {authorName}</p>
  </div>
);


function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-90.0706);
  const [lat, setLat] = useState(29.9578);
  const [zoom, setZoom] = useState(10);
  //const popUpRef = useRef(new mapboxgl.Popup({ offset: 15 });
 
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
      {/* <div className="rightbox">
             Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div> */}
      <div ref={mapContainer} className="map-container" />
    </>
  );
}

export default Map;
