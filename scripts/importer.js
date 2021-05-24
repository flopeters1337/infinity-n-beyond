import Logger from "./logger.js";

export default class Importer extends Application {
    // Define importer tab options.
    static get defaultOptions() {
        const options = super.defaultOptions;
        options.id = "infinity-n-beyond-importer";
        options.template = "modules/infinity-n-beyond/handlebars/importer.hbs";
        options.resizable = false;
        options.height = "auto";
        options.width = 500;
        options.title = "Infinity & Beyond Importer";
        options.classes = ["sheet"];
        return options;
    }

    // Activate button listeners.
    activateListeners(html) {
        super.activateListeners(html);

        // Add hook on items import button.
        html.find("#import-items-start").click(async () => {
            this.importItems();
        });

        // Add hook on spells import button.
        html.find("#import-spells-start").click(async () => {
            this.importSpells();
        });
        
        // Add hook on monsters import button.
        html.find("#import-monsters-start").click(async () => {
            this.importMonsters();
        });

        // Add deletion listeners.
        html.find("#clear-items").click(async () => {
            this.removeItems();
        });

        html.find("#clear-spells").click(async () => {
            this.removeSpells();
        });

        html.find("#clear-monsters").click(async () => {
            this.removeMonsters();
        });

        html.find("#clear-all").click(async () => {
            this.removeItems();
            this.removeSpells();
            this.removeMonsters();
        });
    }

    async importItems() {
        // TODO: Add items import
        Logger.debug("Import items clicked!");
    }

    async importSpells() {
        // TODO: Add spells import
        Logger.debug("Import spells clicked!");
    }

    async importMonsters() {
        // TODO: Add monsters import
        Logger.debug("Import monsters clicked!");
    }

    // Delete the items compendium
    async removeItems() {
        if(game.packs.has("world.inb-items"))
            game.packs.delete("world.inb-items");
    }

    // Delete the spells compendium
    async removeSpells() {
        if(game.packs.has("world.inb-spells"))
            game.packs.delete("world.inb-spells");
    }

    // Delete the monsters compendium
    async removeMonsters() {
        if(game.packs.has("world.inb-monsters"))
            game.packs.delete("world.inb-monsters");
    }
}