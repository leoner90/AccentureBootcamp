-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 20, 2021 at 06:49 PM
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
  `Creator_Id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`id_blogs`, `BlogHeader`, `BlogBody`, `Creator_Id`) VALUES
(1, 'HEADER', 'BODY', 43),
(15, 'New Post Eddeddeded', 'And This is new Body', 43),
(16, 'lets doit', 'whoooooou', 43),
(21, 'asd', 'kiki', 43),
(37, '1234', '31', 47),
(38, '123', '23asd', 47),
(41, '123123gg', '321gg', 54);

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
(43, 'leoner3', 'leonid.90@inbox.ru', '$2b$10$fNspRHTqr59SQCcJIYIkkOd9881VskmPyG5pIF1Uegk7BHTqY4Hm6', '7fab10d5375f8d519645d5fcea01a85469b66d92d414225ad083b97181179fb0db84c3431ae2ab128598f63bbd9cc2b167f05ea363e26dc2771d879599ca09cb'),
(44, 'leoner99', 'leonid.gurockin@gmail.com', '$2b$10$94ewOGYLq7qKE8LpurPINOMq1bwvkLNFjIbz6CkjriAkagvR.atz.', 'c90c3c56c4dcf17f1f67f75c04ab4d442e9476f6a26b00899dbcb3fc51081ee479a27cf3effcd0e95ace25c4fa1f51e076ad596b46a43a3cd8dc3f58a04f9bbc'),
(45, 'leoner991', 'le', '$2b$10$PqpGhGNYBWl4KvRYCfH3lu7x1955Vs5afuGzAfa.Jsnvgq/lSnm1m', '0cde607b0dce54aaf1c3fe0e0f4971f31ba20fa396f785171babf7437a4c8556baf873fd48c77985a010a8dec09fc56785812c2bc79032a69ef6e7427443ae4d'),
(46, 'leoner22', 'leoner', '$2b$10$P6fdXnSbhfsI6273D9fViuZzCiLrMGpswkga0BaK/LB.7kiwU.EtC', 'ab3a2e6736695cde09e10a89bd135617a8c198fcabc49d240e48fa5d46103db477a3aac04cb2c82a5afd5d98c4dfbf3e88c716245d302dd0d5183c1e91e37582'),
(47, 'leoner', 'leonid.90@inbox.ru', '$2b$10$LH3lKOSaDmjnym1dbdt5fehr4GOVFakqvDvTxp7x.Jxw1ZZ3lxDmy', 'cfbb5fc8c99e0eefc373fd7af0e4f13163681e9a5b1e8c951dd60f6e599e31cf2b6a8c96e811ba1216feff4b1f0bde96671262cb01ab20588a270d627324ec2a'),
(48, 'leoner1', 'leonid.90@inbox.ru', '$2b$10$JJnaNZHTNR0ZHNkPK0SVPOyJQMtyE3h6ZrxPlx8xelLcMezTtxpBa', 'c4ce1269456cd5b2150725a8a04a7ee747b7352ec22924af8e5a937f70592693ff9dea4ed6bdbc8b819197bf77da10d90837dfb98ff3fa5ca60f68e66fa7098e'),
(49, 'leoner19', 'leonid.90@inbox.ru', '$2b$10$t6Ig5KAqy5dDfT7o0i5uBu6kRZ7O.lHSNNwZ/WGjVq2pgX40XHUae', 'bcf0bbdf42ed38b6e2efdbcebfc5aa0a4b4cf0fc50c5633d1cbb71e57d87b86f859afe97c0a1ec177580785f11019adeebdb2d906a2b69efd6c042493760404f'),
(50, 'leoner999', 'leonid.90@inbox.ru', '$2b$10$VZXz2rbT4v/xWaW5BBn.N./HuR0odgnzxucdEOc0D/Ze2zUl5FuLy', 'b2a8c13f44d07de361ff74dea434648893c9a8021a524b95eb6626c2ecc84086f73b0d7d3f2bd77f5f0da190150094e6e243587732eb71edb5720ec7a3a2a0ca'),
(51, 'leoner123123', 'sdf', '$2b$10$Tg1mVVvOCOlDH4L1NO2Ux.u45DGUq6M/uzHpVUCYRp2LOx5vH4M4q', 'd44633af72c2c468c82fdce9a72ffe1dd1e5319643c028bb29ca4e5985704df0b593bac7da59385fa066e76cde823845ba29fb2326ad9f2a2acbc7ed642cae33'),
(52, 'leoners', 'leonid.90@inbox.ru', '$2b$10$U7HzX9uFwE0LE2aJQ/30S.j51qQHrl0B2VSfdHbNmiLBXFwRADLeu', 'fd03371ccc29a7b652c4e97ca2e72ec36830ecc0e63618a3aeed69e9d38be091ccf0fc8fbd051ac76618a8a09768a38865da1b3822216cfcd9f6b78774d38f57'),
(53, 'leonerss', 'asd', '$2b$10$I4qKGyJRvAUETYDziDFZm.A9hcrxGiThEypYlgVrHZ1p9/M7.oHL.', '9e061a1eb5e8aa6822c523d721cd1ee205f2ad3c26624b8464c26d21dfc68b753cdd687305e847cb584a02af4624c39a0927cc205090550f48eb531015a9e5e4'),
(54, 'leonerk', 'asd', '$2b$10$P8UsitRWAj8djpycYF7hFuKVg7PO1Ngnj0e/B7B.p8yge0skWJNuu', 'b4ab94f4a205eabb70b9d3fcb856fd52bcd7db373aa870e947e9dfcf051cf1ba40407c7cfdfebae51aa4c80c33e2b9bdfac2ff1b26207461412d0a1f5cf45279'),
(55, 'leonerz', 'asd', '$2b$10$0oElC/gKWXYfbe3tnE5lbuvxFI05AojwS/x6gWDu8OIK82k97oZGq', '0cd26f91189deff6a80ff6f915e4747b03ec04ba464b206491eacf5d6d683d0a6a09f908653c0b78209234c9dae4c93c1030d2d69863024fc210eeee23df36b5'),
(56, 'leonerka', 'qwe', '$2b$10$5cLGqSFMfBtdhDhSfNCBxe.amhNdyK7O7Oh2cw.b7Wiw82O0emqAu', '1fabac795af8f232d04041340f93ac48baafcddc3cf4d11b71fd700e5776f20da7d5864811332fd916e3ed03d011c30a93427498e60554d5d5b3a7f58860dca0'),
(57, 'valera', 'valera@gmail.com', '$2b$10$KYxXtVPMwyois3cwCn.KK.Q6YDBvbvJo0bpuTsMc4Howra6AATF.e', 'de5b94e869121a37965768cae500ea679a81631ed81e9274c5dc0a14a6e333bb93aa61c8dce708dcf3243b431879140fefc529bf7c5c5f3e4c181f30e0cf6d9b');

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
  MODIFY `id_blogs` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id_User` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

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
