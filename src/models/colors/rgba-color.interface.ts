import { ColorWithAlphaChannel } from './color-with-alpha-channel.interface';
import { IRgbColor } from './rgb-color.interface';

export interface IRgbaColor extends ColorWithAlphaChannel, IRgbColor { }