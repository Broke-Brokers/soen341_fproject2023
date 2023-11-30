import React from 'react';
import renderer from 'react-test-renderer';

import OfferForm from '../components/forms/offer_form';

it('performs snapshot testing', () => {
    const tree = renderer.create(<OfferForm />).toJSON();
    expect(tree).toMatchSnapshot();
    });