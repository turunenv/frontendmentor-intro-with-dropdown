import { MainPage } from '../MainPage';
import { beforeEach, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

beforeEach(() => {
  render(<MainPage />);
});

test('renders the hero-image', () => {
  const altText = 'a man working on his laptop';
  const heroImg = screen.queryByAltText(altText);
  expect(heroImg).not.toBeNull();
});

test('renders the main title', () => {
  const title = screen.queryByText('Make remote work');
  expect(title).not.toBeNull();
});

test('renders the learn-more button', () => {
  const button = screen.queryByText('Learn more');
  expect(button).not.toBeNull();
});
