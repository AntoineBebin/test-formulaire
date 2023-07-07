import styled from "styled-components";
import { useState } from 'react';

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
const MovableBlock = styled.div<{left: number}>`
width: 2rem;
height: 2rem;
flex-shrink: 0;
border-radius: 0.5rem;
background: var(--cra-main-metallic-seaweed, #0E738A);
position: relative;
cursor: move;
left : 0px;
`

const FilterBar = () => {

    const [positionX, setPositionX] = useState<number>(0);

    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
        const initialMouseX = event.clientX;
    

    const handleMouseMove = (event: MouseEvent) => {
        const filterLineWidth = 34.5 * 16;
        const blockWidth = 2* 16;

        let newX = event.clientX - initialMouseX;
        newX = Math.max(0, Math.min(newX, filterLineWidth - blockWidth));
        setPositionX(newX);
    };
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup',() => {
        document.removeEventListener('mousemove', handleMouseMove);
    });
    filtrerBar(positionX);
};

    const filtrerBar = (positionX: number) => {
        const filterLineWidth = 34.5 * 16;
        const plageMin = 0;
        const plageMax = 100;
        const nombreSalariesFiltres = Math.round((positionX / (filterLineWidth -32)) * (plageMax - plageMin) + plageMin);

        console.log(nombreSalariesFiltres);
    }


    return(
        <MovableBlockDiv>
            <FilterLine>
                <MovableBlock
                left={positionX}
                onMouseDown={handleMouseDown}
                ></MovableBlock>
            </FilterLine>
        </MovableBlockDiv>
    )
};

export default FilterBar;