/**
 * Extend the basic ItemSheet
 * @extends {ItemSheet}
 */
export class BladesItemSheet extends ItemSheet {
  /** @override */
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["band-of-blades", "sheet", "item"],
      width: 900,
      height: 900,
      tabs: [
        {
          navSelector: ".sheet-tabs",
          contentSelector: ".sheet-body",
          initial: "description",
        },
      ],
    });
  }

  /* -------------------------------------------- */

  /** @override */
  get template() {
    const path = "systems/band-of-blades/templates/items";
    let simple_item_types = [
      "background",
      "heritage",
      "heritage_ability",
      "vice",
      "crew_reputation",
    ];
    let template_name = `${this.item.data.type}`;

    if (simple_item_types.indexOf(this.item.data.type) >= 0) {
      template_name = "simple";
    }

    return `${path}/${template_name}.html`;
  }

  /* -------------------------------------------- */

  /** @override */
  activateListeners(html) {
    super.activateListeners(html);

    // Everything below here is only needed if the sheet is editable
    if (!this.options.editable) return;
  }

  /* -------------------------------------------- */

  /** override */
  _getFormData(form) {
    const FD = BladesHelpers.getFormDataHelper(form, this.editors);
    return FD;
  }

  /* -------------------------------------------- */
}
