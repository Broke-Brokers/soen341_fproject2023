import React from 'react';
import renderer from 'react-test-renderer';

import offer_form from '../components/forms/offer_form';

it('performs snapshot testing', () => {
    const tree = renderer.create(<offer_form />).toJSON();
    expect(tree).toMatchSnapshot();
    });