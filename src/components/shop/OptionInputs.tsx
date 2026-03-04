'use client';

import { ChangeEvent } from "react";
import OptionTextField from "./OptionTextField";
import { useShopOptionsStore } from "@/hooks/useShopOptionsStore";
import { useDebounce } from "@/hooks/useDebounce";
import { initShopOptionsState } from "@/stores/shop-options-store";

const OptionInputs = () => {
  const { setShow, setShort } = useShopOptionsStore((state) => state);
  const { show } = initShopOptionsState;

  const onChangeShow = (event: ChangeEvent<HTMLInputElement>) => {
  };
  const onChangeShort = (event: ChangeEvent<HTMLInputElement>) => {
  };

  return (
    <div className="flex flex-row items-center gap-3">
      <OptionTextField
        type="number"
        id="show"
        label="show"
        placeholder={`${show}`}
        inputClassName="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none "
        onChange={onChangeShow}
      />
      <OptionTextField
        id="short"
        label="short"
        placeholder="Default"
        inputClassName="w-[180px] text-start px-5"
        onChange={onChangeShort}
      />
    </div>
  );
}

export default OptionInputs;