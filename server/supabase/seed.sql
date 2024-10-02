-- Insert User
INSERT INTO "User" ("userId", email, username, "createdAt", "updatedAt")
VALUES (
  '00c60d2d-4b8f-4019-b187-e85f6dffc000',
  'user1@example.com',
  'user1',
  NOW(),
  NOW()
);

-- Insert Languages with Codes
INSERT INTO "Language" (id, name, code)
VALUES 
(1, 'English', 'en'),
(2, 'Spanish', 'es'),
(3, 'French', 'fr'),
(4, 'German', 'de'),
(5, 'Chinese', 'zh'),
(6, 'Japanese', 'ja'),
(7, 'Korean', 'ko'),
(8, 'Italian', 'it'),
(9, 'Portuguese', 'pt'),
(10, 'Russian', 'ru');

-- Insert Tags
INSERT INTO "Tag" (id, name, "createdAt", "updatedAt")
VALUES 
(1, 'beginner', NOW(), NOW()),
(2, 'fairy tale', NOW(), NOW()),
(3, 'principiante', NOW(), NOW()),
(4, 'cuento de hadas', NOW(), NOW());

-- Create User-Language relationships
INSERT INTO "_LanguageToUser" ("A", "B")
VALUES 
(1, '00c60d2d-4b8f-4019-b187-e85f6dffc000'),  -- English for user1
(2, '00c60d2d-4b8f-4019-b187-e85f6dffc000');  -- Spanish for user1

-- Insert Stories
INSERT INTO "Story" (id, title, description, content, difficulty, "readCount", "userId", "languageName", "isPublished", "isReviewed", "createdAt", "updatedAt")
VALUES 
(
  1,
  'English Story',
  'A simple English story',
  'Once upon a time...',
  1,
  0,
  '00c60d2d-4b8f-4019-b187-e85f6dffc000',
  'English',
  false,
  false,
  NOW(),
  NOW()
),
(
  2,
  'Historia en español',
  'Una historia simple en español',
  'Había una vez...',
  1,
  0,
  '00c60d2d-4b8f-4019-b187-e85f6dffc000',
  'Spanish',
  false,
  false,
  NOW(),
  NOW()
);

-- Create Story-Tag relationships
INSERT INTO "_StoryToTag" ("A", "B")
VALUES 
(1, 1),  -- English story - beginner
(1, 2),  -- English story - fairy tale
(2, 3),  -- Spanish story - principiante
(2, 4);  -- Spanish story - cuento de hadas

-- Insert Vocabularies
INSERT INTO "Vocabulary" (word, meaning, example, "userId", "languageName", "createdAt", "updatedAt")
VALUES 
('hello', 'a greeting', 'Hello, how are you?', '00c60d2d-4b8f-4019-b187-e85f6dffc000', 'English', NOW(), NOW()),
('hola', 'a greeting', 'Hola, ¿cómo estás?', '00c60d2d-4b8f-4019-b187-e85f6dffc000', 'Spanish', NOW(), NOW());

-- Insert Worksheets
INSERT INTO "Worksheet" (content, "userId", "languageName", "createdAt", "updatedAt")
VALUES 
('English Worksheet 1', '00c60d2d-4b8f-4019-b187-e85f6dffc000', 'English', NOW(), NOW()),
('Spanish Worksheet 1', '00c60d2d-4b8f-4019-b187-e85f6dffc000', 'Spanish', NOW(), NOW());