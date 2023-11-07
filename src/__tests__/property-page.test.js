import React from 'react';
import renderer from 'react-test-renderer';

import BrokerCard from '../components/property-page/BrokerCard';
import PropertyGallery from '../components/property-page/PropertyGallery';
import PropertyInfo from '../components/property-page/PropertyInfo';


it('performs snapshot testing', () => {
const tree = renderer.create(<BrokerCard />).toJSON();
expect(tree).toMatchSnapshot();
});


it('performs snapshot testing', () => {
    const tree = renderer.create(<PropertyGallery />).toJSON();
    expect(tree).toMatchSnapshot();
    });

