import StarIcon from "@/assets/icons/star.svg";

const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable",
];

export const TapeSection = () => {
  return (
    <div className="flex items-center overflow-scroll">
      {words.map((word) => (
        <div key={word} className="flex items-center gap-x-3">
          <span>{word}</span>
          <StarIcon />
        </div>
      ))}
    </div>
  );
};
