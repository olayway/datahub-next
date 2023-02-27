import { allCollections } from "contentlayer/generated";

export default function getCollections() {
  return allCollections.sort((a, b) => new Date(b.created) - new Date(a.created));
}
