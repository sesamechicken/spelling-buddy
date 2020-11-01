import React from "react";
import { shallow } from "enzyme";
import { Icon, Button, TextArea } from "semantic-ui-react";

import { WordLoader } from "./index";

describe("renders an expected Form", () => {
    /** The "shallow" container for Enzyme to use for our React DOM "parent" */
    let container;

    /** Render our WordLoader Component for inspection. */
    beforeAll(() => { container = shallow(<WordLoader />); } );

    test("Form has a text area", () => {
        expect( container.containsMatchingElement(
            <TextArea />
        )).toBe(true);
    });
    test("Form has a load and clear button", () => {
        expect( container.containsMatchingElement(
            <Button><Icon /> Load</Button>
        )).toBe(true);
        expect( container.containsMatchingElement(
            <Button><Icon /> Clear</Button>
        )).toBe(true);
    });
});