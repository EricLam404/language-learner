# How to update database
1. ```npx supabase db reset```
2. ```npx prisma db push```
3. ```npx prisma db seed```
4. ```npx supabase gen types --lang=typescript --local > src/database.types.ts```


# Update Schema
1. ```npm run generate```