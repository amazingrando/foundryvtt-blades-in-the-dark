/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function () {
  // Define template paths to load
  const templatePaths = [
    // Actor Sheet Partials
    "systems/band-of-blades/templates/parts/coins.html",
    "systems/band-of-blades/templates/parts/attributes.html",
    "systems/band-of-blades/templates/parts/turf-list.html",
    "systems/band-of-blades/templates/parts/cohort-block.html",
  ];

  // Load the template parts
  return loadTemplates(templatePaths);
};
