import React, { useEffect } from 'react'
import WebsiteMenu from '../components/WebsiteMenu';

const Header = props => {
  console.log('props', props);
  useEffect(() => {
    console.log(`bro`)
  }, [props]);

  return (
    <div>
      {props?.menu && <WebsiteMenu menu={props?.menu} />}
    </div>
  )
}

Header.getInitialProps = async () => {
  const menu = await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
  console.log('menu', menu);
  return {
    menu
  };
};

export default Header