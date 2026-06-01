import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as cn } from "./utils-H80jjgLf.mjs";
function SilicofellerLogo({
  variant = "horizontal",
  className,
  iconClassName
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex items-center", className), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "img",
    {
      src: "/logo.webp",
      alt: "Silicofeller x NVIDIA",
      className: cn("h-10 w-auto object-contain", iconClassName)
    }
  ) });
}
function LogoMark({ className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "img",
    {
      src: "/logo.webp",
      alt: "Silicofeller x NVIDIA",
      className: cn("h-12 w-auto object-contain", className)
    }
  );
}
export {
  LogoMark as L,
  SilicofellerLogo as S
};
