import { FC } from "react";
import classNames from "classnames";

type HeaderProps = {
  className?: string;
};

const Header: FC<HeaderProps> = ({ className }): JSX.Element => {
  return (
    <header
      className={classNames(
        "flex items-end text-primary-content prose-h1:text-xs prose-h1:font-medium gap-1",
        className
      )}
    >
      <h1 className="mb-0 text-current">React Calculator</h1>
    </header>
  );
};

export default Header;
