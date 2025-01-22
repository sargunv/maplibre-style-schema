import type { FunctionExpression } from '../expression'

export interface LineLayer {
    paint: {
        'line-color': string | FunctionExpression
        'line-width': number | FunctionExpression
    }
}
