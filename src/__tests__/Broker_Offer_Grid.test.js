import React from 'react';
import renderer from 'react-test-renderer';
import Broker_Offer_Grid from '../components/Profile-page/Broker_Offer_Grid'

it('performs snapshot testing', () => {
    const tree = renderer.create(<Broker_Offer_Grid />).toJSON();
    expect(tree).toMatchSnapshot();
    });