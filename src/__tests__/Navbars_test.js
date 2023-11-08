import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navbar_Brokers from '../components/navbars/Navbar_Brokers';
import Navbar_Homebuyer from '../components/navbars/Navbar_Homebuyer';
import Navbar_SysAdmin from "../components/navbars/Navbar_SysAdmin";

it('performs snapshot testing', () => {
    const tree = renderer.create(<Navbar_Brokers />).toJSON();
    expect(tree).toMatchSnapshot();
    });
it('performs snapshot testing', () => {
        const tree = renderer.create(<Navbar_Homebuyer />).toJSON();
        expect(tree).toMatchSnapshot();
        });
it('performs snapshot testing', () => {
            const tree = renderer.create(<Navbar_SysAdmin />).toJSON();
            expect(tree).toMatchSnapshot();
            });