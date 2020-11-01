import React from "react";
import { shallow } from "enzyme";
import { Input, Button } from "semantic-ui-react";

import { FileLoader } from "./index";

describe("renders an expected Fragment", () => {
    /** The "shallow" container for Enzyme to use for our React DOM "parent" */
    let container;

    /** Render our FileLoader Component for inspection. */
    beforeAll(() => { container = shallow(<FileLoader />); } );

    test("Fragment has a load button", () => {
        expect( container.containsMatchingElement(
            <Button>Load words</Button>
        )).toBe(true);
    });
    test("Fragment has an input for the file / filename", () => {
        expect( container.containsMatchingElement(
            <Input />
        ));
    })
});