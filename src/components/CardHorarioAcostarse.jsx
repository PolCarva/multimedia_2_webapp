import React, { useState, useEffect } from "react";
import Card from "./Card";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimeClock } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import ReactDOM from "react-dom";

const CardHorarioAcostarse = ({ setConfig, config }) => {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  dayjs.tz.setDefault("America/Montevideo");
  const [modalOpen, setModalOpen] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState({ horas: 0, minutos: 0 });
  const initialFormattedTime = dayjs()
    .set("hour", config.acostarse.hora)
    .set("minute", config.acostarse.minuto)
    .format("hh:mm A");
  const [time, setTime] = useState(initialFormattedTime);
  const [selectedTime, setSelectedTime] = useState(
    dayjs()
      .set("hour", config.acostarse.hora)
      .set("minute", config.acostarse.minuto)
  );

  const calculateTimeRemaining = () => {
    const now = dayjs();
    let nextSelectedTime = selectedTime;
    if (selectedTime.isBefore(now)) {
      nextSelectedTime = selectedTime.add(1, "day");
    }
    const hours = nextSelectedTime.diff(now, "hours");
    const minutes = nextSelectedTime.diff(now, "minutes") % 60;
    setTimeRemaining({ horas: hours, minutos: minutes });
  };

  useEffect(() => {
    calculateTimeRemaining();
    const interval = setInterval(calculateTimeRemaining, 30000);
    return () => clearInterval(interval);
  }, [selectedTime]);

  const toggleModal = () => setModalOpen(!modalOpen);

  const handleChange = (newValue) => {
    setSelectedTime(newValue);
    setTime(newValue.format("hh:mm A"));
  };

  const handleSave = () => {
    const newHour = selectedTime.hour();
    const newMinute = selectedTime.minute();
    setConfig((prev) => ({
      ...prev,
      acostarse: {
        ...prev.acostarse,
        hora: newHour,
        minuto: newMinute,
      },
    }));
    toggleModal();
  };

  return (
    <>
      {modalOpen && (
        <Modal
          selectedTime={selectedTime}
          handleChange={handleChange}
          handleSave={handleSave}
        />
      )}
      <div onClick={toggleModal}>
        <Card>
          <span>Me quiero dormir a las: </span>
          <span className="block font-bold text-6xl mt-4">{time}</span>
          <span className="block text-sm mt-2 text-right text-white/50">
            {timeRemaining.horas > 0
              ? `Faltan ${timeRemaining.horas} hora${
                  timeRemaining.horas > 1 ? "s" : ""
                } y `
              : "Faltan "}
            {timeRemaining.minutos} minuto{timeRemaining.minutos > 1 ? "s" : ""}
          </span>
        </Card>
      </div>
    </>
  );
};

const Modal = ({ selectedTime, handleChange, handleSave, toggleModal }) => {
  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 w-full h-full bg-black/60 z-30"
      onClick={toggleModal}
    >
      <div className="fixed inset-0 flex items-center justify-center z-40">
        <div
          className="bg-white p-4 rounded-md"
          onClick={(e) => e.stopPropagation()}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="flex flex-col items-center">
              <h2 className="text-black font-bold">
                {selectedTime.format("hh:mm A")}
              </h2>
              <TimeClock
                ampm={false}
                minutesStep={1}
                value={selectedTime}
                onChange={handleChange}
              />
            </div>
          </LocalizationProvider>
          <div className="flex flex-col gap-2 mt-4">
            <button
              className="bg-red-500 py-3 rounded-xl text-xl text-white"
              onClick={toggleModal}
            >
              Cancelar
            </button>
            <button
              className="bg-blue-900 py-3 rounded-xl text-xl text-white"
              onClick={handleSave}
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default CardHorarioAcostarse;
