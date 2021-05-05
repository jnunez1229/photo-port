import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';
import ContactForm from "..";

afterEach(cleanup);

describe('contact component', () => {
    it('renders', () =>{
        render(<Contact />)
    })

    it('matches snapshot', () => {
        // render Contact
        const { asFragment } = render(<Contact />);
        expect(asFragment()).toMatchSnapshot();
    })

    it('renders', () => {
        const {getByTestId} = render(<Contact />)
        expect(getByTestId('h1contact')).toHaveTextContent('Contact me')
    })

    it('renders', () => {
        const {getByTestId} = render(<Contact />)
        expect(getByTestId('button')).toHaveTextContent('Submit')
    })
})