import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const links = [
  { href: 'https://zeit.co/now', label: 'ZEIT' },
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const RemoteMenu = dynamic(
  () => {
    return import('header/menu');
  },
  { ssr: false },
);


const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          Home
        </Link>
        <Link href="/shop">
          Shopping
        </Link>
        <Link href="/p/something">
          Federated Catch All
        </Link>
        <Link href="/checkout">
          Checkout
        </Link>
        {/* <Link href="/header">
          Header
        </Link> */}
      </li>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>
    <RemoteMenu />
    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
        gap: 1rem;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
        padding-right: 10px;
      }
    `}</style>
  </nav>
);

export default Nav;
