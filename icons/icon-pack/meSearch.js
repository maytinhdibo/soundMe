import React from 'react'
import Svg, { Path } from 'react-native-svg'

export default function meSearch(props){
  return (
  
  <Svg height={props.size} width={props.size} >
    <Path
      fill={props.color}
      d="M15.707 14.293l-4.822-4.822a6.019 6.019 0 10-1.414 1.414l4.822 4.822a1 1 0 001.414-1.414zM6 10a4 4 0 114-4 4 4 0 01-4 4z"
    />
  </Svg>

)
  }
