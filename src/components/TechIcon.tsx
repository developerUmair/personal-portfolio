import React from "react";

export const TechIcon = ({ component }: { component: React.ElementType }) => {
  const Component = component;
  return (
    <div className="relative">
      <Component className="size-10 fill-[url(#tech-icon-gradient)]" />
      <svg className="h-0 w-0">
        <defs>
          <linearGradient id="tech-icon-gradient">
            <stop offset="0%" stopColor="rgb(110 231 183)" />
            <stop offset="100%" stopColor="rgb(56 189 248)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default TechIcon;