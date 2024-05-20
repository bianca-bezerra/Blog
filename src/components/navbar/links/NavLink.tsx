import Link from "next/link";
import classNames from "classnames";

const NavLink = (item) => {
  return (
    <div>
      <Link
        className={classNames(
          { "bg-cobalt-blue": window.location.pathname === "/" }
        )}
        href={item.url}
      >
        {item.title}
      </Link>
    </div>
  );
};

export default NavLink;
