
import { InferOutput, array, boolean, number, object, pipe, string, transform  } from "valibot"

export const NumberSchema = pipe(
    number(),
    transform(value => Number(value))
)

export const DraftProductSchema = object({
    name: string(),
    price: NumberSchema
})

export const ProductSchema = object({
    id: number(),
    name: string(),
    price: NumberSchema,
    availability: boolean()
})
export const ProductsSchema = array(ProductSchema)
export type Product = InferOutput<typeof ProductSchema>