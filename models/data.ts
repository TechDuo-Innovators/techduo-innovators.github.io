import type {Servicio, LandingInfo, Proyecto} from "~/models/index";
import {parseBodyContent} from "~/models/index";


const proyectos: Proyecto[] = await queryContent<Proyecto>('proyectos').find()
const servicios: Servicio[] = parseBodyContent<Servicio>(await queryContent('/servicios').findOne())
const landingInfo: LandingInfo = {}


export default {proyectos, servicios, landingInfo}