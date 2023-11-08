import React from 'react';
import renderer from 'react-test-renderer';
import Search_Result_Grid from '../components/search-for-brokers/Search_Result_Grid';



it('performs snapshot testing', () => {
const tree = renderer.create(<Search_Result_Grid />).toJSON();
expect(tree).toMatchSnapshot();
});