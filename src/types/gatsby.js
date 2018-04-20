// @flow

export type SizeImageSharpType = {
  aspectRatio: number,
  base64?: string,
  sizes: string,
  src: string,
  srcSet: string,
  srcSetWebp?: string,
  srcWebp?: string,
};

export type ResolutionImageSharpType = {
  aspectRatio?: number,
  base64?: string,
  src: string,
  srcSet?: string,
  srcSetWebp?: string,
  srcWebp?: string,
};

export type ChildImageSharpType = {
  childImageSharp: {
    sizes: SizeImageSharpType,
  },
};

export type ChildDataJsonType<Type> = {
  childDataJson: Type,
};
