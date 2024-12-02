interface Props {
  children: React.ReactNode;
  bgDiff?: boolean;
}

const Section = ({ children, bgDiff = false }: Props) => {
  return (
    <section className={`${bgDiff ? "bg-white dark:bg-transparent" : ""} w-full container-type`}>
      <div className="max-w-7xl mx-auto py-8 px-4 lg:px-12">{children}</div>
    </section>
  );
};

export default Section;
