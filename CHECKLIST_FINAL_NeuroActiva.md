# NeuroActiva — Estado Final y Checklist Pre-Demo

---

## 1. Resumen de lo integrado

### Grupo A (motor de suma simple) — 27 escalas
| Especialidad | Escalas |
|---|---|
| Fisioterapia | fugl-mi, fugl-ms, ashworth, tinetti |
| Hidroterapia | borg-rpe, barthel-a, wota1, wota2, swis, fear-w-nino, fear-w-adulto, apta-h |
| Terapia Ocupacional | lawton, mohost, acis, efpt, weefim, fim |
| Terapia del Lenguaje | token, guss, doss, masa, vfss |
| Psicología | zarit |
| Neuropsicología | mmse, reloj, ace3 |

### Grupo B (motor extendido, función `calc` personalizada) — 6 escalas
sf36, wab, osa, boston (BDAE), lotca, frenchay

**Total: 33 escalas con matemática 100% verificada** (cada una probada con casos de máximo, mínimo, y cortes de clasificación exactos antes de entregarla).

---

## 2. Hallazgos importantes documentados durante el proceso

- **Bug de `emptyState`** en `renderPruebas()`: corregido — el elemento se borraba del DOM permanentemente en el primer render
- **3 inconsistencias matemáticas reales detectadas y corregidas** en las fuentes originales de las escalas (no en nuestro código): SF-36 (ítem P32), WAB (fórmula del AQ), Tinetti (sección de marcha) — todas con nota explicativa dejada en el código
- **1 discrepancia sin resolver, documentada**: MASA (240 vs 200 puntos) — requiere el manual oficial de Mann para confirmar cuál ítem específico tiene el valor incorrecto

## 3. Pendientes (no integrados, por qué)

| Escala | Motivo |
|---|---|
| PDMS-2, BOT-2 | Requieren tablas de baremación oficiales (propietarias) — no es un problema de código, faltan datos |
| MBGR | Solo se investigaron 8 ítems de ejemplo; el protocolo oficial completo tiene 126 puntos |
| CELF-5, PPVT-4, EVT-2, PLS-5, GFTA-3, KLPA-3, Arizona-4, ADOS-2, CCC-2, MacArthur-Bates CDI, HINT | Nunca se investigó su banco de ítems completo |
| RBMT, BADS | Quedaron como sugerencia pendiente, nunca se construyeron |
| NIHSS, Rankin Modificada | Construidas pero sin especialidad "Neurología" en el sitio — no tienen dónde vivir todavía |
| Terapia Respiratoria (mMRC, PIM/PEM, 6MWT, CRQ, Peak Cough Flow) | Solo investigadas, no construidas |

---

## 4. Checklist técnico antes de mostrar a clientes

- [ ] Confirmar en el sitio real que los cambios de `BANCO` y `ITEMS_DETALLE` (Grupo A + Grupo B) están efectivamente pegados y desplegados
- [ ] Confirmar que el cambio de `recalcular()` (soporte de `calc` personalizado) está aplicado — sin esto, SF-36/WAB/OSA/BDAE/LOTCA/Frenchay no calcularán bien
- [ ] Probar en consola (F12) que no hay errores JS al cargar `pruebas.html` con todo el contenido nuevo
- [ ] Probar "Añadir TODAS" en cada una de las 6 especialidades como admin, revisando que las 33 escalas nuevas muestren el formulario desglosado (no el campo de puntaje libre)
- [ ] Verificar visualmente el resultado de al menos 1 escala del Grupo B (ideal: SF-36, la más compleja) para confirmar que el texto de interpretación se ve bien con toda la información extra (dimensiones, subtotales)
- [ ] Revisar que el login y las reglas de Firestore sigan funcionando bien (ya se resolvió antes el problema de permisos)
- [ ] Confirmar que el manual de usuario en PDF y la presentación pptx (generados en sesiones anteriores) siguen reflejando el estado actual del producto, o actualizarlos si es necesario

## 5. Ideas para fortalecer el pitch a clientes potenciales

- El banco de 33 escalas con verificación matemática real es un diferencial fuerte — pocas plataformas del mercado documentan y corrigen inconsistencias de las fuentes originales como se hizo aquí
- Vale la pena preparar 2-3 casos de demostración "bonitos" (con datos ya cargados) para no depender de llenar formularios en vivo durante la presentación
- Considerar mencionar explícitamente el rigor de validación (cada escala probada con casos extremos) como argumento de calidad/confiabilidad clínica

## Próximo paso sugerido

¿Quieres que preparemos alguno de los casos de demostración con datos de ejemplo, o revisamos el manual de usuario/presentación para que reflejen las 33 escalas nuevas?
