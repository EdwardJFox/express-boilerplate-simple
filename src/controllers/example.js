import {
  allExamples,
  showExample,
  createExample,
  updateExample,
  removeExample
} from "../helpers/example.js";

export const getExamples = (req, res, next) => {
  const examples = allExamples();

  return res.json({ examples });
};

export const getExample = (req, res, next) => {
  const example = showExample(parseInt(req.params.id));

  return res.json({ example });
};

export const postExample = (req, res, next) => {
  const example = createExample(req.body);

  return res.json({ example });
};

export const patchExample = (req, res, next) => {
  const example = updateExample(parseInt(req.params.id), req.body);

  return res.json({ example });
};

export const deleteExample = (req, res, next) => {
  const response = removeExample(parseInt(req.params.id));

  return res.json(response);
};
