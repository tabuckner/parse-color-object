import * as _parseColor from 'parse-color';
import { IParsedColorObjects } from 'models/parsed-color-object.interface';
import { IRgbColor } from 'models/colors/rgb-color.interface';
import { IHslColor } from 'models/colors/hsl-color.interface';
import { IHsvColor } from 'models/colors/hsv-color.interface';
import { ICmykColor } from 'models/colors/cmyk-color.interface';
import { IRgbaColor } from 'models/colors/rgba-color.interface';
import { IHslaColor } from 'models/colors/hsla-color.interface';
import { IHsvaColor } from 'models/colors/hsva-color.interface';
import { ICmykaColor } from 'models/colors/cmyka-color.interface';
import { IParsedColorResponse } from 'models/parse-color-response.interface';

export const parseColor = (cssString: string): IParsedColorObjects => {
  const _parsedColor: IParsedColorResponse = _parseColor.default(cssString);
  const rgbObj = mapArrayToObject<IRgbColor>(_parsedColor.rgb, ['red', 'green', 'blue']);
  const hslObj = mapArrayToObject<IHslColor>(_parsedColor.hsl, ['hue', 'saturation', 'lightness']);
  const hsvObj = mapArrayToObject<IHsvColor>(_parsedColor.hsv, ['hue', 'saturation', 'value']);
  const cmykObj = mapArrayToObject<ICmykColor>(_parsedColor.cmyk, ['cyan', 'magenta', 'yellow', 'black']);
  const { keyword, hex } = _parsedColor;
  const rgbaObj = mapArrayToObject<IRgbaColor>(_parsedColor.rgba, ['red', 'green', 'blue', 'alpha']);
  const hslaObj = mapArrayToObject<IHslaColor>(_parsedColor.hsla, ['hue', 'saturation', 'lightness', 'alpha']);
  const hsvaObj = mapArrayToObject<IHsvaColor>(_parsedColor.hsva, ['hue', 'saturation', 'value', 'alpha']);
  const cmykaObj = mapArrayToObject<ICmykaColor>(_parsedColor.cmyka, ['cyan', 'magenta', 'yellow', 'black', 'alpha']);

  const returnObj = {
    rgb: rgbObj,
    hsl: hslObj,
    hsv: hsvObj,
    cmyk: cmykObj,
    keyword,
    hex,
    rgba: rgbaObj,
    hsla: hslaObj,
    hsva: hsvaObj,
    cmyka: cmykaObj
  };

  return returnObj;
}

const mapArrayToObject = <T>(orderedArr: any[], orderedObjectKeysArr: string[] | number[]): T => {
  const returnObj: any = {};
  for (const key of orderedObjectKeysArr) {
    returnObj[key] = undefined;
  }

  for (let i = 0; i < orderedArr.length; i++) {
    const sourceElement: any = orderedArr[i];
    const correspondingKey: any = orderedObjectKeysArr[i];
    returnObj[correspondingKey] = sourceElement;
  }

  return returnObj;
}
