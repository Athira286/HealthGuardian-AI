import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function VillageMap() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch("https://healthguardian-ai-backend.onrender.com/worker-locations")
      .then((res) => res.json())
      .then((data) => setLocations(data));
  }, []);

  return (
    <MapContainer
      center={[12.91, 80.12]}
      zoom={10}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {locations.map((worker, index) => (
        <Marker
          key={index}
          position={[worker.latitude, worker.longitude]}
        >
          <Popup>
            <strong>{worker.name}</strong>
            <br />
            {worker.village}
            <br />
            {worker.phc}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default VillageMap;