import { hexRgb } from './hex-rgb'

// https://www.w3.org/TR/AERT/#color-contrast
const RED_BRIGHTNESS = 299
const GREEN_BRIGHTNESS = 587
const BLUE_BRIGHTNESS = 114
const BASE = 1000
const BRIGHTNETSS_LIMIT = 125

export const getTextColor = (color?: string): string => {
  // return default color
  if (!color) return '#FFFFFF'

  const { red, green, blue } = hexRgb(color)
  const brightness = Math.round((red * RED_BRIGHTNESS + green * GREEN_BRIGHTNESS + blue * BLUE_BRIGHTNESS) / BASE)

  return brightness > BRIGHTNETSS_LIMIT ? '#000000' : '#FFFFFF'
}
