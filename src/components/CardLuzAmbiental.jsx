import React, { useState } from "react";
import Card from "./Card";
import { FaLightbulb } from "react-icons/fa";
import { SliderPicker, AlphaPicker } from "react-color";
import Options from "./Options";

const CardLuzAmbiental = ({ setConfig, config }) => {
  const [color, setColor] = useState(config.luzAmbiental.color);

  const handleOnOffChange = (e) => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      luzAmbiental: { ...prevConfig.luzAmbiental, active: e.target.checked },
    }));
  };

  const handleChangeColor = (color) => {
    setColor(color.rgb);
    setConfig((prevConfig) => ({
      ...prevConfig,
      luzAmbiental: { ...prevConfig.luzAmbiental, color: color.rgb },
    }));
  };

  const handleChangeAlpha = (color) => {
    setColor((prevColor) => ({ ...prevColor, a: color.rgb.a }));
    setConfig((prevConfig) => ({
      ...prevConfig,
      luzAmbiental: { ...prevConfig.luzAmbiental, color: color.rgb },
    }));
  };

  const handleFromTimeChange = (e) => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      luzAmbiental: { ...prevConfig.luzAmbiental, desde: e.target.value },
    }));
  };

  const handleToTimeChange = (e) => {
    setConfig((prevConfig) => ({
      ...prevConfig,
      luzAmbiental: {
        ...prevConfig.luzAmbiental,
        hasta: parseInt(e.target.value),
      },
    }));
  };

  return (
    <Card>
      <div className="flex flex-col gap-2">
        <div className="flex w-full justify-between">
          <span>Luz ambiental</span>
          <label className="inline-flex items-center cursor-pointer">
            <input
              onChange={handleOnOffChange}
              type="checkbox"
              checked={config.luzAmbiental.active}
              className="sr-only peer"
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-300" />
          </label>
        </div>
        <div className="flex items-center gap-5">
          <div className="w-1/6 mt-5 h-fit rounded-full bg-white/30 shadow-inner shadow-white/20 border-white border-transparent border aspect-square border-icon grid place-content-center">
            <FaLightbulb className="text-xl" />
          </div>
          <div className="flex-1 flex flex-col gap-3">
            <label className="flex flex-col gap-1">
              <span className="text-sm">Color</span>
              <SliderPicker color={color} onChange={handleChangeColor} />
            </label>
            <label className="flex flex-col gap-1">
              <span className="text-sm">Intensidad</span>
              <AlphaPicker color={color} onChange={handleChangeAlpha} />
            </label>
            <label
              htmlFor="minutos_antes_luz_ambiental"
              className="flex flex-col gap-1 text-sm font-medium text-white"
            >
              <span>Desde</span>
              <select
                onChange={handleFromTimeChange}
                id="minutos_antes_luz_ambiental"
                defaultValue={config.luzAmbiental.desde}
                className="bg-transparent border text-white text-sm rounded-lg block w-full p-2.5"
              >
                <Options />
              </select>
            </label>
            <label
              htmlFor="hasta_luz_ambiental"
              className="flex flex-col gap-1 text-sm font-medium text-white"
            >
              <span>Hasta</span>
              <select
                onChange={handleToTimeChange}
                id="hasta_luz_ambiental"
                defaultValue={config.luzAmbiental.hasta}
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

export default CardLuzAmbiental;
