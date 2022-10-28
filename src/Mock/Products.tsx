import { BsDoorClosed } from 'react-icons/bs'
import { IProducts, ProductsType } from 'Types/IProducts'


export const Products: Record<ProductsType, IProducts[]> =
{
    Paredes: [
        {
            id: 1,
            img: "Assets/img/Wall-lisa.jpg",
            name: "Parede lisa",
            category: {
                id: 1,
                label: "Wall"
            }
        },
        {
            id: 2,
            img: "Assets/img/Wall-tijolo.jpg",
            name: "Parede de tijolo",
            category: {
                id: 1,
                label: "Wall"
            }
        },
    ],

    Portas: [
        {
            id: 1,
            img: "Assets/img/PortaAco.png",
            name: "Porta",
            category: {
                id: 2,
                label: "Doors"
            }
        },
        {
            id: 2,
            img: "Assets/img/PortaMadeira.png",
            name: "Porta",
            category: {
                id: 2,
                label: "Doors"
            }
        },
    ],

    Moveis: [
        {
            id: 1,
            img: "Assets/img/SofaCinza.png",
            name: "Porta",
            category: {
                id: 3,
                label: "Doors"
            }
        },
        {
            id: 2,
            img: "Assets/img/SofaBranco.png",
            name: "Porta",
            category: {
                id: 3,
                label: "Doors"
            }
        },
    ],

    Pisos: [
        {
            id: 1,
            img: "Assets/img/Slider_P.jpg",
            name: "Porta",
            category: {
                id: 4,
                label: "Doors"
            }
        },

        {
            id: 2,
            img: "Assets/img/pisoMadeira.jfif",
            name: "Porta",
            category: {
                id: 4,
                label: "Doors"
            }
        },
    ]

}
