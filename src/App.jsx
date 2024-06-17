import { useEffect, useState } from "react";
import { database } from "../firebaseconfig";
import { get, push, ref, set } from "firebase/database";

// Importa tus componentes aquí
import CardHorario from "./components/CardHorario";
import CardLuzAmbiental from "./components/CardLuzAmbiental";
import CardAroma from "./components/CardAroma";
import CardSonidoAmbiental from "./components/CardSonidoAmbiental";
import CardHorarioAcostarse from "./components/CardHorarioAcostarse";
import CardLuzAmbientalDespertar from "./components/CardLuzAmbientalDespertar";
import CardAromaDespertar from "./components/CardAromaDespertar";
import CardSonidoAmbientalDespertar from "./components/CardSonidoAmbientalDespertar";
import CardAlarmaDespertar from "./components/CardAlarmaDespertar";
import { defaultConfig } from "./stables";

export default function App() {
  const [nav, setNav] = useState(1);
  const [config, setConfig] = useState({});

  const getConfig = async (e) => {
    try {
      const configRef = ref(database, "Config");
      const snapshot = await get(configRef);
      if (snapshot.exists()) {
        const configVal = snapshot.val();
        setConfig(configVal);
        console.log("Config data:", config);
      } else {
        await set(ref(database, "Config"), defaultConfig);
        setConfig(defaultConfig);
      }
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const setConfigDB = async (config) => {
    try {
      await set(ref(database, "Config"), config);
      console.log("Config data:", config);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    if (Object.keys(config).length > 0) {
      setConfigDB(config);
    }
  }, [config]);

  if (Object.keys(config).length === 0) {
    return <div className="w-full h-svh grid place-content-center bg-gradient text-white text-xl font-bold text-center">Loading...</div>;
  }

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
