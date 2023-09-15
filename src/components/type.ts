export type ImageType = {
  src: string;
  id: number;
  name: string;
};

export type CollectionsDataType = {
  id: string;
  label: string;
  category: string;
  images: ImageType[];
};
