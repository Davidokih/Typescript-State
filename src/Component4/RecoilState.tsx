import { atom, selector } from "recoil";

interface A {
  id: number;
  name: string;
  stack: string;
}

export const user = atom({
  key: "user",
  default: [] as A[],
});

export const count = atom({
  key: "count",
  default: 12,
});

export const text = atom({
  key: "text",
  default: "",
});

export const charCount = selector({
  key: "charCount",
  get: ({ get }) => {
    const typedText = get(text);

    return typedText.length;
  },
});
