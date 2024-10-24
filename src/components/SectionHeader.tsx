import React from "react";

export const SectionHeader = ({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow: string;
  description: string;
}) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
          {/* Real-world Results */}
          {title}
        </p>
      </div>
      <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
        {/* Featured Projects */}
        {eyebrow}
      </h2>
      <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-lg mx-auto">
        {/* See how I transformed concepts into engaging digital experiences. */}
        {description}
      </p>
    </>
  );
};
