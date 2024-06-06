import React, { useState } from "react";
import Card from "./Card";
import { FaLightbulb } from "react-icons/fa";
import { SliderPicker, AlphaPicker } from "react-color";

const CardLuzAmbiental = ({ setConfig }) => {
  const [color, setColor] = useState({ r: 241, g: 112, b: 19, a: 1 });

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
      luzAmbiental: { ...prevConfig.luzAmbiental, color: color.rgb},
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
      luzAmbiental: { ...prevConfig.luzAmbiental, hasta: e.target.value },
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
              defaultValue=""
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
                defaultValue="5"
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
              htmlFor="hasta_luz_ambiental"
              className="flex flex-col gap-1 text-sm font-medium text-white"
            >
              <span>Hasta</span>
              <select
                onChange={handleToTimeChange}
                id="hasta_luz_ambiental"
                defaultValue="5"
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
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CardLuzAmbiental;
