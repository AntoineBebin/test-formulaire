import { css, CSSObject, FlattenSimpleInterpolation, SimpleInterpolation } from 'styled-components'

export type Breakpoints = {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
  xxl: number
}

type BreakpointEntry = [keyof Breakpoints, Breakpoints[keyof Breakpoints]]
type Interpolation<T, R> = {
  [key in keyof T]: R
}

const sizes: Breakpoints = {
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600
}

interface CustomObject extends ObjectConstructor {
  entries<K extends keyof Breakpoints, T>(o: { [s in K]: T } | ArrayLike<T>): [K, T][]
}

const object: CustomObject = Object

const device = object.entries(sizes).reduce((acc, cur: BreakpointEntry) => {
  const [key, value] = cur
  acc[key] = (first, ...interpolations) => css`
    ${mediaQuery(value)} {
      ${css(first, ...interpolations)};
    }
  `
  return acc
}, {} as Interpolation<Breakpoints, (first: CSSObject | TemplateStringsArray, ...interpolations: SimpleInterpolation[]) => FlattenSimpleInterpolation>)

const media = object.entries(sizes).reduce((acc, cur: BreakpointEntry) => {
  const [key, value] = cur
  acc[key] = (style: TemplateStringsArray | string) => `${mediaQuery(value)} { ${style} }`
  return acc
}, {} as Interpolation<Breakpoints, (style: TemplateStringsArray | string) => string>)

const mediaQuery = (breakpoint: keyof Breakpoints | number, type: 'min' | 'max' = 'max'): string =>
  `@media only screen and (${type}-width: ${typeof breakpoint === 'number' ? breakpoint : sizes[breakpoint]}px)`

export { device, mediaQuery }

export default media
