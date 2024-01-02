import { Breakpoints } from '@/styles/media'

// Fix: T extends to type Class
export type MediaQueryObject<T> = {
  [K in keyof Breakpoints]?: Omit<T, 'media' | 'as'>
}

export interface StyledBaseProps {
  children?: React.ReactNode
  className?: string
}
