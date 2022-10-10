import * as C from './style'
import {ProductsRender} from 'Mock/Products'
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
        const slider = ProductsRendering[index]
        setAddImg(slider)
    }


    return (
        <>
            <C.BoxImg>
                <C.img>
                    <img src={addImg.img} alt={addImg.name} /> 
                     <span>{addImg.name}</span>
                </C.img>
            </C.BoxImg>
            <C.Container active={active}> 
                    {ProductsRendering.map((item, index) => (
                    <C.Box key={item.id}> 
                            <img onClick={() => handleClick(index)} src={item.img} alt={item.name} />
                            <span>{item.name}</span>
                        </C.Box>
                    ))}
            </C.Container>

        </>
    )
}

export default Products