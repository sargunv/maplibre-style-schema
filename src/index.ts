import type { Layer } from "./layer";

export interface Style {
  $schema?: string;
  layers: Layer[];
}
