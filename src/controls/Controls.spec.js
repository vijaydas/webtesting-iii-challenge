// Test away!



import React from "react";
import { render } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";

import Controls from "./Controls.js";

describe("<Controls />", () => {
    it("displays component", () => {
      render(<Controls />);
    });

});