import { motion } from "framer-motion";
import { MouseEvent, PropsWithChildren } from "react";
import { cn } from "./lib/utils";

export type DockItemProps = {
  /**
   * The className of the DockItem.
   */
  className?: string;
  onClick?: (e: MouseEvent) => void;
};

const DockItem = (props: PropsWithChildren<DockItemProps>) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.5,
        translateY: -10,
        shadow: "0px 0px 8px rgba(0, 0, 0, 0.2)",
      }}
      className={cn("cursor-pointer", props.className)}
      onClick={props.onClick}
    >
      {props.children}
    </motion.div>
  );
};

export default DockItem;
