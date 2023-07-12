import styled from "styled-components";
import { useState } from 'react';

interface MovableBlockProps  {
    left : number;
}

const MovableBlockDiv = styled.div`
display: flex;
height: 2rem;
justify-content: center;
align-items: center;
align-self: stretch;
width: 34.5rem;
height: 2rem;
`
const FilterLine = styled.div`
flex: 1 0 0;
align-self: stretch;
border-radius: 0.5rem;
background: var(--global-secondary-white-highlight, #FCFCFC);
width: 34.5rem;
height: 0.25rem;
`
const MovableBlock = styled.div<MovableBlockProps>`
width: 2rem;
height: 2rem;
flex-shrink: 0;
border-radius: 0.5rem;
background: var(--cra-main-metallic-seaweed, #0E738A);
position: relative;
cursor: move;
display: flex;
justify-content: center;
align-items: center;
`
const MovableBlockText = styled.span`
color : white;
`
interface FilterBarProps {
    positionX: number;
    onPositionXChange : (newX: number) => void;
}

const FilterBar = ({ positionX, onPositionXChange}: FilterBarProps) => {

    

    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
        const initialMouseX = event.clientX;
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    
        function handleMouseMove(event: MouseEvent) {
          const filterLineWidth = 34.5 * 16;
          const blockWidth = 2 * 16;
    
          let newX = event.clientX - initialMouseX;
          newX = Math.max(0, Math.min(newX, filterLineWidth - blockWidth));
          onPositionXChange(newX);
        }
    
        function handleMouseUp() {
          document.removeEventListener('mousemove', handleMouseMove);
          document.removeEventListener('mouseup', handleMouseUp);
        }
      };


    return(
        <MovableBlockDiv>
            <FilterLine>
                <MovableBlock
                style={{ left : `${positionX}px`}}
                onMouseDown={handleMouseDown}                
                ><MovableBlockText>{positionX}</MovableBlockText></MovableBlock>
            </FilterLine>
        </MovableBlockDiv>
    )
};

export default FilterBar;