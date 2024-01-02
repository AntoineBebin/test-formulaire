import PropTypes from 'prop-types'
import React from 'react'
import styled, { css } from 'styled-components'

import * as icons from './icons'

/**
 * PropTypes
 */
const propTypes = {
  icon: PropTypes.any.isRequired,
  size: PropTypes.number,
  onClick: PropTypes.func,
  className: PropTypes.string,
  fill: PropTypes.string,
  fillRect: PropTypes.string,
  stroke: PropTypes.string,
  hoverFill: PropTypes.string,
  style: PropTypes.shape({}),
  disabled: PropTypes.bool
}

/**
 * Default Props
 */
const defaultProps = {
  size: 24,
  fill: 'currentColor',
  stroke: 'none',
  disabled: false
}

export type IconTypes = keyof typeof icons

/**
 * @interface IconProps
 */
export interface IconProps {
  icon: IconTypes
  size?: number
  width?: string
  className?: string
  onClick?: (e: React.MouseEvent) => void
  fill?: string
  fillRect?: string
  strokeRect?: string
  stroke?: string
  hoverFill?: string
  disabled?: boolean
  cursorPointer?: boolean
  hover?: boolean
  unclickable?: boolean
  style?: React.CSSProperties
}

const Icon: React.FC<IconProps> = props => {
  const onClick = (e: React.MouseEvent) => {
    props.onClick && props.onClick(e)
  }

  // Get icon to store icon
  const SvgIcon = icons[props.icon]

  if (!SvgIcon) {
    throw new Error(`icon ${props.icon} doesn't exist`)
  }

  const { width, hover, size, fill, fillRect, strokeRect, hoverFill, cursorPointer, stroke, disabled, style, unclickable } = props

  return (
    <IconLayout width={width} hover={hover}>
      <IconWrapper
        className={props.className}
        size={size}
        fill={fill}
        fillRect={fillRect}
        stroke={stroke}
        strokeRect={strokeRect}
        hoverFill={hoverFill}
        onClick={!disabled ? onClick : undefined}
        cursorPointer={cursorPointer}
        disabled={disabled}
        unclickable={unclickable}
        style={style}
      >
        <SvgIcon />
      </IconWrapper>
    </IconLayout>
  )
}

Icon.defaultProps = defaultProps
Icon.propTypes = propTypes

export default React.memo(Icon, (prevProps: any, nextProps: any) => {
  const ignores = ['onClick']
  for (const prop in propTypes) {
    if (ignores.indexOf(prop) !== -1) {
      continue
    }

    if (prevProps[prop] !== nextProps[prop]) {
      return false
    }
  }
  return true
})

const IconWrapper = styled.div<{
  size?: number
  fill?: string
  stroke?: string
  fillRect?: string
  strokeRect?: string
  hoverFill?: string
  cursorPointer?: boolean
  disabled?: boolean
  unclickable?: boolean
}>`
  display: block;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  position: relative;
  cursor: ${props => (props.cursorPointer ? 'pointer' : 'inherit')};
  ${props =>
    props.disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.3;
    `}
  svg {
    display: block;
    width: 100%;
    height: 100%;
    fill: ${props => props.fill};
    stroke: ${props => props.stroke};
  }
  path {
    fill: ${props => props.fill};
    stroke: ${props => props.stroke};
  }
  rect {
    fill: ${props => props.fillRect};
    stroke: ${props => props.strokeRect};
  }
  &:hover svg,
  &:hover path {
    fill: ${props => (props.hoverFill ? props.hoverFill : props.fill)};
  }

  ${({ unclickable }) =>
    unclickable &&
    css`
      pointer-events: none;
    `}
`

const IconLayout = styled.div<{ width?: string; hover?: boolean }>`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: ${({ width }) => width};
  height: auto;

  ${({ hover }) =>
    hover &&
    css`
      transition: color 0.2s ease-in-out;
      &:hover {
        color: rgba(23, 56, 75, 0.8); // Todo set value to styles variables
      }
    `}
`
