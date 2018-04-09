module.exports = {
  parser: 'babel-eslint',
  extends: "airbnb",
  rules: {
    "react/jsx-filename-extension": ["js","jsx"],
    "jsx-a11y/anchor-is-valid": [ "error", {
      specialLink: [ "hrefLeft", "hrefRight" ],
      aspects: [ "noHref", "invalidHref", "preferButton" ],
    }],
    "flowtype/delimiter-dangle": [
      2,
      "always-multiline",
    ],
    "flowtype/generic-spacing": [
      2,
      "never",
    ],
    "flowtype/no-primitive-constructor-types": 2,
    "flowtype/no-types-missing-file-annotation": 2,
    "flowtype/no-weak-types": 2,
    "flowtype/object-type-delimiter": [
      2,
      "comma",
    ],
    "flowtype/require-parameter-type": 0,
    "flowtype/require-return-type": [
      0,
    ],
    "flowtype/require-valid-file-annotation": 2,
    "flowtype/semi": [
      2,
      "always",
    ],
    "flowtype/space-after-type-colon": [
      2,
      "always",
    ],
    "flowtype/space-before-generic-bracket": [
      2,
      "never",
    ],
    "flowtype/space-before-type-colon": [
      2,
      "never",
    ],
    "flowtype/type-id-match": [
      2,
      "^([A-Z][a-z0-9]+)+Type$",
    ],
    "flowtype/union-intersection-spacing": [
      2,
      "always",
    ],
    "flowtype/use-flow-type": 1,
    "flowtype/valid-syntax": 1,
    "flowtype/define-flow-type": 1,
    "flowtype-errors/show-errors": 2,
    "react/sort-comp": [1, { order: [
      'type-annotations',
    'static-methods',
    'lifecycle',
    'everything-else',
    'render'
  ] }],
  },
  plugins: [
    "flowtype",
    "flowtype-errors",
  ],
  env: {
    jest: true
  },
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  }
};
