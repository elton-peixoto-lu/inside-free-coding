import { render, screen } from '@testing-library/react';
import { BlogPost } from './BlogPost';
import React from 'react';

describe('BlogPost', () => {
  it('renderiza título, autor e botões', () => {
    render(<BlogPost slug="resiliencia-incidentes" title="Resiliência em Incidentes" excerpt="Como preparar sua infra para falhas..." date="2024-05-01" />);
    expect(screen.getByText(/Resiliência em Incidentes/)).toBeInTheDocument();
    expect(screen.getByText(/Elton Peixoto/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /A-/ })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /A\+/ })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /PDF/ })).toBeInTheDocument();
  });
}); 
