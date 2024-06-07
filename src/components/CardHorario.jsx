import React, { useState, useEffect } from "react";
import Card from "./Card";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimeClock } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

const CardHorario = ({ setConfig }) => {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  dayjs.tz.setDefault("America/Montevideo");
  const [modalOpen, setModalOpen] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState({ horas: 0, minutos: 0 });
  const [time, setTime] = useState("8:30 AM");
  const [selectedTime, setSelectedTime] = useState(
    dayjs().set("hour", 8).set("minute", 30)
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
    calculateTimeRemaining(); // Inicializar al montar el componente
    const interval = setInterval(() => {
      calculateTimeRemaining(); // Actualización periódica
      console.log("Intervalo actualizado");
    }, 30000); // Actualizar cada 30 segundos
    return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonte
  }, [selectedTime]); // Dependencias del efecto

  const toggleModal = () => setModalOpen((prev) => !prev);

  const handleChange = (newValue) => {
    setSelectedTime(newValue);
  };

  const handleSave = () => {
    const formattedTime = selectedTime.format("hh:mm A");
    setTime(formattedTime);
    setConfig((prev) => ({ ...prev, despertar: formattedTime }));
    toggleModal();
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
            en {timeRemaining.horas} hora{timeRemaining.horas > 1 ? "s" : ""} y{" "}
            {timeRemaining.minutos} minuto{timeRemaining.minutos > 1 ? "s" : ""}
          </span>
        </Card>
      </div>
      {modalOpen && (
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
                  minutesStep={5}
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
      )}
    </>
  );
};

export default CardHorario;
