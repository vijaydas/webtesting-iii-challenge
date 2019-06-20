// Test away!


import React from "react";
import { render } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";

import Display from "./Display";

describe("<Display />", () => {
    it("displays component", () => {
      render(<Display />);
    });

    it("displays locked if locked", () => {
        const { getByText } = render(<Display locked={true}/>);
        getByText(/locked/i);
    });


    it("displays unlocked if unlocked", () => {
        const { getByText } = render(<Display locked={false}/>);
        getByText(/unlocked/i);
    });

    it("displays closed if closed", () => {
        const { getByText } = render(<Display closed={true}/>);
        getByText(/closed/i);
    });

    it("displays open if open", () => {
        const { getByText } = render(<Display locked={false}/>);
        getByText(/open/i);
    });


    it("uses red-led class when in lock or closed position", () => {
        const { getByText } = render(<Display locked={true}/>);
        const locked = getByText(/locked/i)
    
        expect(locked).toHaveClass("red-led");
    });


    it("uses green-led class when unlocked or open position", () => {
        const { getByText } = render(<Display locked={false}/>);
        const locked = getByText(/unlocked/i)
    
        expect(locked).toHaveClass("green-led");
    });







});

