import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

import { data_shein } from './data_base_ropa.js';
import style from './catalogo_style.module.css';

export default function Catalogo() {
    const [datashein, setDatashein] = useState([])
    useEffect(() => { setDatashein(data_shein) }, [])
    return (
        <>
            <div className="container p-4">
                {datashein.map((shein) => (
                    <div key={shein.id}>
                        <div className="fs-1 fw-bold mb-2">{shein.detalle}</div>
                        <Categoria listaProductos={shein.lista_productos} id={shein.id} />
                    </div>
                ))}
            </div>
            <div className={style.pie}></div>
        </>
    );
}

function Categoria(props) {
    const [categorias, setCategorias] = useState([]);
    useEffect(() => { setCategorias(props.listaProductos) })
    return (
        <div className="row">
            {categorias.map((cat) => (
                <CardItem key={cat.id} id={cat.id} imagen={cat.imagen} talla={cat.talla} detalle={cat.detalle} precio={cat.precio} ruta={props.id} />
            ))}
        </div>
    );
}

function CardItem(props) {
    const ruta = '/' + props.ruta + '&' + props.id
    return (
        <div className="col-lg-2 col-md-3 col-6 mb-4" key={props.id}>
            <Link className={style.link} to={ruta}>
                <div className={style.container_img}>
                    <img loading="lazy" className={style.imagen_producto} src={props.imagen} />
                    <div className={style.talla_cont + ' fs-6'}>{props.talla + ' - ' + props.id}</div>
                </div>
                <div className={style.container_descripcion}>
                    <div className={style.degrade}></div>
                    <div className={style.descripcion + " fs-6 fw-bolder mt-2"}>{props.detalle}</div>
                </div>
                <div className={style.precio + " fw-bold mt-2"}>Bs. {props.precio} BOB </div>
            </Link>
        </div >
    );
}
