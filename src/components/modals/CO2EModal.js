import React, { useContext } from 'react'
import styled from 'styled-components'

import ModalContext from 'utils/ModalContext'

import Modal from '@bit/datagir.simulateurs.modal'

const Title = styled.h2``
const Text = styled.p``
export default function CO2EModal() {
  const { CO2E, setCO2E } = useContext(ModalContext)

  return (
    <Modal open={CO2E} setOpen={setCO2E} textColor={'main'}>
      <Title>
        L'équivalent CO<sub>2</sub> (CO<sub>2</sub>e)
      </Title>
      <Text>
        Le dérèglement climatique actuel est une conséquence de nos émissions
        importantes de gaz à effet de serre. Nous avons la chance de pouvoir
        mesurer ces émissions avec un indice simple : les kilogrammes
        d'équivalent CO<sub>2</sub> (kgCO<sub>2</sub>e).
      </Text>
      <Text>
        Par exemple, 1 kg de méthane équivaut à 28 kg de CO<sub>2</sub>. Si la
        fabrication d'un produit a émis 1 kg de méthane et 1 kg de CO<sub>2</sub>,
        alors l'impact total de ce produit est de 30 kg d'équivalent CO<sub>2</sub>.
      </Text>
    </Modal>
  )
}
