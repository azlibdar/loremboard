interface Props {
  children: React.ReactNode;
}

const Heading = ({ children }: Props) => {
  return <h1 className="text-base lg:text-lg font-medium text-zinc-950 dark:text-zinc-100">{children}</h1>;
};

export default Heading;
