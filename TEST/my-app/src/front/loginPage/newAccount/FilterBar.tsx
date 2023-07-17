import styled, {css} from "styled-components";
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
const FilterLine = styled.div<{active : boolean; positionX: number}>(({ active, positionX }) =>`
flex: 1 0 0;
align-self: stretch;
border-radius: 0.5rem;
background: ${active ? "#0e738a" : "var(--global-secondary-white-highlight, #fcfcfc)"}
width: 34.5rem;
height: 0.25rem;

&:before{
    content: "";
    position: absolute;
    top:0;
    left:0;
    height: 100%;
    width: ${positionX}px;
    background: #0e738a;
}
`)
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

    const [active, setActive] = useState(false);

    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
        const initialMouseX = event.clientX;
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    
        function handleMouseMove(event: MouseEvent) {
          const filterLineWidth = 34.5 * 16;
          const blockWidth = 2 * 16;
          const barWidth = filterLineWidth - blockWidth;
          const halfBlockWidth = blockWidth / 2;
    
          let newX = event.clientX - initialMouseX;
          newX = Math.max(0, Math.min(newX, barWidth));
          onPositionXChange(newX);

          const passedTreshold = newX >= positionX - halfBlockWidth;
          setActive(passedTreshold);
        }
    
        function handleMouseUp() {
          document.removeEventListener('mousemove', handleMouseMove);
          document.removeEventListener('mouseup', handleMouseUp);
        }
      };

      const blockWidth = 2 * 16;

    return(
        <MovableBlockDiv>
            <FilterLine active={active} positionX={positionX}>
                <MovableBlock
                style={{ left : `${positionX - blockWidth / 2}px`}}
                onMouseDown={handleMouseDown}>              
                <MovableBlockText>{positionX}</MovableBlockText>
                </MovableBlock>
            </FilterLine>
        </MovableBlockDiv>
    )
};

export default FilterBar;