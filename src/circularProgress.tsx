import React from 'react'
import { CircularProgressProps } from './circularProgressProps'

const CircularProgress = (props: CircularProgressProps) => {
  const {
    style = {},
    size,
    percent = 1,
    gapAngle = 90,
    backgroundBarColor = '#F5F5F4',
    progressBarWidth = 15,
    progressBarColor = '#2C40F3',
    progressBarOpacity = 1,
    progressFillColor = 'none',
    scaleAngles,
    scaleWidth = 2,
    scaleColor = '#2a2a2a',
    scaleOpacity = 0.1,
    svgExtraProps = {},
    children,
  } = props

  const halfSrokeWidth = progressBarWidth / 2
  const radius = (size - progressBarWidth) / 2
  const circumference = 2 * Math.PI * radius
  const gapLength = (gapAngle / 360) * circumference
  const addRotateAngle = halfSrokeWidth / (circumference / 360)
  const isLinearGradientColor = typeof progressBarColor !== 'string'

  const renderBackgroundCircle = () => {
    const progressLength = circumference - gapLength
    const finalProgressLength = progressLength < progressBarWidth ? 1 : progressLength - progressBarWidth
    const dashArray = `${finalProgressLength}, ${circumference - finalProgressLength}`
    return (
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={backgroundBarColor}
        strokeWidth={progressBarWidth}
        strokeDasharray={dashArray}
        strokeDashoffset={0}
        fill='none'
        strokeLinecap='round'
        transform={`rotate(${90 + gapAngle / 2 + addRotateAngle} ${size / 2} ${size / 2})`}
      />
    )
  }

  const renderCircularProgress = () => {
    const progressLength = (percent / 100) * (circumference - gapLength)
    const finalProgressLength = progressLength < progressBarWidth ? 1 : progressLength - progressBarWidth
    const dashArray = `${finalProgressLength}, ${circumference - finalProgressLength}`
    return (
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={isLinearGradientColor ? 'url(#progressGrad)' : progressBarColor}
        strokeWidth={progressBarWidth}
        strokeDasharray={dashArray}
        strokeDashoffset={0}
        fill={progressFillColor}
        strokeLinecap='round'
        strokeOpacity={progressBarOpacity}
        transform={`rotate(${90 + gapAngle / 2 + addRotateAngle} ${size / 2} ${size / 2})`}
      />
    )
  }

  const renderScaleAngles = () => {
    if (!scaleAngles) return null
    return scaleAngles.map((angle: number, index: number) => {
      const radian = (angle * Math.PI) / 180
      const halfSrokeWidth = progressBarWidth / 2
      const x1 = size / 2 + (radius + halfSrokeWidth) * Math.cos(radian)
      const y1 = size / 2 + (radius + halfSrokeWidth) * Math.sin(radian)
      const x2 = size / 2 + (radius - halfSrokeWidth) * Math.cos(radian)
      const y2 = size / 2 + (radius - halfSrokeWidth) * Math.sin(radian)
      return (
        <line
          key={index}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke={scaleColor}
          strokeWidth={scaleWidth}
          strokeOpacity={scaleOpacity}
        />
      )
    })
  }

  const renderDefs = () => {
    if (!isLinearGradientColor) return null

    const linearGradientProps = progressBarColor.reduce((acc: Record<string, string>, cur, index) => {
      acc[`x${index + 1}`] = `${cur[0]}%`
      acc[`y${index + 1}`] = '0%'
      return acc
    }, {})

    return (
      <defs>
        <linearGradient id='progressGrad' {...linearGradientProps}>
          {progressBarColor.map((item: [number, string], index: number) => (
            <stop key={index} offset={`${item[0]}%`} stopColor={item[1]} stopOpacity='1' />
          ))}
        </linearGradient>
      </defs>
    )
  }

  const renderContent = () => {
    if (typeof children === 'function') {
      return children({ percent })
    }
    return children
  }

  const containerStyle: React.CSSProperties = {
    width: size,
    height: size,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    ...style,
  }

  return (
    <div style={containerStyle}>
      <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} {...svgExtraProps}>
        {renderDefs()}
        {renderBackgroundCircle()}
        {renderCircularProgress()}
        {renderScaleAngles()}
      </svg>
      {renderContent()}
    </div>
  )
}

export default CircularProgress
