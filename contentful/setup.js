const spaceImport = require("contentful-import");
const exportFile = require("./export.json");

const { CONTENTFUL_SPACE_ID, CONTENTFUL_MANAGEMENT_TOKEN } = process.env;

if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_MANAGEMENT_TOKEN) {
  throw new Error(
    [
      "Parameters missing...",
      "Please run the setup command as follows",
      "CONTENTFUL_SPACE_ID=XXX CONTENTFUL_MANAGEMENT_TOKEN=CFPAT-XXX npm run setup",
    ].join("\n")
  );
}

spaceImport({
  spaceId: "g8l6c2uvmzxo",
  managementToken: "CFPAT-NVDwukbwpJaXBlr2YRT6eAt2fctoqtzV4D_eZa6GgzQ",
  content: exportFile,
})
  .then(() => console.log("The content model of your space is set up!"))
  .catch((e) => console.error(e));
