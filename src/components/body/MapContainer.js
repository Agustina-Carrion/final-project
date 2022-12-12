import Map, {Marker, Popup, NavigationControl } from 'react-map-gl';
import {useState, useMemo} from 'react';
import Pin from './Pin';
import geoJson from "../../data/destinationsLightMode.json";
import "mapbox-gl/dist/mapbox-gl.css";
import {Link} from "wouter";

const TOKEN = "pk.eyJ1IjoiYW5kaXZ3aGl0ZSIsImEiOiJjbGIzeDQ4MmgwNXFmM3JxbnNlaW9neXc0In0.kyEmO_woTD50qizMwbHYmQ"; 

function MapContainer ({id}) {
  const [popupInfo, setPopupInfo] = useState(null);

const viewport = {
  longitude: geoJson[0]?.longitude, 
  latitude: geoJson[0]?.latitude,
  zoom: 8
};

const pins = useMemo(
  () =>
    geoJson.map((travelLocation) => (
      <Marker
        key={travelLocation.title}
        longitude={travelLocation.longitude}
        latitude={travelLocation.latitude}
        anchor="bottom"
        onClick={(e) => {
          e.originalEvent.stopPropagation();
          setPopupInfo(travelLocation);
        }}
      >
        <Pin />
      </Marker>
    )),
  []
);


  return (<>
  <Map
        initialViewState={ viewport }
        style={{ width: "100%", height: "100vh" }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        mapboxAccessToken={TOKEN}
        cursor="move"
      >

        <NavigationControl position="bottom-left" />

        {pins}

        {popupInfo ? (
          <Popup
            anchor="top"
            longitude={Number(popupInfo.longitude)}
            latitude={Number(popupInfo.latitude)}
            onClose={() => setPopupInfo(null)}
          >
            <h3 className="font-bold font-sans">{popupInfo.title}</h3>
            <p className="italic"> Visiting Date: {popupInfo.date}</p>
            <div className="flex py-1 items-center justify-center">
            <img src={popupInfo.authorImage} className="h-6 w-6 mx-1 rounded" alt="author"/>
            <p> Author: {popupInfo.author} </p>
            </div>

            <Link href={"/home"}>
            <button type="button" className="inline-block px-1 py-1 bg-emerald-500 text-white text-xs rounded drop-shadow-lg hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-emerald-500 active:shadow-lg transition duration-150 ease-in-out dark:bg-slate-600 dark:hover:bg-slate-900"
          >
            <span>Read More</span>
          </button>
            </Link>
          </Popup>
        ): null}
  </Map>
</>
  )
}
           
export default MapContainer;