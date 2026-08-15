# Guía de Integración — Banco Consolidado de Escalas
## NeuroActiva — Preparación para Demo a Clientes

---

## Qué es esto

6 archivos, uno por especialidad, con **todas las escalas construidas y
validadas en esta conversación** (53 escalas/pruebas en total), listas
para pegar dentro de tu `pruebas.html` real.

| Archivo | Especialidad | Escalas incluidas |
|---|---|---|
| `fisioterapia_CONSOLIDADO.js` | Fisioterapia | FMA-LE, FMA-UE, Tinetti, Ashworth, Braden, Berg, TUG |
| `hidroterapia_CONSOLIDADO.js` | Hidroterapia | Halliwick WOTA1/WOTA2, Borg, Barthel Acuático, SWIM, FWS (niño/adulto), APTA, FRT, HydroPhysio |
| `terapia_ocupacional_CONSOLIDADO.js` | Terapia Ocupacional | Lawton-Brody, Barthel, Katz, MOHOST, FIM-FAM, MMSE, LOTCA, ACIS, AMPS, OSA, REE/OPHI-II, WeeFIM, EFPT, Role Checklist, PDMS-2, BOT-2, Sensory Profile 2, PEDI, Dinamometría |
| `terapia_lenguaje_CONSOLIDADO.js` | Terapia del Lenguaje | BDAE, WAB, Token Test, FOIS, MASA, GUSS, DOSS, MBGR, SSQ, Frenchay, VFSS Score |
| `psicologia_CONSOLIDADO.js` | Psicología | SF-36, BDI-II, STAI, GAD-7, Zarit |
| `neuropsicologia_CONSOLIDADO.js` | Neuropsicología | Test del Reloj, ACE-III |

---

## Paso 1: Verificar el estado real de tu pruebas.html

Como no estabas seguro si `pruebas_COMPLETO.html` (de una sesión anterior,
73 escalas) ya está en vivo, antes de pegar nada:

1. Abre tu sitio real: https://jorgeandreshincapie.github.io/neuroactiva/pruebas.html
2. Como superadmin, revisa 2-3 escalas específicas que construimos en esta
   conversación (ej. busca "WAB" o "Token Test" o "GUSS") — si ya aparecen
   con ítems desglosados, esa parte ya estaba integrada. Si aparecen con
   un campo de puntaje libre (genérico), falta integrarla.
3. Esto te dice si estás partiendo de la versión vieja, de la versión con
   73 escalas, o de una mezcla.

## Paso 2: Integrar los archivos consolidados

Cada archivo consolidado usa el mismo patrón: `if (typeof escalasX !==
"undefined") { escalasX.push(...) }`. Esto significa:

1. Abre tu `pruebas.html` real en el editor (VS Code / Codespace)
2. Ubica la sección donde se declaran los arrays de escalas por
   especialidad (`escalasFisioterapia`, `escalasHidroterapia`,
   `escalasTerapiaOcupacional`, `escalasTerapiaLenguaje`,
   `escalasPsicologia`, `escalasNeuropsicologia`)
3. Pega el contenido del archivo consolidado correspondiente **después**
   de donde se declara ese array (para que `typeof` los detecte)
4. Repite para las 6 especialidades

**Importante**: si tu `pruebas.html` usa nombres de array distintos a
los que asumí (ej. `escalasFisio` en vez de `escalasFisioterapia`), avísame
el nombre exacto y ajusto los 6 archivos con un buscar-reemplazar rápido.

## Paso 3: Revisar duplicados antes de pegar

Si `pruebas_COMPLETO.html` ya tenía algunas de estas 53 escalas integradas
de la sesión anterior, pegar el consolidado las duplicaría (aparecerían
dos veces en el banco). Antes de pegar cada especialidad:

1. Busca por nombre (ej. "FIM-FAM", "Katz") en tu archivo actual
2. Si ya existe con ítems desglosados, no la vuelvas a pegar — bórrala del
   consolidado antes de integrar, o dime cuáles ya tenías y te entrego una
   versión filtrada sin esas

## Paso 4: Checklist de "Demo-Ready" antes de mostrar a clientes

- [ ] Confirmar que el login funciona (ya resuelto el problema de reglas de Firestore)
- [ ] Probar el flujo completo como admin: entrar a pruebas.html, seleccionar una escala de cada especialidad, verificar que los ítems se despliegan correctamente
- [ ] Verificar en consola del navegador (F12) que no haya errores JS al cargar pruebas.html con todo el contenido nuevo pegado
- [ ] Revisar especialmente las escalas donde detectamos y corregimos inconsistencias matemáticas (SF-36, WAB) — confirmar que muestran el resultado corregido
- [ ] Para el MASA: decidir si muestras la nota de discrepancia (240 vs 200) al cliente o la resuelves antes de la demo con el manual oficial
- [ ] Preparar 2-3 casos de prueba "bonitos" para mostrar en vivo (ej. un paciente con buen progreso, uno con alerta clínica) — más convincente que capturas vacías
- [ ] Verificar que el certificado/reporte final (si aplica) se genera bien con datos de una escala nueva
- [ ] Confirmar que el manual de usuario en PDF y la presentación pptx (ya generados antes) siguen reflejando el estado actual del producto

## Próximo paso sugerido

Cuéntame qué encontraste en el Paso 1 (si ya estaba la versión con 73
escalas en vivo o no) y seguimos desde ahí — puedo ayudarte a filtrar
duplicados o a preparar el script de verificación automática que ya usaste
antes para confirmar "sin duplicados" en el banco completo.
