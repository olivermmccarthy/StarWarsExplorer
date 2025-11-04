import React from 'react';

export default function Footer() {
  return (
    <footer className="">
      Data sourced from{' '}
      <a
        href="https://swapi.dev/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-yellow-400 hover:underline"
      >
        swapi.dev
      </a>
    </footer>
  );
}
