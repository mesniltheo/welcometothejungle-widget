import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { Wrapper } from '../styled'

describe('Button styled', () => {
  describe('Wrapper', () => {
    it('should render the button with a onlyIcon', () => {
      const tree = renderer
        .create(
          <Wrapper onlyIcon>
            <div>Click me</div>
          </Wrapper>
        )
        .toJSON()

      expect(tree).toMatchSnapshot()
      expect(tree).toHaveStyleRule('width', '30px')
      expect(tree).toHaveStyleRule('border-radius', '30px')
      expect(tree).toHaveStyleRule('padding', '0')
    })

    it('should render the button with a onlyIcon', () => {
      const tree = renderer
        .create(
          <Wrapper>
            <div>Click me</div>
          </Wrapper>
        )
        .toJSON()

      expect(tree).toMatchSnapshot()
      expect(tree).toHaveStyleRule('width', undefined)
      expect(tree).toHaveStyleRule('border-radius', '4px')
      expect(tree).toHaveStyleRule('padding', '0 20px')
    })
  })
})