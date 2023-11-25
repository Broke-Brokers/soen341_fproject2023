import React from 'react';
import renderer from 'react-test-renderer';

import MortgageCalculator from '../components/property-page/MortgageCalculator';

it('performs snapshot testing', () => {
    const tree = renderer.create(<MortgageCalculator />).toJSON();
    expect(tree).toMatchSnapshot();
    });