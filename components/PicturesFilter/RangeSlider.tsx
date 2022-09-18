import ReactSlider from "react-slider";

interface RangeSliderProps {
  onChange: (value: number[], index: number) => void;
  minValue: number;
  maxValue: number;
  displayMaxValue: number;
}

export const RangeSlider = ({
  onChange,
  minValue,
  maxValue,
  displayMaxValue,
}: RangeSliderProps) => {
  return (
    <div className="overflow-hidden font-poppins">
      <h3 className="text-slate-50 my-2">Filter by likes</h3>
      <ReactSlider
        max={displayMaxValue}
        value={[minValue, maxValue]}
        onChange={onChange}
        className="h-10"
        renderTrack={(props) => (
          <div
            {...props}
            className="bg-slate-50 text-white w-full h-1 rounded-sm translate-y-5"
          />
        )}
        renderThumb={(props) => (
          <div
            {...props}
            className="bg-slate-50 w-5 h-5 rounded-sm translate-y-3 p-1 outline-none"
          >
            <span className="w-full h-full bg-slate-900 block"></span>
          </div>
        )}
      />
      <div className="text-slate-50 mt-2">
        {minValue} - {maxValue}
      </div>
    </div>
  );
};
