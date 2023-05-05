import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

//Base de Datos
import { data_shein } from './data_base_ropa.js';

//Estilos CSS
import style from './producto_style.module.css';

export default function Producto() {
    const producto = useParams();
    const v = producto.tipo.split('&')
    const i1 = parseInt(v[0])
    const i2 = parseInt(v[1])
    const ropa = data_shein[i1].lista_productos[i2]
    return (
        <div>
            <Imagen
                detalle={ropa.detalle}
                talla={ropa.talla}
                color={ropa.color}
                precio={ropa.precio}
                dataimg={ropa.dataimg}
            />
        </div>
    );
}

function Imagen(props) {
    const [dataimg_, setDataimg] = useState([])
    useEffect(() => { setDataimg(props.dataimg) }, [])

    return (
        <>
            <div className="container p-4">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-12 col-lg-6">
                        <div className="fs-4 fw-bolder lh-sm">{props.detalle}</div>
                        <div className="mt-3">
                            <div className={style.background + " fw-bolder mb-2"}>Talla: {props.talla}</div>
                            <div className={style.background + " fw-bolder"}>Bs: {props.precio} BOB</div>
                        </div>
                    </div>
                </div>
                <div className="row  mt-4">
                    {dataimg_.map((data) => (
                        <div className="col-6 col-md-4 col-lg-3 mb-4" key={data}>
                            <DataImg key={data} dataimg__={data} />
                        </div>
                    ))}
                </div>
            </div>
            <div className={style.pie}></div>
        </>
    );
}

function DataImg(props) {
    return (
        <a href={props.dataimg__[1]} target="_blank">
            <img className={style.imagen_referencia_producto} src={props.dataimg__[0]} />
        </a>
    );
}