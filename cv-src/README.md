# CV para Akkomplish

Fuente editable: `juan-luis-soto-akkomplish.tex`.
PDF: `../output/pdf/juan-luis-soto-akkomplish.pdf`.

Versión en inglés: `juan-luis-soto-akkomplish-en.tex` y `../output/pdf/juan-luis-soto-akkomplish-en.pdf`.

Corrección confirmada por el usuario: Senior Software Developer de julio de 2024 a junio de 2026. Integration Specialist se presenta desde julio de 2026, como continuación de esa etapa. A petición del usuario, migración multiempresa, integración de pagos y supervisión del software aparecen bajo Integration Specialist; se eliminó la contabilidad electrónica. Los proyectos previos de desarrollo se presentan bajo Senior Software Developer. El teléfono fue proporcionado directamente por el usuario.

## Compilación

Desde la raíz del repositorio, con una distribución LaTeX instalada:

```powershell
New-Item -ItemType Directory -Force output/pdf | Out-Null
pdflatex -interaction=nonstopmode -halt-on-error -output-directory=output/pdf cv/juan-luis-soto-akkomplish.tex
```

También se puede subir el `.tex` a Overleaf y seleccionar pdfLaTeX.

## Criterio editorial

Presentación actual: nombre completo Juan Luis Soto Martinez, tipografía serif Times, texto negro, encabezado y secciones centrados, una columna y una página. Adaptación clásica de estilo Harvard, tomando como referencia https://careerservices.fas.harvard.edu/resources/bullet-point-resume-template/ y conservando la experiencia antes de la formación. SCRUM Fundamentals Certified (2021) se conserva a petición del usuario.

Última revisión: el puesto de Integration Specialist es reciente. Las nuevas integraciones, incluidos pagos, se describen como alcance e iniciativas futuras; se conserva el mantenimiento actual de ArtexaPRO y del API Gateway. No se incluyen proveedores financieros ni detalles de la integración. Se retiraron promedio y cursos de 2021 para priorizar experiencia.

Contexto adicional consultado: `Otos AWS Roadmap/01_Sitio_web.md`, `Otos AWS Roadmap/02_CV_LaTeX.md` y la conversación «Ayuda para completar manual» del proyecto ARTEXA AMERICA. Esta última respalda la elaboración de guías operativas de Business Central. El caso de mejora de consulta de pedidos puede servir en entrevista; no se añadieron cifras de rendimiento no verificadas. Los proyectos exploratorios no se presentan como implementaciones productivas.

CV en español e inglés para una oportunidad sin puesto especificado. Se priorizan Business Central, AL e integraciones empresariales por su relación con los servicios de https://akkomplish.com/mx/ (consultado el 17 de septiembre de 2026).

Los datos de experiencia, fechas, formación, idiomas y contacto proceden de `src/i18n/translations.ts`. No se agregaron certificaciones Microsoft, experiencia con AkkOn ni cifras de impacto no documentadas. La migración multiempresa se presenta como iniciativa en curso, de acuerdo con el portafolio.

No se modificaron ni activaron workflows de GitHub Actions: el usuario aclaró que solicitaba trabajar de forma autónoma.

## Actualización (sep 2026)

- Se incorporaron al CV los logros del registro interno de logros, usando únicamente su sección «Seguro de publicar»: RCA de integridad de datos en Business Central, migración cloud (PAYG a CSP y correo transaccional a Azure Communication Services), automatización de conciliación de pagos (descrita de forma genérica), migración de ERP heredados, herramienta de replicación multiempresa y asistente generativo en producción.
- No se incluyeron nombres de bancos, clientes ni proveedores, ni métricas no verificadas (el "10×" de ArtexaPRO queda pendiente de respaldo).
- Corrección de ubicación: las etapas hasta Desarrollador Senior fueron remotas; la etapa de Integration Specialist (jul 2026) es en Monterrey, NL.
- El sitio publica copias del PDF en `public/cv/juan-luis-soto-cv-es.pdf` y `-en.pdf`; re-copiar desde `output/pdf/` tras recompilar.
