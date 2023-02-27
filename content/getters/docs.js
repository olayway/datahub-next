import { allDocs } from "contentlayer/generated";

export default function getDocs() {
  return allDocs.sort((a, b) => a.url_path.localeCompare(b.url_path));
}
