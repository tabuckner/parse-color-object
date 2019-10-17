import { ColorWithAlphaChannel } from './color-with-alpha-channel.interface';
import { IHsvColor } from './hsv-color.interface';

export interface IHsvaColor extends ColorWithAlphaChannel, IHsvColor { }