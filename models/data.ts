import type {Proyecto, Servicio, LandingInfo} from "~/models/index";
import {queryContent} from "#imports";

const proyectos = await queryContent<Proyecto>('proyectos').find()

// const proyectos: Proyecto[] = [
//     {nombre: 'Decalixto', descripcion: 'Descripcion de Decalixto', route: 'decalixto'},
//     {nombre: 'Que Pijo', descripcion: 'Descripcion de Que pijo', route: 'que-pijo'}
// ];
const servicios: Servicio[] = [
    {
        icono: 'i-material-symbols:globe',
        nombre: 'Desarrollo Web',
        descripcion: 'Diseñamos y desarrollamos sitios web personalizados y adaptativos que se ajustan a tus necesidades específicas.'
    },
    {
        icono: 'i-material-symbols:phone-android',
        nombre: 'Desarrollo de Aplicaciones Móviles',
        descripcion: 'Creamos aplicaciones móviles intuitivas y de alto rendimiento para Android e iOS.'
    },
    {
        icono: 'i-material-symbols:palette-outline',
        nombre: 'Diseño UI/UX',
        descripcion: 'Ofrecemos servicios de diseño de interfaz y experiencia de usuario para garantizar que tu producto sea atractivo y fácil de usar.'
    },
    {
        icono: 'i-material-symbols:dashboard-customize-outline',
        nombre: 'Desarrollo de Software a Medida',
        descripcion: 'Desarrollamos soluciones de software personalizadas que se adaptan a los requerimientos específicos de tu negocio.'
    },
    {
        icono: 'i-material-symbols:search',
        nombre: 'Consultoría Tecnológica',
        descripcion: 'Proporcionamos asesoramiento experto para optimizar tus procesos tecnológicos y mejorar la eficiencia operativa.'
    },
    {
        icono: 'i-material-symbols:performance-max-outline',
        nombre: 'Marketing Digital',
        descripcion: 'Implementamos estrategias de marketing digital para aumentar tu visibilidad en línea y atraer más clientes.'
    },
    {
        icono: 'i-material-symbols:contextual-token-outline-rounded',
        nombre: 'SEO y Optimización de Contenido',
        descripcion: 'Optimizamos tu sitio web para motores de búsqueda para mejorar su ranking y atraer más tráfico orgánico.'
    },
    {
        icono: 'i-material-symbols:settings-suggest-outline',
        nombre: 'Mantenimiento y Soporte',
        descripcion: 'Ofrecemos servicios de mantenimiento y soporte continuo para asegurar que tus sistemas funcionen sin problemas.'
    },
    {
        icono: 'i-material-symbols:automation-outline',
        nombre: 'Automatización de Procesos',
        descripcion: 'Implementamos soluciones de automatización para mejorar la eficiencia y reducir los errores en tus operaciones diarias.'
    },
];
const landingInfo: LandingInfo = {}

export default {proyectos, servicios, landingInfo}