import styled, {css} from "styled-components";

interface ProgressProps {
    progress: number;
    color: string;
};
const Bar = styled.div<ProgressProps>`
${(props: any) => css`
    width: ${props.progress}%;
    height: 4px;
    opacity: 0.4;
    background: ${props.color};
  `}
`
const ProgressBar = () => {

    return(
        <Bar progress={50} color="var(--cra-main-metallic-seaweed, #0E738A)"/>
    );
}

export default ProgressBar;