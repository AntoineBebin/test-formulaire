import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'

interface GridLayoutPros {
  count?: number
  color?: string
  width?: number
  gutter?: number
}
export const GridLayout: React.FC<GridLayoutPros> = ({ count = 12, width = 72, gutter = 24, color = '#ff0000' }) => {
  const [columns, setColumns] = useState<number[]>([])

  useEffect(() => {
    const _columns = []

    for (let index = 0; index < count; index++) {
      _columns[index] = index
    }

    setColumns(_columns)
  }, [count])

  return (
    <GridWrapper>
      <InnerGrid count={count} width={width} gutter={gutter}>
        {columns.map(index => (
          <GridColumn background={color} key={index}>
            {index}
          </GridColumn>
        ))}
      </InnerGrid>
    </GridWrapper>
  )
}

const GridWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;

  z-index: 9999;
`

const InnerGrid = styled.div<Required<Pick<GridLayoutPros, 'count' | 'width' | 'gutter'>>>`
  display: grid;
  grid-template-rows: auto;
  justify-content: center;
  height: 100%;

  ${({ count, width, gutter }) => css`
    grid-template-columns: repeat(${count}, ${width}px);
    column-gap: ${gutter}px;
  `}
`

const GridColumn = styled.div<{ background: string }>`
  background-color: ${({ background }) => background};
  height: 100%;
  opacity: 0.1;
`
