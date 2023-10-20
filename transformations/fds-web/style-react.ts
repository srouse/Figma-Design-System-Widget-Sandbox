/* eslint-disable */
import { FDSWSProp } from "./css-atoms";
import type * as CSS from 'csstype';

/**
 * FDSWS
 * Function for dynamically creating and auto-completing
 * FDSWS design system files.
 * @param {DSysProp} dsysStyles
 * @param {Object} CSS.Properties
 * @return {CSS.Properties}
 */
export default function fdsws(
  dsysStyles: FDSWSProp,
  otherStyles: CSS.Properties = {},
) : CSS.Properties {
  const dsysStylesObj: {[key:`--FDSWS-${string}`]: string} = {};
  Object.entries(dsysStyles).map((entry) => {
    if (entry[1] === true) {
      dsysStylesObj[`--fdsws-${entry[0]}`] = '1';
    }else{
      dsysStylesObj[`--fdsws-${entry[0]}`] = `var( --fdsws-${entry[1]} )`;
    }
  });
  return {
    ...dsysStylesObj,
    ...otherStyles,
  };
}
