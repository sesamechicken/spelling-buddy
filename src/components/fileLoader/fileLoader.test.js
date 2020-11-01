import React from "react";
import { Input, Button } from "semantic-ui-react";

import { FileLoader } from "./index";

describe("renders an expected Fragment", () => {

  const wrapper = shallow(<FileLoader />);

    test("Fragment has a load button", () => {
        expect( wrapper.containsMatchingElement(
            <Button>Load words</Button>
        )).toBe(true);
    });
    test("Fragment has an input for the file / filename", () => {
        expect( wrapper.containsMatchingElement(
            <Input />
        )).toBe(true);
    });
});