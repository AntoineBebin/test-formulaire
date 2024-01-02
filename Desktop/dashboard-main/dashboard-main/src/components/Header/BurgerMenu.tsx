import styled from 'styled-components'

export const BugerMenu = () => {
  const handleClick = (event: React.MouseEvent<SVGElement, MouseEvent>) => {
    event.currentTarget.classList.toggle('active')
  }
  return (
    <TriggerButton className="trigger">
      <Bars className="bars" viewBox="0 0 100 100" onClick={handleClick}>
        <LineTop
          className="line top"
          d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"
        ></LineTop>
        <LineMiddle
          className="line middle"
          d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"
        ></LineMiddle>
        <LineBottom
          className="line bottom"
          d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"
        ></LineBottom>
      </Bars>
    </TriggerButton>
  )
}
const TriggerButton = styled.div`
  position: absolute;
  background: #ffd966;
  border-radius: 4px;
  width: 48px;
  height: 48px;
`

const Bars = styled.svg`
  width: 48px;
  cursor: pointer;
`

const Line = styled.path`
  fill: none;
  stroke: #202124;
  stroke-width: 4;
  stroke-linecap: square;
  transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
`

const LineTop = styled(Line)`
  stroke-dasharray: 40 172;
`

const LineMiddle = styled(Line)`
  stroke-dasharray: 40 111;
`

const LineBottom = styled(Line)`
  stroke-dasharray: 40 172;
`
