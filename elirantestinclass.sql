-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Feb 25, 2020 at 06:12 PM
-- Server version: 10.1.19-MariaDB
-- PHP Version: 5.5.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `elirantestinclass`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(21) UNSIGNED NOT NULL,
  `comment` varchar(200) NOT NULL,
  `game_id` varchar(50) NOT NULL,
  `_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `comment`, `game_id`, `_date`) VALUES
(1, 'a-lot of text written here', '1', '2020-02-25 16:17:03'),
(2, 'tests', '1', '2020-02-25 16:36:46'),
(7, 'test', '4', '2020-02-25 17:05:17'),
(8, 'hello', '2', '2020-02-25 17:06:10'),
(9, 'test', '2', '2020-02-25 17:07:03'),
(10, 't', '2', '2020-02-25 17:07:43'),
(11, 'world', '2', '2020-02-25 17:08:31'),
(12, 'test', '2', '2020-02-25 17:10:12'),
(13, 'new\n', '2', '2020-02-25 17:10:19'),
(14, 'wow', '3', '2020-02-25 17:10:48');

-- --------------------------------------------------------

--
-- Table structure for table `games`
--

CREATE TABLE `games` (
  `id` int(21) UNSIGNED NOT NULL,
  `team-a` varchar(50) NOT NULL,
  `team-b` varchar(50) NOT NULL,
  `score-a` varchar(10) DEFAULT NULL,
  `score-b` varchar(10) NOT NULL,
  `_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `category` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `games`
--

INSERT INTO `games` (`id`, `team-a`, `team-b`, `score-a`, `score-b`, `_date`, `category`) VALUES
(1, 'FC Barcelona', 'Real-Madrid', '3', '1', '2020-01-01 06:27:17', 'Football'),
(2, 'Chelsea', 'Man United', '2', '2', '2020-02-14 20:00:00', 'Football'),
(3, 'Maccabi Tel-Aviv', 'Maccabi-Haifa', '2', '0', '2019-09-09 08:00:00', 'Football'),
(4, 'Maccabi Tel-Aviv', 'cska Moscow', '82', '61', '2019-06-05 15:00:00', 'Basketball'),
(5, 'Maccabi Tel-Aviv', 'Real-Madrid', '88', '91', '2019-05-22 05:29:00', 'Basketball'),
(6, 'FC Barcelona', 'Real-Madrid', '80', '81', '2020-02-09 11:00:00', 'Basketball'),
(7, 'Maccabi Tel-Aviv', 'Real-Madrid', '-', '-', '2020-06-02 15:00:00', 'Basketball'),
(8, 'FC Barcelona', 'Real-Madrid', '-', '-', '2020-10-01 10:00:00', 'Football'),
(9, 'Chelsea', 'Man United', '-', '-', '2020-08-01 13:00:00', 'Football');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(21) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT for table `games`
--
ALTER TABLE `games`
  MODIFY `id` int(21) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
