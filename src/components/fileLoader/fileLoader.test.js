import React from "react";
import { shallow } from "enzyme";
import { Button } from "semantic-ui-react";

import { FileLoader } from "./index";

let container;

test("renders an expected Fragment", () => {
    container = shallow(<FileLoader />);
    
    expect( container.containsMatchingElement(
        <Button>Load words</Button>
    )).toBe(true);
});