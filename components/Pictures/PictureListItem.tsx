import Image from "next/image";
import { HeartIcon } from "../Icons/Heart";
import type { PhotoGridEssentials } from "../../utils/types";

interface PictureListItemProps {
  picture: PhotoGridEssentials;
}

export const PictureListItem = ({ picture }: PictureListItemProps) => {
  return (
    <figure className="relative flex flex-col">
      <div className="relative w-full h-72 overflow-hidden rounded-t-md">
        <Image
          src={picture.urls.small}
          alt={picture.alt_description || ""}
          placeholder="blur"
          blurDataURL={picture.blur_hash}
          layout="fill"
          objectFit="cover"
          className="hover:scale-110 transition-transform"
        />
      </div>
      <figcaption className="h-12 p-3 flex justify-between font-poppins uppercase bg-white rounded-b-md">
        <span>{picture.user.name}</span>
        <span className="flex ">
          <HeartIcon className="h-6 w-6 mr-2" />
          {picture.likes}
        </span>
      </figcaption>
    </figure>
  );
};
