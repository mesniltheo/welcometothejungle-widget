import PropTypes from 'prop-types'
import React from 'react'

import * as S from './styled'

const ProgressBar = ({ progress }) => (
  <S.Wrapper>
    <S.ProgressBar progress={progress} />
  </S.Wrapper>
)

ProgressBar.propTypes = {
  progress: PropTypes.number,
}

export default ProgressBar