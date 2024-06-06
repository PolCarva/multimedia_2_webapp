import { useEffect, useState } from "react";
import CardHorario from "./components/CardHorario";
import CardLuzAmbiental from "./components/CardLuzAmbiental";
import CardAroma from "./components/CardAroma";
import CardSonidoAmbiental from "./components/CardSonidoAmbiental";

export default function App() {
  const [nav, setNav] = useState(1);
  const [config, setConfig] = useState({
    despertar: "8:30am",
    luzAmbiental: {
      desde: 5,
      hasta: 5,
      color: { r: 241, g: 112, b: 19, a: 1 }
    },
    aroma: {},
    sonidoAmbiental: {},
  });

 
  useEffect(() => {
    console.log(config);
  }, [config]);

  return (
    <div className="container flex flex-col gap-5 text-white px-5 pt-10 mx-auto min-h-screen bg-gradient-to-br from-indigo-950 via-indigo-900 to-indigo-950">
      <h1 className="font-bold text-4xl">Establece tu rutina</h1>
      <div className="w-full flex justify-around rounded-full border-4 border-gray-900 bg-gray-900 relative">
        <button
          onClick={() => setNav(1)}
          className={`${
            nav === 2 && "!text-gray-500"
          } w-full p-3 transition text-white relative z-10 font-bold`}
        >
          Despertar
        </button>
        <button
          onClick={() => setNav(2)}
          className={`${
            nav === 1 && "!text-gray-500"
          } w-full p-3 transition text-white relative z-10 font-bold`}
        >
          Acostarse
        </button>
        <div
          className={`absolute w-1/2 h-full top-0 rounded-full bg-blue-900 transition-all duration-300 ease-in-out ${
            nav === 2 ? "translate-x-1/2" : "-translate-x-1/2"
          }`}
        ></div>
      </div>
      <CardHorario setConfig={setConfig} />
      <CardLuzAmbiental setConfig={setConfig} />
      <CardAroma setConfig={setConfig}/>
      <CardSonidoAmbiental setConfig={setConfig} />
    </div>
  );
}
