import type { FunctionExpression } from "../expression";

export interface LineLayer {
  paint: {
    "line-color": string | FunctionExpression;
    "line-width": LineWidth | FunctionExpression;
  };
}

/** @minimum 0 */
type LineWidth = number;
