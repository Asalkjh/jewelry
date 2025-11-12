interface IContainer {
  children: React.ReactNode;
}

function Container({ children }: IContainer) {
  return <div className="px-[100px] mx-auto">{children}</div>;
}

export default Container;
