import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function VillageMap() {
  const villages = [
    {
      name: "Tambaram PHC",
      lat: 12.9249,
      lng: 80.1000,
    },
    {
      name: "Chromepet PHC",
      lat: 12.9516,
      lng: 80.1462,
    },
    {
      name: "Guduvanchery PHC",
      lat: 12.8453,
      lng: 80.0605,
    },
    {
      name: "Kelambakkam PHC",
      lat: 12.7868,
      lng: 80.2217,
    },
  ];

  return (
    <MapContainer
      center={[12.91, 80.12]}
      zoom={10}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {villages.map((village, index) => (
        <Marker
          key={index}
          position={[village.lat, village.lng]}
        >
          <Popup>{village.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default VillageMap;