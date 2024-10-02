interface IHeaderIconsList {
  id: number;
  src: string;
  alt: string;
}

export const headerIconsList: IHeaderIconsList[] = [
  {
    id: 1,
    src: "/icons/settings.svg",
    alt: "settings",
  },
  {
    id: 2,
    src: "/icons/question.svg",
    alt: "question",
  },
  {
    id: 3,
    src: "/icons/ring.svg",
    alt: "ring",
  },
];
