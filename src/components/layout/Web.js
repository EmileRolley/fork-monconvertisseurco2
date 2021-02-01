import React, { useContext } from 'react'
import styled from 'styled-components'

import useWindowSize from 'hooks/useWindowSize'
import UXContext from 'utils/UXContext'

import Header from 'components/layout/Header'
import Learning from 'components/layout/Learning'
import Footer from '@bit/datagir.simulateurs.footer'
import Embed from 'components/misc/Embed'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  ${(props) => props.theme.mq.medium} {
    flex-direction: column-reverse;
  }
`
const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`
const FullScreen = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 45em;
  min-height: ${(props) => props.windowHeight}px;
  margin: 2em auto 5em;

  ${(props) => props.theme.mq.small} {
    margin: 2em 3vw 5em;
  }
`
export default function Layout(props) {
  const { height } = useWindowSize()

  const { setConfiguratorOpen } = useContext(UXContext)

  return (
    <Wrapper>
      <Content>
        <FullScreen windowHeight={height}>
          <Header />
          {props.children}
        </FullScreen>
        <Learning />
        <Footer
          color={'main'}
          setConfiguratorOpen={setConfiguratorOpen}
          sources={[
            {
              label: 'Base carbone®',
              href: 'https://data.ademe.fr/datasets/base-carbone(r)',
            },
          ]}
        />
      </Content>
      <Embed />
    </Wrapper>
  )
}