export const getImageSource = (sign: string) => {
  let source;
  switch (sign) {
    case "Aries":
      source = require("../../assets/zodiacs_symbols/aries.png");
      break;
    case "Taurus":
      source = require("../../assets/zodiacs_symbols/taurus.png");
      break;
    case "Gemini":
      source = require("../../assets/zodiacs_symbols/gemini.png");
      break;
    case "Cancer":
      source = require("../../assets/zodiacs_symbols/cancer.png");
      break;
    case "Leo":
      source = require("../../assets/zodiacs_symbols/leo.png");
      break;
    case "Virgo":
      source = require("../../assets/zodiacs_symbols/virgo.png");
      break;
    case "Libra":
      source = require("../../assets/zodiacs_symbols/libra.png");
      break;
    case "Scorpio":
      source = require("../../assets/zodiacs_symbols/scorpio.png");
      break;
    case "Sagittarius":
      source = require("../../assets/zodiacs_symbols/sagittarius.png");
      break;
    case "Capricorn":
      source = require("../../assets/zodiacs_symbols/capricorn.png");
      break;
    case "Aquarius":
      source = require("../../assets/zodiacs_symbols/aquarius.png");
      break;
    case "Pisces":
      source = require("../../assets/zodiacs_symbols/pisces.png");
      break;
    default:
      source = require("../../assets/zodiacs_symbols/aries.png");
      break;
  }

  return source;
};
