import Link from "next/link";

function Section() {
  const sections = [
    {
      title: "Necklace",
      path: "necklace",
    },
    {
      title: "Bracelet",
      path: "bracelet",
    },
    {
      title: "Earrings",
      path: "earrings",
    },
    {
      title: "Ring",
      path: "ring",
    },
  ];

  return (
    <div className="h-[30px] w-full flex justify-between container mx-auto  ">
      {sections.map((item) => (
        <Link
          className="px-[30px] rounded border max-sm:px-[15px]"
          key={item.path}
          href={`/section/${item.path}`}
        >
          {" "}
          {item.title}{" "}
        </Link>
      ))}
    </div>
  );
}

export default Section;
