
import Importer from "./scripts/importer.js";
import {capitalize} from "./scripts/utils.js";
import Logger from "./scripts/logger.js";

Logger.logLevel = 3;

Hooks.on("init", () => {
    Logger.debug("This is run once Foundry VTT begins the initialization workflow.");

    // Register the module setting for the path to the folder containing the import data.
    game.settings.register("infinity-n-beyond", "importPath", {
        name: "Data Path",
        hint: "The path to the folder containing D&D Beyond data to import.",
        scope: "client",
        config: true,
        type: String,
        default: "."
    });
});

Hooks.on("ready", () => {
    Logger.debug("This is run once Foundry VTT initialization is done.");

    var typeToEntity = {"items": "Item", "spells": "Item", "monsters": "Actor"};

    // Create compendiums if they do not exist yet.
    ["items", "spells", "monsters"].forEach((item, _) => {
        if(!game.packs.has("world.inb-" + item))
        {
            console.log("Trying to create " + item + " compendium.");
            Compendium.create({
                entity: typeToEntity[item],
                label: capitalize(item) + " (JSON Import)",
                name: "inb-" + item,
                package: "world",
                path: "./packs/" + item + ".db",
                system: "dnd5e"
            });
        }
    });
});

Hooks.on("renderSidebarTab", () => {
    // Add import button
    if($.find("#infinity-n-beyond-import").length === 0)
    {
        var importHeader = $("#compendium").find(".directory-header").append(
            '<div class="header-actions action-buttons flexrow"><button id="infinity-n-beyond-import" class="import" type="submit"><i class="fas fa-file-import"></i>Import from JSON</button></div>'
        );
        importHeader.find("button").click(async () => {new Importer().render(true)});
    }
});