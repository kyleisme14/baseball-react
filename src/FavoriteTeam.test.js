import { render, screen } from '@testing-library/react';
import FavoriteTeam from './FavoriteTeam';

test('renders Favorite Team', () => {
  render(<FavoriteTeam />);
  const linkElement = screen.getByText(/Favorite Team/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Player List', () => {
  render(<FavoriteTeam />);
  const linkElement = screen.getByTitle(/PlayerList/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders favorite team image', () => {
  render(<FavoriteTeam />);
  const linkElement = screen.getByTitle(/favorite team image/i);
  expect(linkElement).toBeInTheDocument();
});