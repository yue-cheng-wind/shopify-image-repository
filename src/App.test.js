import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Home from './Components/Pages/Home';
import SearchBar from './Components/SearchBar';
import UploadButton from './Components/UploadButton';
import { fireEvent } from '@testing-library/react';

function testHomePage() {
    let container = null;
    beforeEach(() => {
        // setup a DOM element as a render target
        container = document.createElement("div");
        document.body.appendChild(container);
    });

    afterEach(() => {
        // cleanup on exiting
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    });

    it("Home runs without crashing", () => {
        act(() => {
            render(<Home />, container);
        });

    });

    it("Home renders title correctly", () => {
        act(() => {
            render(<Home />, container);
        });
        let homeAboutDiv = container.querySelector("#home_about");
        expect(homeAboutDiv.querySelector("h1").textContent).toBe("Secret Garden");
        expect(homeAboutDiv.querySelector("p").textContent).toBe("Your dream lives here.");
    }
    )

    it("Searchbar runs without crashing", () => {
        act(() => {
            render(<SearchBar />, container);
        });
    });

    it("Searchbar renders placeholder text", () => {
        act(() => {
            render(<SearchBar />, container);
        });
        let searchBarComponent = container.querySelector(".searchbox");

        expect(searchBarComponent.querySelector("input").placeholder).toEqual("Search by Name");
    });

    it("Searchbar updates on input change", () => {
        act(() => {
            render(<SearchBar />, container);
        });
        let searchInput = container.querySelector(".searchbox").querySelector("input");
        fireEvent.change(searchInput, { target: { value: "Zinnia" } });
        expect(searchInput.value).toBe("Zinnia");

    });
    it("Searchbar function to have been called upon input change", () => {
        const updateInput = jest.fn();
        act(() => {

            render(<SearchBar input="" updateInput={updateInput} />, container);
        });
        let searchInput = container.querySelector(".searchbox").querySelector("input");
        fireEvent.change(searchInput, { target: { value: "Zinnia" } });
        expect(updateInput).toHaveBeenCalled();
    });

    it("UploadButton renders without crash", () => {
        act(() => {
            render(<UploadButton />, container);
        });
    });

    it("UploadButton renders text correctly", () => {
        act(() => {
            render(<UploadButton />, container);
        });

        expect(container.querySelector("#upload_image_button").textContent).toBe("Upload Image");
    });

}

testHomePage();