import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiPlus, FiArrowRight } from "react-icons/fi";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import Logo from "../assets/img/Logo.svg";

import "../assets/styles/pages/orphanage-map.css";
import MapIcon from "../utils/mapIcon";
import api from "../services/api";

interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

function OrphanegesMap() {
  //desestruturação do array
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    //chamada da api
    api.get("orphanages").then((response) => {
      setOrphanages(response.data);
    });
  }, []);

  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={Logo} alt="Happy" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Paraty</strong>
          <span>Rio de Janeiro</span>
        </footer>
      </aside>

      <Map
        center={[-23.2204436, -44.7208429]}
        zoom={15}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {orphanages.map((orphanage) => {
          return (
            <Marker
              key={orphanage.id}
              icon={MapIcon}
              position={[orphanage.latitude, orphanage.longitude]}
            >
              <Popup
                closeButton={false}
                minWidth={240}
                maxWidth={240}
                className="map-popup"
              >
                {orphanage.name}
                <Link to={`/Orphanages/${orphanage.id}`}>
                  <FiArrowRight size={20} color="#fff" />
                </Link>
              </Popup>
            </Marker>
          );
        })}
      </Map>

      <Link to="/Orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
}

export default OrphanegesMap;
