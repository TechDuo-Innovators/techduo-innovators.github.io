import type {MarkdownParsedContent, MarkdownRoot, ParsedContent, Toc} from '@nuxt/content'
import * as fs from 'fs'
import * as path from 'path'

export function parseBodyContent<T>(queryResult: any): T[] {
    let {body, ...others} = queryResult
    return body?.map<T>((value) => {
        return {...others, ...value}
    })
}

export interface Proyecto extends MarkdownParsedContent {
    nombre: string;
    descripcion: string;
    image: string;
    images: string[];
}

export interface Servicio extends ParsedContent {
    nombre: string;
    descripcion: string;
    icono: string;
}

export class LandingInfo {

}