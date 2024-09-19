# How to update database
1. ```npx prisma db push```
2. ```npx supabase db reset```
3. ```npx supabase gen types --lang=typescript --local > src/database.types.ts```


# Update Schema
1. ```npm run generate```