"use strict";

import Ace from "./ace";

/**
 * Version metadata. This is both shown in the about screen and used as a version check.
 */
window["ACE_VERSION"] = "1.1.0";

(<any>window).Ace = new Ace();