import { render, screen } from '@testing-library/react';
import Contact from './Contact';

test('renders howdyf', () => {
  render(<Contact />);
  const linkElement = screen.getByText(/HOWDY/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders facebook link', () => {
  render(<Contact />);
  const linkElement = screen.getByTitle(/facebook/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders facebook link', () => {
  render(<Contact />);
  const linkElement = screen.getByTitle(/instagram/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders twitter link', () => {
  render(<Contact />);
  const linkElement = screen.getByTitle(/twitter/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders name input', () => {
  render(<Contact />);
  const linkElement = screen.getByText(/Name/i);
  expect(linkElement).toBeInTheDocument();
});
