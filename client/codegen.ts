import { CodegenConfig } from '@graphql-codegen/cli';

const NextCookie = "next-auth.csrf-token=1302f77543c2991cf54da46872b075ae19b573eb3c3a8dc6199accac1ff8c824%7Cc7a007c02a70ae44f4320db59edb7259f14ff4609bb682756e264bcaa6a236c9; next-auth.callback-url=http%3A%2F%2Flocalhost%3A3000%2F; __stripe_mid=32822dfc-6457-435e-b7da-7b759d34f423724f78; sb-127-auth-token=%7B%22access_token%22%3A%22eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjU0MzIxL2F1dGgvdjEiLCJzdWIiOiI1OGFmMjJjMi00ZjYyLTQwNzgtOWEzMi0yYzRhZjM3NTYyZWMiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzI3MjM4NTE1LCJpYXQiOjE3MjcyMzQ5MTUsImVtYWlsIjoibGFtZXJpYzk4ODhAZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvZmlsZSI6eyJsYW5ndWFnZSI6IkVuZ2xpc2giLCJsYW5ndWFnZXMiOlsiRW5nbGlzaCIsIkZyZW5jaCJdLCJ1c2VybmFtZSI6IlRlc3QifSwicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6eyJlbWFpbCI6ImxhbWVyaWM5ODg4QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwicGhvbmVfdmVyaWZpZWQiOmZhbHNlLCJzdWIiOiI1OGFmMjJjMi00ZjYyLTQwNzgtOWEzMi0yYzRhZjM3NTYyZWMifSwicm9sZSI6ImF1dGhlbnRpY2F0ZWQiLCJhYWwiOiJhYWwxIiwiYW1yIjpbeyJtZXRob2QiOiJwYXNzd29yZCIsInRpbWVzdGFtcCI6MTcyNzIyNzY2MH1dLCJzZXNzaW9uX2lkIjoiZTRlMDM0NDQtNmE4Yy00OTRkLWI4ZmMtYmRlY2Y1NDBmNjU4IiwiaXNfYW5vbnltb3VzIjpmYWxzZX0._9ZBbZhE_en0oQqG5fCW4iGB6O5U7vtQhUpHVXjiYkU%22%2C%22token_type%22%3A%22bearer%22%2C%22expires_in%22%3A3600%2C%22expires_at%22%3A1727238515%2C%22refresh_token%22%3A%22E1KLVj_aalc4kgDzS_Rdqg%22%2C%22user%22%3A%7B%22id%22%3A%2258af22c2-4f62-4078-9a32-2c4af37562ec%22%2C%22aud%22%3A%22authenticated%22%2C%22role%22%3A%22authenticated%22%2C%22email%22%3A%22lameric9888%40gmail.com%22%2C%22email_confirmed_at%22%3A%222024-09-14T23%3A30%3A56.132823Z%22%2C%22phone%22%3A%22%22%2C%22confirmed_at%22%3A%222024-09-14T23%3A30%3A56.132823Z%22%2C%22last_sign_in_at%22%3A%222024-09-25T01%3A27%3A40.608411Z%22%2C%22app_metadata%22%3A%7B%22profile%22%3A%7B%22language%22%3A%22English%22%2C%22languages%22%3A%5B%22English%22%2C%22French%22%5D%2C%22username%22%3A%22Test%22%7D%2C%22provider%22%3A%22email%22%2C%22providers%22%3A%5B%22email%22%5D%7D%2C%22user_metadata%22%3A%7B%22email%22%3A%22lameric9888%40gmail.com%22%2C%22email_verified%22%3Afalse%2C%22phone_verified%22%3Afalse%2C%22sub%22%3A%2258af22c2-4f62-4078-9a32-2c4af37562ec%22%7D%2C%22identities%22%3A%5B%7B%22identity_id%22%3A%226e74c256-d8da-4f3b-9ee7-246fc5e0b339%22%2C%22id%22%3A%2258af22c2-4f62-4078-9a32-2c4af37562ec%22%2C%22user_id%22%3A%2258af22c2-4f62-4078-9a32-2c4af37562ec%22%2C%22identity_data%22%3A%7B%22email%22%3A%22lameric9888%40gmail.com%22%2C%22email_verified%22%3Afalse%2C%22phone_verified%22%3Afalse%2C%22sub%22%3A%2258af22c2-4f62-4078-9a32-2c4af37562ec%22%7D%2C%22provider%22%3A%22email%22%2C%22last_sign_in_at%22%3A%222024-09-14T23%3A30%3A56.128783Z%22%2C%22created_at%22%3A%222024-09-14T23%3A30%3A56.128827Z%22%2C%22updated_at%22%3A%222024-09-14T23%3A30%3A56.128827Z%22%2C%22email%22%3A%22lameric9888%40gmail.com%22%7D%5D%2C%22created_at%22%3A%222024-09-14T23%3A30%3A56.11892Z%22%2C%22updated_at%22%3A%222024-09-25T03%3A28%3A35.351963Z%22%2C%22is_anonymous%22%3Afalse%7D%7D"

const config: CodegenConfig = {
  schema: {
    [process.env.GRAPHQL_ENDPOINT || 'http://localhost:4000/graphql']: {
      headers: {
        Cookie: NextCookie,
      },
    },
  },
  documents: ['**/*.{ts,tsx}'], 
  generates: {
    './__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      }
    }
  },
  ignoreNoDocuments: false,
};

export default config;
