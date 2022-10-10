import * as C from './style'
import {ProductsRender} from 'Mock/Products'
import Button from 'Components/Button'
import { useState } from 'react'
import { Category } from '..'

type ProductsCards = typeof ProductsRender[0]

interface IProps {
    ProductsRendering: ProductsCards[],
    active?: boolean | number | null
}

const Products = ({ProductsRendering, active}: IProps) => {

    const [addImg, setAddImg] = useState<any>(Category[0])

    const handleClick= (index: number) => {
        console.log(index)
        const slider = Category[index]
        setAddImg(slider)
    }

    return (
            <C.Container active={active}> 
                    {ProductsRendering.map((item, index) => (
                    <C.Box key={item.id}> 
                            <Button onClick={() => handleClick(item.id)} type='button'>{item.img}</Button>
                            <span>{item.name}</span>
                        </C.Box>
                    ))}
            </C.Container>
    )
}

export default Products