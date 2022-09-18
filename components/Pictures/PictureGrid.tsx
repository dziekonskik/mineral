import { PictureListItem } from "./PictureListItem";
import type { PhotoGridEssentials } from "../../utils/types";

interface PhotoGridProps {
  pictures: PhotoGridEssentials[];
}

export const PictureGrid = ({ pictures }: PhotoGridProps) => {
  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-3 flex-1 gap-5">
      {pictures.map((picture) => (
        <PictureListItem key={picture.blur_hash} picture={picture} />
      ))}
    </section>
  );
};
