
export default {
    dialect:'postgresql',
    schema:'./utils/schema.js',
    out:'./drizzle',
    dbCredentials:{
       url:'postgresql://neondb_owner:npg_YsMyvGce3T1g@ep-sweet-sea-a5vjz4h1-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require',
       connectionStrings:process.env.NEXT_PUBLIC_DATABASE_URL
    }
}
