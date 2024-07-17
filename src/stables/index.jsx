export const defaultConfig = {
  despertar: { hora: 8, minuto: 30 },
  acostarse: { hora: 20, minuto: 30 },
  luzAmbiental: {
    active: true,
    desde: 5,
    hasta: 5,
    color: { r: 241, g: 112, b: 19, a: 1 },
    despertar: {
      active: true,
      desde: 5,
      hasta: 5,
      color: { r: 241, g: 112, b: 19, a: 1 },
    },
  },
  aroma: {
    active: true,
    desde: 5,
    hasta: 10,
    despertar: {
      active: true,
      hasta: 10,
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
      hasta: 10,
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
