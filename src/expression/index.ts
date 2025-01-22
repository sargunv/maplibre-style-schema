type Expression = LiteralExpression | FunctionExpression;

type LiteralExpression = string | number | boolean;

export type FunctionExpression = ZoomFn | LetFn | VarFn;

type ZoomFn = ["zoom"];

type LetFn = ["let", string, Expression, Expression];

type VarFn = ["var", string];
