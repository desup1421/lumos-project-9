/* eslint-disable no-undef */
import React from "react";
import { render, screen } from "@testing-library/react";
import TestimonialCard from "../../components/TestimonialCard";

describe("TestimonialCard", () => {
  it("renders the testimonial card component with the correct text", () => {
    const name = "John Doe";
    const image = "https://picsum.photos/100";
    const title = "CEO";
    const desc = "description text"
    render(<TestimonialCard name={name} image={image} title={title} desc={desc} />);
    const testimonialText = screen.getByText(name);
    const userImage = screen.getByAltText(name);
    const testimonialTitle = screen.getByText(title);
    const testimonialDesc = screen.getByText(desc);
    expect(testimonialTitle).toBeInTheDocument();
    expect(testimonialDesc).toBeInTheDocument();
    expect(userImage).toBeInTheDocument();
    expect(testimonialText).toBeInTheDocument();
  });
});
