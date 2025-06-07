export default {
  dialect: "postgresql",
  schema: "./utils/db/schema.ts",
  out: "./drizzle",

  dbCredentials: {
    url: "postgresql://neondb_owner:npg_ia3MutTSp2vR@ep-tight-tooth-a8u2mfdb-pooler.eastus2.azure.neon.tech/neondb?sslmode=require",
    connectionString:
      "postgresql://neondb_owner:npg_ia3MutTSp2vR@ep-tight-tooth-a8u2mfdb-pooler.eastus2.azure.neon.tech/neondb?sslmode=require",
  },
};