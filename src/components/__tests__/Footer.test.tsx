import { test, expect, beforeEach } from 'vitest';
import { screen, render } from '@testing-library/react';
import { Footer } from '../Footer';
import { footerImages } from '../../content/footerItems';

beforeEach(() => {
  render(<Footer />);
});

test('renders all images', () => {
  const expectedImgCount = footerImages.length;

  const images = screen.getAllByRole('img');
  expect(images.length).toBe(expectedImgCount);
});

test('images have expected alt-texts', () => {
  const altTexts = footerImages.map((imgTuple) => imgTuple[1]);

  altTexts.forEach((text) => {
    const imgElement = screen.queryByAltText(text);
    expect(imgElement).not.toBeNull();
  });
});
