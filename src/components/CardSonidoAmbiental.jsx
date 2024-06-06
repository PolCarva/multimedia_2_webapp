import React from "react";
import Card from "./Card";
import { FaVolumeLow } from "react-icons/fa6";

const CardSonidoAmbiental = ({ setConfig }) => {
  const handleChange = (e, key) => {
    setConfig((prev) => ({
      ...prev,
      sonidoAmbiental: {
        ...prev.sonidoAmbiental,
        [key]: e.target.value,
      },
    }));
  };

  const handleActiveChange = (e) => {
    setConfig((prev) => ({
      ...prev,
      sonidoAmbiental: {
        ...prev.sonidoAmbiental,
        active: e.target.checked,
      },
    }));
  }

  return (
    <Card>
      <div className="flex flex-col gap-2">
        <div className="flex w-full justify-between">
          <span>Sonido ambiental</span>
          <label className="inline-flex items-center cursor-pointer">
            <input onChange={handleActiveChange} type="checkbox" defaultValue="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-300" />
          </label>
        </div>
        <div className="flex items-center gap-5">
          <div className="w-1/6 mt-5 h-fit rounded-full bg-white/30 shadow-inner shadow-white/20 border-white border-transparent border aspect-square border-icon grid place-content-center">
            <FaVolumeLow className="text-xl" />
          </div>
          <div className="flex-1 flex flex-col gap-3">
            <label
              htmlFor="desde_sonido"
              className="flex flex-col gap-1 text-sm font-medium text-white"
            >
              <span>Desde</span>
              <select
                onChange={(e) => handleChange(e, "tiempo_antes")}
                defaultValue={"5"}
                id="desde_sonido"
                className="bg-transparent border text-white text-sm rounded-lg block w-full p-2.5"
              >
                <option className="text-black" value="5">
                  5 minutos antes
                </option>
                <option className="text-black" value="10">
                  10 minutos antes
                </option>
                <option className="text-black" value="15">
                  15 minutos antes
                </option>
                <option className="text-black" value="20">
                  20 minutos antes
                </option>
                <option className="text-black" value="25">
                  25 minutos antes
                </option>
                <option className="text-black" value="30">
                  30 minutos antes
                </option>
              </select>
            </label>
            <label
              htmlFor="hasta_sonido"
              className="flex flex-col gap-1 text-sm font-medium text-white"
            >
              <span>Hasta</span>
              <select
                onChange={(e) => handleChange(e, "hasta")}
                defaultValue={"5"}
                id="hasta_sonido"
                className="bg-transparent border text-white text-sm rounded-lg block w-full p-2.5"
              >
                <option className="text-black" value="5">
                  5 minutos después
                </option>
                <option className="text-black" value="10">
                  10 minutos después
                </option>
                <option className="text-black" value="15">
                  15 minutos después
                </option>
                <option className="text-black" value="20">
                  20 minutos después
                </option>
                <option className="text-black" value="25">
                  25 minutos después
                </option>
                <option className="text-black" value="30">
                  30 minutos después
                </option>
              </select>
            </label>
            <label
              htmlFor="sonido_tipo"
              className="flex flex-col gap-1 text-sm font-medium text-white"
            >
              <span>Sonido</span>
              <select
                onChange={(e) => handleChange(e, "sonido")}
                defaultValue={"lluvia"}
                id="sonido_tipo"
                className="bg-transparent border text-white text-sm rounded-lg block w-full p-2.5"
              >
                <option className="text-black" value="lluvia">
                  Lluvia
                </option>
                <option className="text-black" value="zen">
                  Zen
                </option>
                <option className="text-black" value="jungla">
                  Jungla
                </option>
                <option className="text-black" value="guitarra">
                  Guitarra
                </option>
                <option className="text-black" value="piano">
                  Piano
                </option>
              </select>
            </label>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CardSonidoAmbiental;
