import React from 'react';
import App from '../src/App';
import { beforeEach, afterEach, describe, expect, it, vi } from 'vitest'
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';
import { configure } from '@testing-library/dom';
import { MemoryRouter } from 'react-router-dom';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import ShopInformation from './src/pages/shopInfo/ShopInformation.jsx';
import ShopMenu from './src/pages/shopInfo/ShopMenu.jsx';
import MenuItem from './src/pages/shopInfo/MenuItem.jsx';
import { menu } from './src/menu.js';

// describe('testing', () => {
//   test('adds 1 and 2 together', () => {
//     expect(1 + 2).toBe(3);
//   });
// });

configure({
  defaultHiddenn: true
});

describe('shop Information', () => {

  beforeEach(() => {
    render(
      <MemoryRouter>
        <ShopInformation />
      </MemoryRouter>
    )
  });

  afterEach(() => {
    cleanup();
  })

  it('renders the shop name', async () => {
    const shopName = await screen.getByText('Atmalogy');
    expect(shopName).toBeInTheDocument();
  });

  it('displays the hours', async () => {
    const shopHours = await screen.getByText('Monday: 7:00AM to 8:00PM');
    expect(shopHours).toBeInTheDocument();
  });
});

describe('shop menu', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <ShopMenu menu={menu} rating="4" />
      </MemoryRouter>
    )
  });

  afterEach(() => {
    cleanup();
  });

  it('renders the generic menu', async () => {
    const dripCoffee = await screen.getByText('Drip Coffee');
    expect(dripCoffee).toBeInTheDocument();
  });

})