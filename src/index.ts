/**
 * @amlplugins/google-youtube-analytics
 *
 * Thin namespaced re-export of the native @googleapis/youtubeanalytics SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * YouTube Analytics.
 */

import * as _sdk from "@googleapis/youtubeanalytics";
export * from "@googleapis/youtubeanalytics";
export { _sdk as sdk };
export default _sdk;
