const examples = [
  {
    id: 1,
    name: "example 1 object"
  },
  {
    id: 2,
    name: "example 2, bit different"
  }
];

const findExampleForId = (id) =>
  examples.findIndex((example) => example.id === id);

export const showExample = (id) => {
  const exampleIndex = findExampleForId(id);

  if (exampleIndex > -1) {
    return examples[exampleIndex];
  }
  
  return { error: "Not found" };
};

export const allExamples = () => {
  return examples;
}

export const createExample = (data) => {
  examples.push({
    id: examples.length + 1,
    ...data
  });

  return data;
}

export const updateExample = (id, data) => {
  const exampleIndex = findExampleForId(id);

  if (exampleIndex > -1) {
    examples[exampleIndex] = {
      ...examples[exampleIndex],
      ...data
    };

    return examples[exampleIndex];
  }
  
  return { error: "Not found" };

}

export const removeExample = (id) => {
  const exampleIndex = findExampleForId(id);

  if (exampleIndex > -1) {
    examples.splice(exampleIndex, 1);
    return { message: "Removed"}
  }

  return { error: "Not found" };
}
