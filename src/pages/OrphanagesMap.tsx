import React from "react";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { Map, TileLayer } from "react-leaflet";

import 'leaflet/dist/leaflet.css'

import Logo from "../assets/img/Logo.svg";

import "../assets/styles/pages/orphanage-map.css";

function OrphanegesMap() {
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
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
}

export default OrphanegesMap;
