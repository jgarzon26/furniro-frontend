'use client';

import { FC } from "react";
import TextButton from "./TextButton";
import { useRouter } from "next/navigation";

const ShowMoreButton: FC = () => {
  const { push } = useRouter();

  return (
    <TextButton onClick={() => push('/home/shop')} className="px-20 py-3 bg-button-secondary text-button-secondary-foreground border border-button-secondary-foreground">
      <TextButton.Text>Show More</TextButton.Text>
    </TextButton>
  );
}

export default ShowMoreButton;