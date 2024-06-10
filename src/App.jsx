import { useEffect, useState } from "react";
import CardHorario from "./components/CardHorario";
import CardLuzAmbiental from "./components/CardLuzAmbiental";
import CardAroma from "./components/CardAroma";
import CardSonidoAmbiental from "./components/CardSonidoAmbiental";
import CardHorarioAcostarse from "./components/CardHorarioAcostarse";
import CardLuzAmbientalDespertar from "./components/CardLuzAmbientalDespertar";
import CardAromaDespertar from "./components/CardAromaDespertar";
import CardSonidoAmbientalDespertar from "./components/CardSonidoAmbientalDespertar";
import CardAlarmaDespertar from "./components/CardAlarmaDespertar";

export default function App() {
  localStorage.removeItem("config");

  const [nav, setNav] = useState(1);
  const defaultConfig = {
    despertar: { hora: 8, minuto: 30 },
    acostarse: { hora: 20, minuto: 30 },
    luzAmbiental: {
      active: true,
      desde: 5,
      hasta: 5,
      color: { r: 241, g: 112, b: 19, a: 1 },
      despertar: {
        active: true,
        intervalo: 10,
        desde: 5,
        hasta: 5,
        color: { r: 241, g: 112, b: 19, a: 1 },
      },
    },
    aroma: {
      active: true,
      desde: 5,
      intervalo: 10,
      despertar: {
        active: true,
        intervalo: 10,
        desde: 5,
      },
    },
    sonidoAmbiental: {
      active: true,
      volumen: 50,
      desde: 5,
      hasta: 5,
      sonido: "lluvia",
      despertar: {
        active: true,
        intervalo: 10,
        desde: 5,
        sonido: "lluvia",
      },
    },
    alarma: {
      active: true,
      sonido: "guitarra",
      volumen: 60,
    },
  };
  const storedItem = localStorage.getItem("config");
  const [config, setConfig] = useState(
    storedItem ? JSON.parse(storedItem) : defaultConfig
  );

  useEffect(() => {
    localStorage.setItem("config", JSON.stringify(config));
    console.log(config);
  }, [config]);

  return (
    <div className="container overflow-hidden pb-5 space-y-5 text-white px-5 pt-10 mx-auto min-h-screen bg-gradient">
      <h1 className="font-bold text-4xl">Establece tu rutina</h1>
      <div className="w-full flex justify-around rounded-full border-4 border-gray-900 bg-gray-900 relative">
        <button
          onClick={() => setNav(1)}
          className={`${
            nav === 2 && "!text-gray-500"
          } w-full p-3 transition text-white relative z-10 font-bold`}
        >
          Acostarse
        </button>
        <button
          onClick={() => setNav(2)}
          className={`${
            nav === 1 && "!text-gray-500"
          } w-full p-3 transition text-white relative z-10 font-bold`}
        >
          Despertar
        </button>
        <div
          className={`absolute w-1/2 h-full top-0 rounded-full bg-blue-900 transition-all duration-300 ease-in-out ${
            nav === 2 ? "translate-x-1/2" : "-translate-x-1/2"
          }`}
        ></div>
      </div>
      <div
        className={`flex gap-5 transition duration-300 ${
          nav === 1 ? "translate-x-0" : "-translate-x-[calc(100%+1.25rem)]"
        }`}
      >
        {/* Acostarse */}
        <div className="flex min-w-[calc(100svw-2.5rem)] flex-row">
          <div className="flex w-full container flex-col gap-5">
            <CardHorarioAcostarse config={config} setConfig={setConfig} />
            <CardLuzAmbiental config={config} setConfig={setConfig} />
            <CardAroma config={config} setConfig={setConfig} />
            <CardSonidoAmbiental config={config} setConfig={setConfig} />
          </div>
        </div>

        {/* Despertar */}
        <div className="flex flex-row min-w-[calc(100svw-2.5rem)]">
          <div className="flex w-full container flex-col gap-5">
            <CardHorario config={config} setConfig={setConfig} />

            <CardAlarmaDespertar config={config} setConfig={setConfig} />
            <CardLuzAmbientalDespertar config={config} setConfig={setConfig} />
            <CardAromaDespertar config={config} setConfig={setConfig} />
            <CardSonidoAmbientalDespertar
              config={config}
              setConfig={setConfig}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
