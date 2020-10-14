import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import mapMarkerImg from "../assets/img/map-marker.svg";
import "../assets/styles/components/sidebar.css";

export default function Sidebar() {
  const { goBack } = useHistory();

  return (
    <aside className="app-sidebar">
      <img src={mapMarkerImg} alt="Happy" />

      <footer>
        <button type="button">
          <FiArrowLeft size={24} color="#FFF" onClick={goBack} />
        </button>
      </footer>
    </aside>
  );
}
