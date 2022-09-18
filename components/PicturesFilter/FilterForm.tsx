import { useForm } from "react-hook-form";
import { RangeSlider } from "./RangeSlider";
import type { PhotoGridEssentials } from "../../utils/types";

interface FilterWrapperProps {
  pictures: PhotoGridEssentials[];
  setPictures: React.Dispatch<React.SetStateAction<PhotoGridEssentials[]>>;
}

interface UserMediaFormData {
  searchText: string;
  likesFrom: number;
  likesTo: number;
}

export const FilterForm = ({ pictures, setPictures }: FilterWrapperProps) => {
  const likesCeiling = Math.max(...pictures.map((picture) => picture.likes));

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<UserMediaFormData>({
    mode: "onSubmit",
    defaultValues: {
      searchText: "",
      likesFrom: 0,
      likesTo: likesCeiling,
    },
  });
  const handleSliderChange = (value: number[]) => {
    setValue("likesFrom", value[0]);
    setValue("likesTo", value[1]);
  };

  const onSubmit = handleSubmit((data) => {
    const newPictures = pictures.reduce<PhotoGridEssentials[]>(
      (filtered, picture) => {
        const { likesFrom, likesTo, searchText } = data;
        const { likes, user } = picture;

        const userNameIncludesSearchText = user.name.includes(searchText);
        const likesAreInSearchRange = likes >= likesFrom && likes <= likesTo;

        if (userNameIncludesSearchText && likesAreInSearchRange) {
          filtered.push(picture);
        }

        return filtered;
      },
      []
    );
    setPictures(newPictures);
  });

  return (
    <form className="relative flex justify-center lg:justify-start items-end py-7 h-96 mb-10 lg:my-10 lg:rounded-md overflow-hidden bg-[url(/assets/diamond.jpg)] bg-cover bg-center">
      <Attribution />
      <div className="max-w-md w-full px-4 lg:pl-10 font-poppins">
        <input
          className="h-10 my-auto w-full rounded-sm p-2 mb-4 bg-slate-50"
          placeholder="Search for author"
          type="text"
          {...register("searchText")}
        />
        <RangeSlider
          onChange={handleSliderChange}
          minValue={watch("likesFrom")}
          maxValue={watch("likesTo")}
          displayMaxValue={likesCeiling}
        />
        <button
          className="bg-slate-50 px-6 py-2 rounded-sm mt-4 ml-auto block"
          onClick={onSubmit}
        >
          Filter
        </button>
      </div>
    </form>
  );
};

const Attribution = () => (
  <span className="absolute text-slate-800 top-0 right-2">
    Photo by{" "}
    <a href="https://unsplash.com/@fotonium?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
      Akhilesh Sharma
    </a>{" "}
    on{" "}
    <a href="https://unsplash.com/s/photos/gem?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
      Unsplash
    </a>
  </span>
);
