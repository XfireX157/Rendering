import * as C from './style'
import { useState } from 'react'
import { Products } from '../../Mock/Products'
import { ProductsType } from 'Types/IProducts'

const Buttons = [
    {
        id: 1,
        name: "Portas"
    },

    {
        id: 2,
        name: "Paredes"
    },

    {
        id: 3,
        name: "Moveis"
    },

    {
        id: 4,
        name: "Pisos"
    }
]

const Rodape = () => {

    const [active, setActive] = useState(null)
    const [menuSelected, setMenuSelectd] = useState<ProductsType | null>(null)

    const [products, setProducts] = useState({
        Portas: Products['Portas'][0],
        Paredes: Products['Paredes'][0],
        Moveis: Products['Moveis'][0],
        Pisos: Products['Pisos'][0]
    })

    const handleSelectMenuItem = (index: number) => {
        if(menuSelected){
            const slider = Products[menuSelected][index]
            setProducts((prev) => ({ ...prev, [menuSelected]: slider}))
        }
    }

    const OpenEclosed = (index: any) => {
        setMenuSelectd(index)
    }

    return (
        <>
            <C.Container>
                <C.Box>
                    {Buttons.map((item) => (
                        <C.Span isActive={active === item.name ? true : false}
                        key={item.id} 
                        onClick={() => OpenEclosed(item.name)}>{item.name}</C.Span>
                    ))}
                </C.Box>
            </C.Container>

            <div>
                <C.Porta>
                    <img src={products.Portas.img} alt="" />
                </C.Porta>
                <C.Wall>
                    <img src={products.Paredes.img} alt="" />
                </C.Wall>

                <C.Furniture>
                    <img src={products.Moveis.img} alt="" />
                </C.Furniture>

                <C.Floor>
                    <img src={products.Pisos.img} alt="" />
                </C.Floor>
            </div>

        

            <C.Nav>
                <C.Box>
                    {menuSelected && Products[menuSelected].map((item: any, index: any) => (
                        <img src={item.img} alt="sadasd" onClick={() => handleSelectMenuItem(index)} />
                    ))}
                </C.Box>
            </C.Nav>
        </>
    )
}

export default Rodape 