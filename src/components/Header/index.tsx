import Logo from './Logo';

// <header className="header-bg flex items-center px-4 py-2">
const Header = () => {
  return (
    <header className="flex items-center px-4 py-2">
      <Logo />
      <div className="mx-auto">menu</div>
    </header>
  );
};

export default Header;
