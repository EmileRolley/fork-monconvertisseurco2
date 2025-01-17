import React, { useContext } from 'react'
import styled from 'styled-components'

import TransportContext from 'components/transport/TransportProvider'
import Emoji from 'components/base/Emoji'

const Wrapper = styled.button`
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
  margin: 0.375rem;
  padding: 0;
  font-size: 1.5rem;
  background-color: ${(props) =>
    props.active ? props.theme.colors.main : 'transparent'};
  border: 0.125rem solid ${(props) => props.theme.colors.main};
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 200ms ease-out;
`
const Second = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(30%, 50%);
  font-size: 0.75em;
`
export default function Transportation(props) {
  const { teletravailTransportation, setTeletravailTransportation } =
    useContext(TransportContext)

  return (
    <Wrapper
      onClick={() => setTeletravailTransportation(props.transportation.id)}
      active={teletravailTransportation === props.transportation.id}
    >
      <Emoji>{props.transportation.emoji}</Emoji>
      {props.transportation.secondEmoji && (
        <Second>
          <Emoji>{props.transportation.secondEmoji}</Emoji>
        </Second>
      )}
    </Wrapper>
  )
}
