'use client';

import { FC } from "react";
import { TextButton } from '@/components/common';
import { useRouter } from "next/navigation";

const ExploreMoreButton: FC = () => {
  const { push } = useRouter();

  return (
    <TextButton onClick={() => push('/home/shop')} className="w-1/2 px-0 py-2">
      <TextButton.Text>Explore More</TextButton.Text>
    </TextButton>
  );
}

export default ExploreMoreButton;