import { IRgbColor } from './colors/rgb-color.interface';
import { IHslColor } from './colors/hsl-color.interface';
import { IHsvColor } from './colors/hsv-color.interface';
import { ICmykColor } from './colors/cmyk-color.interface';
import { IRgbaColor } from './colors/rgba-color.interface';
import { IHslaColor } from './colors/hsla-color.interface';
import { IHsvaColor } from './colors/hsva-color.interface';
import { ICmykaColor } from './colors/cmyka-color.interface';

export interface IParsedColorObjects {
  rgb: IRgbColor,
  hsl: IHslColor,
  hsv: IHsvColor,
  cmyk: ICmykColor,
  keyword: string,
  hex: string,
  rgba: IRgbaColor,
  hsla: IHslaColor,
  hsva: IHsvaColor,
  cmyka: ICmykaColor,
}
