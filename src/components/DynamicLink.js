import { Link, useSearchParams, useResolvedPath, useMatch } from "react-router-dom";

const DynamicLink = ({className, to, children, ...props}) => {
  let resolved = useResolvedPath(to);
  let [searchParams] = useSearchParams();
  let match = useMatch({path: resolved.pathname});

  let active;
  if (resolved.search) {
    active = searchParams.get("category") === children.toLowerCase();
  } else {
    active = match
  }

  // Edit this to change the link style when it is active. This uses tailwind class btw
  let activeStyles = active && "underline";

  return (
    <Link
      className={activeStyles + " " + className}
      to={to}
      {...props}
    >
      {children}
    </Link>
  )

}

export default DynamicLink;
