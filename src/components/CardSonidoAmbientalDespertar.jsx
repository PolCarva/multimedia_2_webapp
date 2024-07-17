import React from "react";
import Card from "./Card";
import { FaVolumeLow } from "react-icons/fa6";
import { Slider } from "@mui/material";
import Options from "./Options";

const CardSonidoAmbientalDespertar = ({ setConfig, config }) => {
  const handleChange = (e, key) => {
    setConfig((prev) => ({
      ...prev,
      sonidoAmbiental: {
        ...prev.sonidoAmbiental,
        despertar: {
          ...prev.sonidoAmbiental.despertar,
          [key]:
            typeof e.target.value === "string"
              ? parseInt(e.target.value)
              : e.target.value,
        },
      },
    }));
  };

  const handleActiveChange = (e) => {
    setConfig((prev) => ({
      ...prev,
      sonidoAmbiental: {
        ...prev.sonidoAmbiental,
        despertar: {
          ...prev.sonidoAmbiental.despertar,
          active: e.target.checked,
        },
      },
    }));
  };

  return (
    <Card>
      <div className="flex flex-col gap-2">
        <div className="flex w-full justify-between">
          <span>Sonido ambiental</span>
          <label className="inline-flex items-center cursor-pointer">
            <input
              onChange={handleActiveChange}
              type="checkbox"
              checked={config.sonidoAmbiental.despertar.active}
              className="sr-only peer"
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-300" />
          </label>
        </div>
        <div className="flex items-center gap-5">
          <div className="w-1/6 mt-5 h-fit rounded-full bg-white/30 shadow-inner shadow-white/20 border-white border-transparent border aspect-square border-icon grid place-content-center">
            <FaVolumeLow className="text-xl" />
          </div>

          <div className="flex-1 flex flex-col gap-3">
            <label className="flex mt-2 flex-col text-sm font-medium text-white">
              <span className="-mb-4">Volumen</span>
              <Slider
                onChange={(e) => handleChange(e, "volumen")}
                valueLabelDisplay="auto"
                valueLabelFormat={(x) => `${x}%`}
                defaultValue={config.sonidoAmbiental.despertar.volumen || 60}
                marks
                min={20}
                max={100}
                step={20}
                className="!h-3"
                color="white"
              />
            </label>

            <label
              htmlFor="desde_sonido"
              className="flex flex-col gap-1 text-sm font-medium text-white"
            >
              <span>Desde</span>
              <select
                onChange={(e) => handleChange(e, "desde")}
                defaultValue={config.sonidoAmbiental.despertar.desde || 5}
                id="desde_sonido"
                className="bg-transparent border text-white text-sm rounded-lg block w-full p-2.5"
              >
                <Options />
              </select>
            </label>

            <label
              htmlFor="sonido_tipo"
              className="flex flex-col gap-1 text-sm font-medium text-white"
            >
              <span>Sonido</span>
              <select
                onChange={(e) => handleChange(e, "sonido")}
                defaultValue={config.sonidoAmbiental.despertar.sonido || 1}
                id="sonido_tipo"
                className="bg-transparent border text-white text-sm rounded-lg block w-full p-2.5"
              >
                <option className="text-black" value={1}>
                  Tibetano
                </option>
                <option className="text-black" value={2}>
                  Bosque
                </option>
                <option className="text-black" value={3}>
                  Océano
                </option>
                <option className="text-black" value={4}>
                  Lluvia
                </option>
                <option className="text-black" value={5}>
                  Jungla
                </option>
              </select>
            </label>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CardSonidoAmbientalDespertar;
