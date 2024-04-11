function ButtonWithChildren({ color, children }) {
  return <button className={color}>{children}</button>;
}

export default ButtonWithChildren;