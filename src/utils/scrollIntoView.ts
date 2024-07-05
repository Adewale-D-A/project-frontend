const scrollToView = ({ scrollId }: { scrollId: string }) => {
  try {
    const section = document.querySelector(`#${scrollId}`) as any;
    section?.scrollIntoView({ behavior: "smooth", block: "end" });
  } catch (error) {}
};

export default scrollToView;
