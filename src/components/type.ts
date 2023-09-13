export type ImageType = {
  src: string;
  id: number;
  name: string;
};

export type CollectionsDataType = {
  label: string;
  images: ImageType[];
};
