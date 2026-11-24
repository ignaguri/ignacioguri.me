import { describe, expect, it } from "vitest";

import { publishedApps } from "../data/apps";
import { buildAppsSchema } from "../jsonLd";

describe("buildAppsSchema", () => {
  it("describes each app as a SoftwareApplication with its platforms", () => {
    const schemas = buildAppsSchema();
    const prostCounter = schemas.find((schema) => schema.name === "ProstCounter");
    const contactfile = schemas.find((schema) => schema.name === "Contactfile");

    expect(schemas).toHaveLength(publishedApps.length);
    expect(contactfile?.installUrl).toEqual([contactfile?.url]);
    expect(prostCounter?.operatingSystem).toBe("iOS, Android");
    expect(contactfile?.operatingSystem).toBe("iOS");
  });
});
