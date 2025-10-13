import { models } from "./database/models/Relaciones.js";

export function checkRelations() {
    for (const [name, model] of Object.entries(models)) {
    console.log(`\n📦 ${name}`);
    for (const [alias, assoc] of Object.entries(model.associations)) {
        console.log(`  ├─ ${alias} -> ${assoc.associationType} (${assoc.target?.name})`);
        // associationType: 'BelongsTo', 'HasMany', 'HasOne', 'BelongsToMany'
        // alias: es el "as" que definiste
    }
    }
}