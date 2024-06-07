import React from "react";
import Card from "./Card";
import { PiWavesBold } from "react-icons/pi";

const CardAroma = ({ setConfig, config }) => {
  const handleFromTimeChange = (e) => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      aroma: { ...prevConfig.aroma, desde: e.target.value },
    }));
  };

  const handleIntervalChange = (e) => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      aroma: { ...prevConfig.aroma, intervalo: e.target.value },
    }));
  };
  const handleOnOffChange = (e) => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      aroma: { ...prevConfig.aroma, active: e.target.checked },
    }));
  };
  return (
    <Card>
      <div className="flex flex-col gap-2">
        <div className="flex w-full justify-between">
          <span>Aroma</span>
          <label className="inline-flex items-center cursor-pointer">
            <input
              onChange={handleOnOffChange}
              type="checkbox"
              checked={config.aroma.active}
              className="sr-only peer"
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-300" />
          </label>
        </div>
        <div className="flex items-center gap-5">
          <div className="w-1/6 mt-5 h-fit rounded-full bg-white/30 shadow-inner shadow-white/20 border-white border-transparent border aspect-square border-icon grid place-content-center">
            <PiWavesBold className="text-xl" />
          </div>
          <div className="flex-1 flex flex-col gap-3">
            <label
              htmlFor="desde_aroma"
              className="flex flex-col gap-1 text-sm font-medium text-white"
            >
              <span>Desde</span>
              <select
                id="desde_aroma"
                onChange={handleFromTimeChange}
                defaultValue={config.aroma.desde}
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
              htmlFor="intervalo_aroma"
              className="flex flex-col gap-1 text-sm font-medium text-white"
            >
              <span>Intervalos</span>
              <select
                id="intervalo_aroma"
                onChange={handleIntervalChange}
                defaultValue={config.aroma.intervalo}
                className="bg-transparent border text-white text-sm rounded-lg block w-full p-2.5"
              >
                <option className="text-black" value="5">
                  Cada 5 minutos
                </option>
                <option className="text-black" value="10">
                  Cada 10 minutos
                </option>
                <option className="text-black" value="15">
                  Cada 15 minutos
                </option>
                <option className="text-black" value="20">
                  Cada 20 minutos
                </option>
                <option className="text-black" value="25">
                  Cada 25 minutos
                </option>
                <option className="text-black" value="30">
                  Cada 30 minutos
                </option>
              </select>
            </label>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CardAroma;
