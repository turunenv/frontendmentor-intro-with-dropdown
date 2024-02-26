import { Header } from '../Header';
import { test, expect, describe, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent, { UserEvent } from '@testing-library/user-event';
import { navMenuItems } from '../../content/navMenuItems';

beforeEach(() => {
  render(<Header />);
});

test('navigation not showing before clicking button', () => {
  const navElement = screen.queryByText('Features');
  expect(navElement).toBeNull();
});

describe('after clicking button', () => {
  let user: UserEvent | undefined;

  beforeEach(async () => {
    const button = await screen.findByRole('button');
    user = userEvent.setup();

    await user.click(button);
  });

  test('main navigation visible', () => {
    const navOptions = navMenuItems.map((item) => item.title);

    navOptions.forEach((nav) => {
      const navElement = screen.queryByText(nav);
      expect(navElement).not.toBeNull();
    });
  });

  describe('after clicking Features sub-menu button', () => {
    beforeEach(async () => {
      const featuresMenuBtn = screen.getByText('Features');
      await user?.click(featuresMenuBtn);
    });

    test('Features sub-menu visible', () => {
      const featuresMenuObj = navMenuItems.find(
        (item) => item.title === 'Features',
      );
      const featuresSubMenu = featuresMenuObj?.subMenu?.map(
        (item) => item.title,
      );

      featuresSubMenu?.forEach((menuItem) => {
        const subMenuItem = screen.queryByText(menuItem);
        expect(subMenuItem).not.toBeNull();
      });
    });
  });
});
