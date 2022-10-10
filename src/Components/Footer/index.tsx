import * as C from './style'
import {BsDoorClosed} from 'react-icons/bs'
import {GiBrickWall} from 'react-icons/gi'
import Products from './Products'
import { useState } from 'react'
import { ProductsRender } from 'Mock/Products'

export const Category = [
    {
        id: 1,
        icon: <BsDoorClosed/>
    },

    {
        id: 2,
        icon: <GiBrickWall/>
    },

    {
        id: 3,
        icon: <BsDoorClosed/>
    },

    {
        id: 4,
        icon: <BsDoorClosed/>
    }
]

type ICategory = typeof Category[0]

export const Footer = () => {

    const [active, setActive] = useState<boolean | number | null>(null)


    const filtered = (item: ICategory) => {
        if(active !== item.id){
            setActive(item.id)
            return
        }else{
            setActive(null)
            return
        }
    }

    const filterSalles = active ? 
    ProductsRender.filter((item: any) => item.category.id === active) : []

    return(
        <>
        <C.Footer>
            <C.Box>
                {Category.map((item: any) => (
                    <C.Button
                        key={item.id}
                        type='button'
                        active={active === item.id ? true : false}
                        onClick={() => filtered({...item})}
                    >
                        {item.icon}
                    </C.Button>
                ))}
            </C.Box>  
        </C.Footer>
        
        <Products active={active} ProductsRendering={filterSalles} />
        
        </>
    )
}