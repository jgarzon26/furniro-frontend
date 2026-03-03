import { IconButton } from "../common";
import { Filter, Grid, ViewList } from "../common/icons";
import OptionTextField from "./OptionTextField";

const OptionsTab = () => {
  return (
    <section className="h-25 w-full flex flex-row items-center justify-between bg-shop-option px-20">
      <div className="flex flex-row items-center gap-5">
        <button className="flex flex-row items-center gap-2">
          <span className="h-6 w-6">
            <Filter />
          </span>
          <p className="text-[20px]">Filter</p>
        </button>
        <IconButton icon={Grid} size={20} />
        <IconButton icon={ViewList} size={20} />
        <p className="border-l border-l-footer-highlight px-5">Showing 1-16 of 32 results</p>
      </div>
      <div className="flex flex-row items-center gap-3">
        <OptionTextField 
          type="number"
          id="show" 
          label="show" 
          placeholder="16" 
          inputClassName="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none "
        />
        <OptionTextField 
          id="short"
          label="short"
          placeholder="Default"
          inputClassName="w-[180px] text-start px-5"
        />
      </div>
    </section>
  );
}

export default OptionsTab;