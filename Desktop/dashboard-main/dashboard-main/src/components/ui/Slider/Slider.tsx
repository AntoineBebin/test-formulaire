import React, { useRef, useState } from 'react'
import styled from 'styled-components'

interface SliderProps {
  label?: string
  defaultValue?: number
  step?: number
  min?: number
  max?: number
}

export const Slider: React.FC<SliderProps> = ({ defaultValue = 0, step = 1, min = 0, max = 100 }) => {
  const [value, setValue] = useState(defaultValue)
  const [isDragging, setIsDragging] = useState(false)
  const sliderRef = useRef<HTMLDivElement | null>(null)

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    const initialMouseX = event.clientX
    setIsDragging(false)

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)

    function handleMouseMove(event: MouseEvent) {
      // seuil de déplacement
      if (Math.abs(event.clientX - initialMouseX) > 10) {
        setIsDragging(true)
      }

      const newValue = calculateNewValue(event.clientX)
      handleSliderChange(newValue)
    }

    function handleMouseUp() {
      setIsDragging(false)

      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }

  const handleSliderChange = (newValue: number) => {
    // Assurez-vous que la nouvelle valeur reste dans la plage min-max
    setValue(Math.min(Math.max(newValue, min), max))
  }

  const calculateNewValue = (clientX: number) => {
    if (sliderRef.current) {
      const sliderRect = sliderRef.current.getBoundingClientRect()
      const pixelValue = (clientX - sliderRect.left) / sliderRect.width
      const newValue = Math.round((min + pixelValue * (max - min)) / step) * step
      return Math.min(Math.max(newValue, min), max)
    }
    return value
  }

  const handleSliderClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) {
      const newValue = calculateNewValue(event.clientX)
      handleSliderChange(newValue)
    }
  }

  return (
    <SliderWrapper>
      <SliderRoot ref={sliderRef} onMouseDown={handleMouseDown} onClick={handleSliderClick}>
        <SliderRail />
        <SliderTrack style={{ width: `${value}%`, transition: isDragging ? 'none' : undefined }} />
        <SliderThumb style={{ left: `${value}%`, transition: isDragging ? 'none' : undefined }}>
          {value}
          <Input type="range" min={min} max={max} step={step} value={value} />
        </SliderThumb>
      </SliderRoot>
    </SliderWrapper>
  )
}

const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
`

const SliderRoot = styled.span`
  display: inline-block;
  box-sizing: content-box;
  position: relative;
  cursor: pointer;
  touch-action: none;
  height: 4px;
  width: 100%;
  padding: 13px 0;
`
const SliderRail = styled.span`
  position: absolute;
  display: block;
  width: 100%;
  height: inherit;
  background-color: #fcfcfc;

  top: 50%;
  transform: translateY(-50%);
`
const SliderTrack = styled.span`
  position: absolute;
  display: block;
  width: 30%;
  height: inherit;
  background-color: #0e738a;

  top: 50%;
  transform: translateY(-50%);

  transition: width 0.3s ease-out;
`
const SliderThumb = styled.span`
  position: absolute;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;
  top: 50%;
  transform: translate(-50%, -50%);

  background-color: #0e738a;
  border-radius: var(--radius-container, 8px);

  color: #fcfcfc;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  user-select: none;

  transition: left 0.3s ease-out;
`

const Input = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  height: 100%;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 100%;
  direction: ltr;
`
