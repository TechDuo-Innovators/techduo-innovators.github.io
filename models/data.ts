import type {Servicio, LandingInfo, Proyecto} from "~/models/index";
import {parseBodyContent} from "~/models/index";
import * as fs from 'node:fs'
import * as path from 'node:path'


const proyectos: Proyecto[] = (await queryContent<Proyecto>('proyectos').find()).map((value) => {
    return value
})
const servicios: Servicio[] = parseBodyContent<Servicio>(await queryContent('/servicios').findOne())
const landingInfo: LandingInfo = {}


export default {proyectos, servicios, landingInfo}