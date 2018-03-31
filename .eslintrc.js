module.exports = {
  extends: "airbnb",
  rules: {
    "react/jsx-filename-extension": ["js","jsx"],
    "jsx-a11y/anchor-is-valid": [ "error", {
      specialLink: [ "hrefLeft", "hrefRight" ],
      aspects: [ "noHref", "invalidHref", "preferButton" ]
    }]
  },
  env: {
    jest: true
  }
};
