/* eslint-disable no-undef */
import React from "react";
import { render, screen } from "@testing-library/react";
import HeaderFilter from "../../components/HeaderFilter";

describe("HeaderFilter", () => {
  it("renders the header filter with the correct title", () => {
    const title = "Test Title";
    render(<HeaderFilter title={title} />);
    const headerTitle = screen.getByText(title);
    expect(headerTitle).toBeInTheDocument();
  });

  it("render filter list button", () => {
    const title = 'Test Title';
    const tags = ['all', 'new'];

    render(<HeaderFilter title={title} tags={tags} />)
    const tagAll = screen.getByText('all');
    expect(tagAll).toBeInTheDocument();
    const tagNew = screen.getByText('new');
    expect(tagNew).toBeInTheDocument();
  });
});
