/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Banner from '../../components/Banner';

describe('Banner', () => {
  it('renders the banner component with the text', () => {
    const text1 = 'Test text';
    render(<Banner text1={text1} />);
    const bannerText = screen.getByText(text1);
    expect(bannerText).toBeInTheDocument();
  });

  it('render default props', () => {
    render(<Banner />);
    const bannerText = screen.getByText('Grow Your Business.');
    expect(bannerText).toBeInTheDocument();
  })
});