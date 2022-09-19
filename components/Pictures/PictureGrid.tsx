import { AnimatePresence, motion } from "framer-motion";
import { PictureListItem } from "./PictureListItem";
import type { PhotoGridEssentials } from "../../utils/types";

interface PhotoGridProps {
  pictures: PhotoGridEssentials[];
}

export const PictureGrid = ({ pictures }: PhotoGridProps) => {
  return (
    <section className="flex-1 px-4 lg:px-0 h-full">
      <motion.ul
        layout
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 h-full"
      >
        <AnimatePresence>
          {pictures.map((picture) => (
            <PictureListItem key={picture.blur_hash} picture={picture} />
          ))}
        </AnimatePresence>
      </motion.ul>
    </section>
  );
};
