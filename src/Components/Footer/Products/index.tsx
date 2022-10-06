import * as C from './style'
import {ProductsRender} from 'Mock/Products'
import Button from 'Components/Button'

type ProductsCards = typeof ProductsRender[0]

interface IProps {
    ProductsRendering: ProductsCards[],
    active?: boolean | number | null
}

const Products = ({ProductsRendering, active}: IProps) => {
    return (
        <C.Container active={active}> 
                {ProductsRendering.map((item) => (
                   <C.Box key={item.id}> 
                        <Button type='button'>{item.img}</Button>
                        <span>{item.name}</span>
                    </C.Box>
                ))}
        </C.Container>
    )
}

export default Products