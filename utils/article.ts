export interface Element {
  type: string;
  tag?: string;
  props?: object;
  children?: Array<Element | TextElement>;
}

export interface TextElement {
  type: string;
  value: string;
}

export const extractText = (elements: Array<Element | TextElement>): string => {
  let textContent = "";

  elements.forEach((element) => {
    if (element.type === "text") {
      // @ts-ignore
      textContent += element.value + " ";
      // @ts-ignore
    } else if (element.children) {
      // @ts-ignore
      textContent += extractText(element.children);
    }
  });

  return textContent.trim();
};

export const calculateReadingTime = (
  elements: Array<Element | TextElement>
): number => {
  const wordsPerMinute = 200;
  const content = extractText(elements);
  const textLength = content.split(" ").length;
  return Math.ceil(textLength / wordsPerMinute);
};

export const checkIfOutdated = (updatedAt: string | undefined): boolean => {
  if (!updatedAt) return true;
  const updatedDate = new Date(updatedAt);
  const now = new Date();
  const diff = now.getTime() - updatedDate.getTime();
  const days = diff / (1000 * 60 * 60 * 24);
  return days > 365;
};
