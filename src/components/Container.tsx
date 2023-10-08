import { FC } from "react";
import classNames from "classnames";

type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};

/**
 * Container component represents a container to wrap content within a specified width.
 * @module Container
 * @param {Object} props - The component props.
 * @param {string} [props.className] - The additional CSS class for the container.
 * @param {React.ReactNode} props.children - The content to be wrapped within the container.
 * @returns {JSX.Element} The Container component.
 */
const Container: FC<ContainerProps> = ({
  children,
  className,
}): JSX.Element => {
  return (
    <div
      className={classNames(
        "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
