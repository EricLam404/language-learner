-- Insert User
INSERT INTO "User" (user_id, email, username, "createdAt", "updatedAt")
VALUES (
  '00c60d2d-4b8f-4019-b187-e85f6dffc000',
  'user1@example.com',
  'user1',
  NOW(),
  NOW()
);

-- Insert Languages
INSERT INTO "Language" (name)
VALUES 
('English'), ('Spanish'), ('French'), ('German'), ('Chinese'),
('Japanese'), ('Korean'), ('Italian'), ('Portuguese'), ('Russian');

-- Insert UserLanguages
INSERT INTO "UserLanguage" (user_id, "languageName")
VALUES 
('00c60d2d-4b8f-4019-b187-e85f6dffc000', 'English'),
('00c60d2d-4b8f-4019-b187-e85f6dffc000', 'Spanish');

-- Insert Vocabularies
INSERT INTO "Vocabulary" (word, meaning, example, user_id, "languageName", "createdAt", "updatedAt")
VALUES 
('hello', 'a greeting', 'Hello, how are you?', '00c60d2d-4b8f-4019-b187-e85f6dffc000', 'English', NOW(), NOW()),
('hola', 'a greeting', 'Hola, ¿cómo estás?', '00c60d2d-4b8f-4019-b187-e85f6dffc000', 'Spanish', NOW(), NOW());

-- Insert Stories
INSERT INTO "Story" (content, user_id, "languageName", "createdAt", "updatedAt")
VALUES 
('Once upon a time...', '00c60d2d-4b8f-4019-b187-e85f6dffc000', 'English', NOW(), NOW()),
('Había una vez...', '00c60d2d-4b8f-4019-b187-e85f6dffc000', 'Spanish', NOW(), NOW());

-- Insert Worksheets
INSERT INTO "Worksheet" (content, user_id, "languageName", "createdAt", "updatedAt")
VALUES 
('English Worksheet 1', '00c60d2d-4b8f-4019-b187-e85f6dffc000', 'English', NOW(), NOW()),
('Spanish Worksheet 1', '00c60d2d-4b8f-4019-b187-e85f6dffc000', 'Spanish', NOW(), NOW());