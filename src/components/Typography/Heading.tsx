interface Props {
  children: React.ReactNode;
}

const Heading = ({ children }: Props) => {
  return (
    <div>
      <h1 className="text-base lg:text-lg flex justify-between items-center font-medium text-zinc-950 dark:text-zinc-100">{children}</h1>
    </div>
  );
};

export default Heading;
