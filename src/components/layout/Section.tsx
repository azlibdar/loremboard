interface Props {
  children: React.ReactNode;
}

const Section = ({ children }: Props) => {
  return (
    <section className="w-full container-type">
      <div className="max-w-7xl mx-auto py-8 px-4 lg:px-12">{children}</div>
    </section>
  );
};

export default Section;
