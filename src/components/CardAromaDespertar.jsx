import React from "react";
import Card from "./Card";
import { PiWavesBold } from "react-icons/pi";
import Options from "./Options";

const CardAromaDespertar = ({ setConfig, config }) => {
  const handleFromTimeChange = (e) => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      aroma: {
        ...prevConfig.aroma,
        despertar: { ...prevConfig.aroma.despertar, desde: e.target.value },
      },
    }));
  };

  const handleHastaChange = (e) => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      aroma: {
        ...prevConfig.aroma,
        despertar: { ...prevConfig.aroma.despertar, hasta: parseInt(e.target.value) },
      },
    }));
  };
  const handleOnOffChange = (e) => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      aroma: {
        ...prevConfig.aroma,
        despertar: { ...prevConfig.aroma.despertar, active: e.target.checked },
      },
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
              checked={config.aroma.despertar.active}
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
                <Options />
              </select>
            </label>
            <label
              htmlFor="hasta_despertar_aroma"
              className="flex flex-col gap-1 text-sm font-medium text-white"
            >
              <span>Hasta</span>
              <select
                id="hasta_despertar_aroma"
                onChange={handleHastaChange}
                defaultValue={config.aroma.hasta}
                className="bg-transparent border text-white text-sm rounded-lg block w-full p-2.5"
              >
                <Options post />
              </select>
            </label>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CardAromaDespertar;
