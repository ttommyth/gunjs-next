export const Header = (props: {}) => {
    return <nav className="navbar bg-base-100 absolute">
    <div className="navbar-start">
      <a className="btn btn-ghost normal-case text-xl">Gun test</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal p-0">
        <li><a>Item 1</a></li>
      </ul>
    </div>
    <div className="navbar-end">
      <a className="btn">Login</a>
    </div>
  </nav>;
}