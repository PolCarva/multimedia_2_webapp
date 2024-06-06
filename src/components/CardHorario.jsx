import React, { useState } from "react";
import Card from "./Card";

const CardHorario = ({ setConfig }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [time, setTime] = useState("8:30am");
  const toggleModal = () => setModalOpen((prev) => !prev);

  const handleChange = (e) => {
    setTime(e.target.value);
    setConfig((prev) => ({ ...prev, despertar: e.target.value }));
  };
  return (
    <>
      {modalOpen && (
        <div
          className="fixed inset-0 w-full h-full bg-black/60 z-30"
          onClick={toggleModal}
        ></div>
      )}
      <div onClick={toggleModal}>
        <Card>
          <span>Horario de acostarse: </span>
          <span className="block font-bold text-6xl mt-4">{time}</span>
          <span className="block text-sm mt-2 text-right text-white/50">
            en 1 hora 20 min
          </span>
        </Card>
      </div>
    </>
  );
};

export default CardHorario;
