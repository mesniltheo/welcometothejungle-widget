import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import Icons from '../'

it('should render nothing if no tag is passed', () => {
  const tree = shallow(<Icons tag={''} />)

  expect(tree).toMatchSnapshot()
})
