/* eslint-disable no-undef */
import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Card from "../../components/Card";

describe("Card", () => {
  it("renders the card component with the correct title and description", () => {
    const title = "Test Title";
    const description = "Test Description";
    const data = {
      title: title,
      desc: description,
    };

    render(
      <Router>
        <Card data={data} readMore={true} />
      </Router>
    );
    const cardTitle = screen.getByText(title);
    expect(cardTitle).toBeInTheDocument();

    const cardDescription = screen.getByText(description);
    expect(cardDescription).toBeInTheDocument();

    const readMoreText = screen.getByText("Read More");
    expect(readMoreText).toBeInTheDocument();
  });

  it("render the card for teams member show the correct name, position, and social media", () => {
    const name = "Asep";
    const role = "Admin";
    const instagram = "https://instagram.com";
    const data = {
      name: name,
      role: role,
      instagram: instagram,
    };
    render(
      <Router>
        <Card data={data} />
      </Router>
    );
    const myName = screen.getByText(name);
    expect(myName).toBeInTheDocument();
    const myRole = screen.getByText(role);
    expect(myRole).toBeInTheDocument();
    const instagramText = screen.getByText("Instagram");
    expect(instagramText).toBeInTheDocument();
  });

  it("test if card 'Read More' is clickable", () => {
    const title = "Test Title";
    const description = "Test Description";
    const key = "1";
    const data = {
      title: title,
      desc: description,
      key: key,
    };

    render(
      <Router>
        <Card data={data} readMore={true} />
      </Router>
    );

    const readMoreButton = screen.getByText("Read More");
    readMoreButton.click();
    expect(window.location.pathname).toBe(`/blog/${key}`);
  });

  it("test defaul data card", () => {
    render(
      <Router>
        <Card readMore={true} />
      </Router>
    );
    const title = screen.getByText('Card Title');
    expect(title).toBeInTheDocument();
  });
});
