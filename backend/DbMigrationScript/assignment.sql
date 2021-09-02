-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 02, 2021 at 11:07 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `assignment`
--

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `id_blogs` int(11) NOT NULL,
  `BlogHeader` varchar(100) NOT NULL,
  `BlogBody` text NOT NULL,
  `Creator_Id` bigint(20) NOT NULL,
  `BlogImg` varchar(200) NOT NULL DEFAULT 'biba',
  `TimeStamp` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`id_blogs`, `BlogHeader`, `BlogBody`, `Creator_Id`, `BlogImg`, `TimeStamp`) VALUES
(271, 'Best dog blog', 'So to help my canine friends out there to stay in touch and up to date I’ve compiled a list of the very best dog blogs and websites I could find. I wanted to call it ‘Alfie’s ultimate list of dog blogs’ or ‘the best dog blogs ever’ or even ‘compulsory reading for dogs and puppies of all ages’, but in the end I settled for ‘top dog blogs’ and I think that covers it!\n\nI will add links whenever I find new and exciting blogs out there, so please come back regularly… Enjoy your reading and if you’re  a new friend of mine and would like your blog added to my list, then please leave a comment below and I’ll get in touch as soon as I’ve finished my dinner.', 82, 'img/image_2021-09-01_011538.png', '9/2/2021'),
(272, 'Blue Morpho', 'The blue morpho is known all over the world to be one of the world\'s most beautiful butterflies, and that\'s because of its bright blue color on the upperside of its wings. The underside of the blue morpho\'s wings looks different with a brown color and eyespots.', 82, 'img/image_2021-09-02_224230.png', '9/2/2021'),
(273, 'This Beautiful world', 'We’ve carefully selected these blogs which are exclusively created for women and these blogs are actively creating great content to educate, inspire and empower women to get fit, travel more and maintaining strong relationships with super quality information.', 83, 'img/image_2021-08-29_193852.png', '9/2/2021'),
(274, 'The Power of Rivers', 'Rivers are powerful in many ways. They feed communities, support economies and are one of the most productive ecosystems on the planet. They can also provide electricity to millions of people. Hydropower development is contributing to one of the largest expansions of dams seen in history.', 83, 'img/image_2021-08-29_223430.png', '9/2/2021'),
(275, ' Marvel Entertainment!', 'The Marvel Cinematic Universe (MCU) is an American media franchise and shared universe centered on a series of superhero films produced by Marvel Studios. The films are based on characters that appear in American comic books published by Marvel Comics. The franchise also includes television series, short films, digital series, and literature. The shared universe, much like the original Marvel Universe in comic books, was established by crossing over common plot elements, settings, cast, and characters.\n\nThe first MCU film is Iron Man (2008), which began the films of Phase One culminating in the crossover film The Avengers (2012). Phase Two began with Iron Man 3 (2013) and concluded with Ant-Man (2015). Phase Three began with Captain America: Civil War (2016) and concluded with Spider-Man: Far From Home (2019). The first three phases in the franchise are collectively known as \"The Infinity Saga\". The films of Phase Four began with Black Widow (2021).', 84, 'img/image_2021-08-26_145616.png', '9/3/2021'),
(276, ' Wild power of nature', 'Nature, in the broadest sense, is the natural, physical, material world or universe. \"Nature\" can refer to the phenomena of the physical world, and also to life in general. The study of nature is a large, if not the only, part of science. Although humans are part of nature, human activity is often understood as a separate category from other natural phenomena.[1]\n\nThe word nature is borrowed from the Old French nature and is derived from the Latin word natura, or \"essential qualities, innate disposition\", and in ancient times, literally meant \"birth\".[2] In ancient philosophy, natura is mostly used as the Latin translation of the Greek word physis (φύσις), which originally related to the intrinsic characteristics that plants, animals, and other features of the world develop of their own accord.[3][4] The concept of nature as a whole, the physical universe, is one of several expansions of the original notion;[1] it began with certain core applications of the word φύσις by pre-Socratic philosophers (though this word had a dynamic dimension then, especially for Heraclitus), and has steadily gained currency ever since. During the advent of modern scientific method in the last several centuries, nature became the passive reality, organized and moved by divine laws.[5][6] With the Industrial revolution, nature increasingly became seen as the part of reality deprived from intentional intervention: it was hence considered as sacred by some traditions (Rousseau, American transcendentalism) or a mere decorum for divine providence or human history (Hegel, Marx). However, a vitalist vision of nature, closer to the presocratic one, got reborn at the same time, especially after Charles Darwin.[1]', 84, 'img/image_2021-08-29_223601.png', '9/3/2021'),
(277, 'GOOD MORNING', 'Good Morning Messages: One sweet good morning message from you can make your loved one’s entire day. Help them kick-start their day with a new spirit by showing your love and care through a good morning text, note, card, or email. Every morning is a great opportunity to start again and celebrate life, also it’s the time when one needs some motivation. Let’s inspire your precious ones by sending some good morning messages, and they will know that someone cares for them. These good morning wordings can pour sweetness into your relationship. Sail your morning wishes towards your special one, friends, boyfriend, girlfriend, colleague, boss, or someone in the family and social media', 82, 'img/image_2021-09-02_224334.png', '9/3/2021'),
(278, 'Wild Sunset', 'I believe that, as a writer, describing a sunset is one of the best ways to transport your readers to your scene.\n\nAlmost all sunsets are bold, brilliant, and rich in color. So unless you want to focus more on other parts of the scenery, it usually won\'t suffice to say something like \"the sky was bright orange and red\". Figure out what\'s unique about the sunset in particular, and accentuate that.\n\nHere are a few sunsets, courtesy of google images, with my descriptions and thought process.', 83, 'img/tree-736885__340.jpg', '9/3/2021');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id_User` bigint(20) NOT NULL,
  `Login` varchar(100) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Password` varchar(100) NOT NULL,
  `ApiKey` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id_User`, `Login`, `Email`, `Password`, `ApiKey`) VALUES
(82, 'leoner', 'leonid.90@inbox.ru', '$2b$10$jkluy5ZOaRSB4vzSliTGle3FKxNcbZKInmdbDwkQJes3NSqCufpTS', ''),
(83, 'valera', 'leonid.90@inbox.ru', '$2b$10$R9FeslJSf909iqRZJ8UIOeLYGD2Nv37htoj3Kzxod.mtq5dVu.yRW', '66820f1d8d80398b050deadba50663ea1ff727782520e8826aea6b193f25da0f326c935c91307fd0aee6c75784e0f01220ed2a3004dd749e7bc1f8bbe6ea6e94'),
(84, 'Rolands', 'leonid.90@inbox.ru', '$2b$10$brjvNJq.m4Se1raRG9bsOeziRyuRs1gqt6odJdQaes5FI7kxtqdXW', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id_blogs`),
  ADD KEY `id_User` (`Creator_Id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_User`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id_blogs` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=279;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id_User` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=85;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `blogs`
--
ALTER TABLE `blogs`
  ADD CONSTRAINT `blogs_ibfk_1` FOREIGN KEY (`Creator_Id`) REFERENCES `users` (`id_User`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
