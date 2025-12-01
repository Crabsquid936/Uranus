// src/utils.js

/**
 * Clamp a value between min and max.
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
import { clamp, randomColor, degToRad, lerp } from './utils.js';

export function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

/**
 * Generate a random color in hex format.
 * @returns {string}
 */
export function randomColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
}

/**
 * Converts degrees to radians.
 * @param {number} deg
 * @returns {number}
 */
export function degToRad(deg) {
  return deg * (Math.PI / 180);
}

/**
 * Converts radians to degrees.
 * @param {number} rad
 * @returns {number}
 */
export function radToDeg(rad) {
  return rad * (180 / Math.PI);
}

/**
 * Linearly interpolate between two numbers.
 * @param {number} a
 * @param {number} b
 * @param {number} t Between 0 and 1
 * @returns {number}
 */
export function lerp(a, b, t) {
  return a + (b - a) * t;
}
