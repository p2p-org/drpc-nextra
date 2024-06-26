import { CodeSnippetObject } from "./types";

export function getLanguageName(language: CodeSnippetObject["language"]) {
  switch (language) {
    case "js":
      return "JavaScript";
    case "shell":
      return "Shell";
    case "node":
      return "Node.js";
    case "go":
      return "Go";
    case "python":
      return "Python";
    case "rust":
      return "Rust";
    default:
      return "Unknown";
  }
}
