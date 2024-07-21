-- Insert Users
INSERT INTO "User" (email, username, "createdAt", "updatedAt") VALUES
('user1@example.com', 'user1', NOW(), NOW()),
('user2@example.com', 'user2', NOW(), NOW()),
('user3@example.com', 'user3', NOW(), NOW()),
('user4@example.com', 'user4', NOW(), NOW()),
('user5@example.com', 'user5', NOW(), NOW()),
('user6@example.com', 'user6', NOW(), NOW()),
('user7@example.com', 'user7', NOW(), NOW()),
('user8@example.com', 'user8', NOW(), NOW()),
('user9@example.com', 'user9', NOW(), NOW()),
('user10@example.com', 'user10', NOW(), NOW());

-- Insert Languages
INSERT INTO "Language" (name) VALUES
('English'),
('Spanish'),
('French'),
('German'),
('Chinese'),
('Japanese'),
('Korean'),
('Italian'),
('Portuguese'),
('Russian');

-- Insert UserLanguages
INSERT INTO "UserLanguage" ("userId", "languageName") VALUES
(1, 'English'),
(1, 'Spanish'),
(2, 'French'),
(2, 'German'),
(3, 'Chinese'),
(3, 'Japanese'),
(4, 'Korean'),
(4, 'Italian'),
(5, 'Portuguese'),
(5, 'Russian');

-- Insert Vocabularies
INSERT INTO "Vocabulary" (word, meaning, example, "userId", "languageName", "createdAt", "updatedAt") VALUES
('hello', 'a greeting', 'Hello, how are you?', 1, 'English', NOW(), NOW()),
('hola', 'a greeting', 'Hola, ¿cómo estás?', 1, 'Spanish', NOW(), NOW()),
('bonjour', 'a greeting', 'Bonjour, comment ça va?', 2, 'French', NOW(), NOW()),
('hallo', 'a greeting', 'Hallo, wie geht es dir?', 2, 'German', NOW(), NOW()),
('nihao', 'a greeting', '你好，你好吗?', 3, 'Chinese', NOW(), NOW()),
('konnichiwa', 'a greeting', 'こんにちは、お元気ですか?', 3, 'Japanese', NOW(), NOW()),
('annyeong', 'a greeting', '안녕하세요, 잘 지내세요?', 4, 'Korean', NOW(), NOW()),
('ciao', 'a greeting', 'Ciao, come stai?', 4, 'Italian', NOW(), NOW()),
('olá', 'a greeting', 'Olá, como vai você?', 5, 'Portuguese', NOW(), NOW()),
('privet', 'a greeting', 'Привет, как дела?', 5, 'Russian', NOW(), NOW());

-- Insert Stories
INSERT INTO "Story" (content, "userId", "languageName", "createdAt", "updatedAt") VALUES
('Once upon a time...', 1, 'English', NOW(), NOW()),
('Había una vez...', 1, 'Spanish', NOW(), NOW()),
('Il était une fois...', 2, 'French', NOW(), NOW()),
('Es war einmal...', 2, 'German', NOW(), NOW()),
('很久很久以前...', 3, 'Chinese', NOW(), NOW()),
('むかしむかし...', 3, 'Japanese', NOW(), NOW()),
('옛날 옛적에...', 4, 'Korean', NOW(), NOW()),
('C''era una volta...', 4, 'Italian', NOW(), NOW()),
('Era uma vez...', 5, 'Portuguese', NOW(), NOW()),
('Жили-были...', 5, 'Russian', NOW(), NOW());

-- Insert Worksheets
INSERT INTO "Worksheet" (content, "userId", "languageName", "createdAt", "updatedAt") VALUES
('English Worksheet 1', 1, 'English', NOW(), NOW()),
('Spanish Worksheet 1', 1, 'Spanish', NOW(), NOW()),
('French Worksheet 1', 2, 'French', NOW(), NOW()),
('German Worksheet 1', 2, 'German', NOW(), NOW()),
('Chinese Worksheet 1', 3, 'Chinese', NOW(), NOW()),
('Japanese Worksheet 1', 3, 'Japanese', NOW(), NOW()),
('Korean Worksheet 1', 4, 'Korean', NOW(), NOW()),
('Italian Worksheet 1', 4, 'Italian', NOW(), NOW()),
('Portuguese Worksheet 1', 5, 'Portuguese', NOW(), NOW()),
('Russian Worksheet 1', 5, 'Russian', NOW(), NOW());
