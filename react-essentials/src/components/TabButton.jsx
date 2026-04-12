const TabButton = ({ isActive, children, ...props }) => {
  return <li><button className={isActive ? 'active' : undefined} {...props}>{children}</button></li>;
};

export default TabButton;