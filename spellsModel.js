const mongoose = require("./db.js");
const schema = {
    spellName: { type: mongoose.SchemaTypes.String, required: false },
    Level: { type: mongoose.SchemaTypes.String, required: false },
    School: { type: mongoose.SchemaTypes.String, required: false },
    Ritual: { type: mongoose.SchemaTypes.String, required: false },
    CastingTime: { type: mongoose.SchemaTypes.String, required: false },
    Range: { type: mongoose.SchemaTypes.String, required: false },
    TargetArea: { type: mongoose.SchemaTypes.String, required: false },
    V: { type: mongoose.SchemaTypes.String, required: false },
    S: { type: mongoose.SchemaTypes.String, required: false },
    M: { type: mongoose.SchemaTypes.String, required: false },
    Components: { type: mongoose.SchemaTypes.String, required: false },
    Cost: { type: mongoose.SchemaTypes.String, required: false },
    Concentration: { type: mongoose.SchemaTypes.String, required: false },
    Duration: { type: mongoose.SchemaTypes.String, required: false },
    SavingThrow: { type: mongoose.SchemaTypes.String, required: false },
    DamageType: { type: mongoose.SchemaTypes.String, required: false },
    Damage: { type: mongoose.SchemaTypes.String, required: false },
    sourcebook: { type: mongoose.SchemaTypes.String, required: false },
    Page: { type: mongoose.SchemaTypes.String, required: false },
    AdditionalDetail: { type: mongoose.SchemaTypes.String, required: false },
    PerHigherSpellLevel: { type: mongoose.SchemaTypes.String, required: false },
    Bard: { type: mongoose.SchemaTypes.String, required: false },
    Cleric: { type: mongoose.SchemaTypes.String, required: false },
    Druid: { type: mongoose.SchemaTypes.String, required: false },
    Paladin: { type: mongoose.SchemaTypes.String, required: false },
    Ranger: { type: mongoose.SchemaTypes.String, required: false },
    Sorceror: { type: mongoose.SchemaTypes.String, required: false },
    Warlock: { type: mongoose.SchemaTypes.String, required: false },
    Wizard: { type: mongoose.SchemaTypes.String, required: false },
    
};
const collectionName = "spells"; // Name of the collection of documents
const spellsSchema = mongoose.Schema(schema);
const spells = mongoose.model(collectionName, spellsSchema);

module.exports = spells;