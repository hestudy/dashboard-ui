import { motion } from "framer-motion";
import { PropsWithChildren } from "react";
import { cn } from "./lib/utils";

export type DockProps = {
  /**
   * The className of the Dock.
   */
  className?: string;
};

const Dock = (props: PropsWithChildren<DockProps>) => {
  return (
    <motion.div
      className={cn(
        "border",
        "rounded-xl",
        "p-2",
        "flex",
        "space-x-2",
        props.className
      )}
    >
      {props.children}
    </motion.div>
  );
};

export default Dock;
