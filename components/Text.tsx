import cx from "clsx";
import classes from "./Text.module.css";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  opacity?: number;
  asBlock?: boolean;
  size?: "xs" | "sm" | "md" | "lg";
  fontWeight?: "light" | "normal" | "medium" | "semibold" | "bold";
  color?: "white" | "whiteLike" | "black" | "gray" | "grayLike";
  capitalize?: boolean;
  uppercase?: boolean;
  spacing?: "big" | "small" | "none";
  italic?: boolean;
};

export function Text({
  children,
  className,
  opacity,
  asBlock,
  color,
  size,
  fontWeight,
  capitalize,
  uppercase,
  spacing,
  italic,
}: Props) {
  return (
    <span
      className={cx(classes.text, className, {
        [classes.block]: asBlock,
        // Color
        [classes.colorWhite]: color === "white",
        [classes.colorBlack]: color === "black",
        [classes.colorGray]: color === "gray",
        [classes.colorWhiteLike]: color === "whiteLike",
        [classes.colorGrayLike]: color === "grayLike",
        // Size
        [classes.sizeXs]: size === "xs",
        [classes.sizeSm]: size === "sm",
        [classes.sizeMd]: size === "md",
        [classes.sizeLg]: size === "lg",
        [classes.fontWeightLight]: fontWeight === "light",
        [classes.fontWeightNormal]: fontWeight === "normal",
        [classes.fontWeightMedium]: fontWeight === "medium",
        [classes.fontWeightSemibold]: fontWeight === "semibold",
        [classes.fontWeightBold]: fontWeight === "bold",
        [classes.capitalize]: capitalize,
        [classes.uppercase]: uppercase,
        [classes.italic]: italic,
        // Spacing
        [classes.spacingSmall]: spacing === "small" || !spacing,
        [classes.spacingBig]: spacing === "big",
        [classes.spacingNone]: spacing === "none",
      })}
      style={{
        opacity: opacity ?? 1,
      }}
    >
      {children}
    </span>
  );
}
