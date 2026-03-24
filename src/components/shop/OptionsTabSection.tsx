import { IconButton } from "../common";
import { Filter, Grid, ViewList } from "../common/icons";
import OptionInputs from "./OptionInputs";
import ResultText from "./ResultText";
import { FC } from "react";

const OptionsTabSection: FC = () => {
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
        <ResultText />
      </div>
      <OptionInputs />
    </section>
  );
}

export default OptionsTabSection;