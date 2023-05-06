-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 06, 2022 at 09:24 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blogdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `adminapi_adminsignup`
--

CREATE TABLE `adminapi_adminsignup` (
  `id` bigint(20) NOT NULL,
  `name` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `adminapi_adminsignup`
--

INSERT INTO `adminapi_adminsignup` (`id`, `name`, `email`, `password`) VALUES
(1, 'ajay postman', 'post@gmail.com', 'postman passworf'),
(2, 'Ajay Pratap Singh', 'ankupran@gmail.com', 'anku');

-- --------------------------------------------------------

--
-- Table structure for table `adminapi_blogcategory`
--

CREATE TABLE `adminapi_blogcategory` (
  `id` bigint(20) NOT NULL,
  `category` varchar(200) NOT NULL,
  `createdby` varchar(200) NOT NULL,
  `date` datetime(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `adminapi_blogcategory`
--

INSERT INTO `adminapi_blogcategory` (`id`, `category`, `createdby`, `date`) VALUES
(1, 'Stock Market', 'Ajay Pratap Singh', '2022-06-05 19:20:33.061859'),
(2, 'Mobile', 'Ajay Pratap Singh', '2022-06-05 19:20:49.936894'),
(3, 'Crypto Currency', 'Ajay Pratap Singh', '2022-06-05 21:49:21.358768');

-- --------------------------------------------------------

--
-- Table structure for table `auth_group`
--

CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `auth_group_permissions`
--

CREATE TABLE `auth_group_permissions` (
  `id` bigint(20) NOT NULL,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `auth_permission`
--

CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `auth_permission`
--

INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES
(1, 'Can add log entry', 1, 'add_logentry'),
(2, 'Can change log entry', 1, 'change_logentry'),
(3, 'Can delete log entry', 1, 'delete_logentry'),
(4, 'Can view log entry', 1, 'view_logentry'),
(5, 'Can add admin sign up', 2, 'add_adminsignup'),
(6, 'Can change admin sign up', 2, 'change_adminsignup'),
(7, 'Can delete admin sign up', 2, 'delete_adminsignup'),
(8, 'Can view admin sign up', 2, 'view_adminsignup'),
(9, 'Can add blog category', 3, 'add_blogcategory'),
(10, 'Can change blog category', 3, 'change_blogcategory'),
(11, 'Can delete blog category', 3, 'delete_blogcategory'),
(12, 'Can view blog category', 3, 'view_blogcategory'),
(13, 'Can add user sign up', 4, 'add_usersignup'),
(14, 'Can change user sign up', 4, 'change_usersignup'),
(15, 'Can delete user sign up', 4, 'delete_usersignup'),
(16, 'Can view user sign up', 4, 'view_usersignup'),
(17, 'Can add permission', 5, 'add_permission'),
(18, 'Can change permission', 5, 'change_permission'),
(19, 'Can delete permission', 5, 'delete_permission'),
(20, 'Can view permission', 5, 'view_permission'),
(21, 'Can add group', 6, 'add_group'),
(22, 'Can change group', 6, 'change_group'),
(23, 'Can delete group', 6, 'delete_group'),
(24, 'Can view group', 6, 'view_group'),
(25, 'Can add user', 7, 'add_user'),
(26, 'Can change user', 7, 'change_user'),
(27, 'Can delete user', 7, 'delete_user'),
(28, 'Can view user', 7, 'view_user'),
(29, 'Can add content type', 8, 'add_contenttype'),
(30, 'Can change content type', 8, 'change_contenttype'),
(31, 'Can delete content type', 8, 'delete_contenttype'),
(32, 'Can view content type', 8, 'view_contenttype'),
(33, 'Can add session', 9, 'add_session'),
(34, 'Can change session', 9, 'change_session'),
(35, 'Can delete session', 9, 'delete_session'),
(36, 'Can view session', 9, 'view_session'),
(37, 'Can add add blog', 10, 'add_addblog'),
(38, 'Can change add blog', 10, 'change_addblog'),
(39, 'Can delete add blog', 10, 'delete_addblog'),
(40, 'Can view add blog', 10, 'view_addblog'),
(41, 'Can add admin sign up', 11, 'add_adminsignup'),
(42, 'Can change admin sign up', 11, 'change_adminsignup'),
(43, 'Can delete admin sign up', 11, 'delete_adminsignup'),
(44, 'Can view admin sign up', 11, 'view_adminsignup');

-- --------------------------------------------------------

--
-- Table structure for table `auth_user`
--

CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `auth_user`
--

INSERT INTO `auth_user` (`id`, `password`, `last_login`, `is_superuser`, `username`, `first_name`, `last_name`, `email`, `is_staff`, `is_active`, `date_joined`) VALUES
(1, 'pbkdf2_sha256$320000$BTOIGvVmZTTnpI3uwI92xE$zKDAa9Rtqt3bNORTHYPMwyveU2OOXZPAtmgNQE8EtBk=', NULL, 1, 'admin', '', '', '', 1, 1, '2022-06-05 10:38:33.688001');

-- --------------------------------------------------------

--
-- Table structure for table `auth_user_groups`
--

CREATE TABLE `auth_user_groups` (
  `id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `auth_user_user_permissions`
--

CREATE TABLE `auth_user_user_permissions` (
  `id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `blogapi_addblog`
--

CREATE TABLE `blogapi_addblog` (
  `id` bigint(20) NOT NULL,
  `heading` varchar(500) NOT NULL,
  `slug` varchar(500) NOT NULL,
  `tags` varchar(500) NOT NULL,
  `category` varchar(500) NOT NULL,
  `file` varchar(500) DEFAULT NULL,
  `views` int(11) DEFAULT NULL,
  `likes` int(11) DEFAULT NULL,
  `article` longtext NOT NULL,
  `createdby` varchar(500) NOT NULL,
  `date` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `blogapi_addblog`
--

INSERT INTO `blogapi_addblog` (`id`, `heading`, `slug`, `tags`, `category`, `file`, `views`, `likes`, `article`, `createdby`, `date`) VALUES
(1, 'Bitcoin is Dead new Dump Incoming', 'bitcoin-dead', 'crypto ', 'Crypto Currency', NULL, 0, 0, 'How does Bitcoin work?\nEach Bitcoin is a file stored in a digital wallet on a computer or smartphone. To understand how the cryptocurrency works, it helps to understand these terms and a little context:\n\nBlockchain: Bitcoin is powered by open-source code known as blockchain, which creates a shared public history of transactions organized into \"blocks\" that are \"chained\" together to prevent tampering. This technology creates a permanent record of each transaction, and it provides a way for every Bitcoin user to operate with the same understanding of who owns what.\n\nPrivate and public keys: A Bitcoin wallet contains a public key and a private key, which work together to allow the owner to initiate and digitally sign transactions. This unlocks the central function of Bitcoin — securely transferring ownership from one user to another.\n\nBitcoin mining: Users on the Bitcoin network verify transactions through a process known as mining, which is designed to confirm that new transactions are consistent with other transactions that have been completed in the past. This ensures that you can’t spend a Bitcoin you don’t have, or that you have previously spent. How does Bitcoin make money?\nNew Bitcoins are created as part of the Bitcoin mining process, in which they are offered as a lucrative reward to people who operate computer systems that help to validate transactions.\n\nBitcoin miners — also known as \"nodes\" — are the owners of high-speed computers which independently confirm each transaction, and add a completed \"block\" of transactions to the ever-growing \"chain,\" which has a complete, public and permanent record of every Bitcoin transaction.\n\nMiners are paid in Bitcoin for their efforts, which incentivizes the decentralized network to independently verify each transaction. This independent network of miners also decreases the chance for fraud or false information to be recorded, as the majority of miners need to confirm the authenticity of each block of data before it\'s added to the blockchain, in a process known as \"proof of work.', 'Admin', '2022-06-05 18:04:47.433716'),
(2, 'Appollow Hospital is Growing over 200 %', 'apollow-hospital', 'stock market', 'Stock Market', NULL, 0, 0, 'Shares of the Apollo Hospitals Enterprise Ltd NSE 1.25 %. traded at Rs 3564.0 on BSE at 11:42AM (IST) on Monday, down 0.68 per cent. The stock quoted a 52-week low price of Rs 3144.7 and a high of Rs 5930.7.\n\nEarlier in the day, the stock saw a gap down opening.\n\nAt the prevailing price, the stock traded at 48.4 times its trailing 12-month EPS of Rs 73.42 per share and 11.5 times its book value, as per BSE data.\n', 'Admin', '2022-06-05 18:07:13.612194'),
(3, 'Ether is Booming Perfect Time For Long', 'ether-booming-take-long', 'Crypto Currency , BlockChain ,  Ether, ', 'Crypto Currency', NULL, 0, 0, 'Ethereum is a decentralized open-source blockchain system that features its own cryptocurrency, Ether. ETH works as a platform for numerous other cryptocurrencies, as well as for the execution of decentralized smart contracts.\n\nEthereum was first described in a 2013 whitepaper by Vitalik Buterin. Buterin, along with other co-founders, secured funding for the project in an online public crowd sale in the summer of 2014. The project team managed to raise $18.3 million in Bitcoin, and Ethereum’s price in the Initial Coin Offering (ICO) was $0.311, with over 60 million Ether sold. Taking Ethereum’s price now, this puts the return on investment (ROI) at an annualized rate of over 270%, essentially almost quadrupling your investment every year since the summer of 2014.\n\nThe Ethereum Foundation officially launched the blockchain on July 30, 2015, under the prototype codenamed “Frontier.” Since then, there has been several network updates — “Constantinople” on Feb. 28, 2019, “Istanbul” on Dec. 8, 2019, “Muir Glacier” on Jan. 2, 2020, “Berlin” on April 14, 2021, and most recently on Aug. 5, 2021, the “London” hard fork.\n\nEthereum’s own purported goal is to become a global platform for decentralized applications, allowing users from all over the world to write and run software that is resistant to censorship, downtime and fraud.', 'Admin', '2022-06-06 23:47:39.599433');

-- --------------------------------------------------------

--
-- Table structure for table `django_admin_log`
--

CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext DEFAULT NULL,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) UNSIGNED NOT NULL CHECK (`action_flag` >= 0),
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `django_content_type`
--

CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `django_content_type`
--

INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES
(1, 'admin', 'logentry'),
(2, 'adminApi', 'adminsignup'),
(3, 'adminApi', 'blogcategory'),
(6, 'auth', 'group'),
(5, 'auth', 'permission'),
(7, 'auth', 'user'),
(10, 'blogApi', 'addblog'),
(8, 'contenttypes', 'contenttype'),
(11, 'home', 'adminsignup'),
(9, 'sessions', 'session'),
(4, 'userApi', 'usersignup');

-- --------------------------------------------------------

--
-- Table structure for table `django_migrations`
--

CREATE TABLE `django_migrations` (
  `id` bigint(20) NOT NULL,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `django_migrations`
--

INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES
(1, 'contenttypes', '0001_initial', '2022-06-05 10:26:13.278833'),
(2, 'auth', '0001_initial', '2022-06-05 10:26:13.809393'),
(3, 'admin', '0001_initial', '2022-06-05 10:26:13.961397'),
(4, 'admin', '0002_logentry_remove_auto_add', '2022-06-05 10:26:13.971544'),
(5, 'admin', '0003_logentry_add_action_flag_choices', '2022-06-05 10:26:13.982736'),
(6, 'adminApi', '0001_initial', '2022-06-05 10:26:14.022359'),
(7, 'adminApi', '0002_blogcategory', '2022-06-05 10:26:14.052666'),
(8, 'contenttypes', '0002_remove_content_type_name', '2022-06-05 10:26:14.125949'),
(9, 'auth', '0002_alter_permission_name_max_length', '2022-06-05 10:26:14.187656'),
(10, 'auth', '0003_alter_user_email_max_length', '2022-06-05 10:26:14.206445'),
(11, 'auth', '0004_alter_user_username_opts', '2022-06-05 10:26:14.218330'),
(12, 'auth', '0005_alter_user_last_login_null', '2022-06-05 10:26:14.269123'),
(13, 'auth', '0006_require_contenttypes_0002', '2022-06-05 10:26:14.272453'),
(14, 'auth', '0007_alter_validators_add_error_messages', '2022-06-05 10:26:14.283216'),
(15, 'auth', '0008_alter_user_username_max_length', '2022-06-05 10:26:14.302234'),
(16, 'auth', '0009_alter_user_last_name_max_length', '2022-06-05 10:26:14.321701'),
(17, 'auth', '0010_alter_group_name_max_length', '2022-06-05 10:26:14.343106'),
(18, 'auth', '0011_update_proxy_permissions', '2022-06-05 10:26:14.353844'),
(19, 'auth', '0012_alter_user_first_name_max_length', '2022-06-05 10:26:14.371950'),
(20, 'sessions', '0001_initial', '2022-06-05 10:26:14.411934'),
(21, 'userApi', '0001_initial', '2022-06-05 10:26:14.436298'),
(22, 'userApi', '0002_alter_usersignup_interestedtags', '2022-06-05 10:26:14.496709'),
(23, 'blogApi', '0001_initial', '2022-06-05 11:31:53.677410'),
(24, 'home', '0001_initial', '2022-06-05 13:29:19.781795'),
(25, 'home', '0002_delete_adminsignup', '2022-06-05 13:30:35.819888');

-- --------------------------------------------------------

--
-- Table structure for table `django_session`
--

CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `userapi_usersignup`
--

CREATE TABLE `userapi_usersignup` (
  `id` bigint(20) NOT NULL,
  `name` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(500) NOT NULL,
  `interestedtags` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `userapi_usersignup`
--

INSERT INTO `userapi_usersignup` (`id`, `name`, `email`, `password`, `interestedtags`) VALUES
(1, 'ankur031', 'singhajaypratap606@gmail.com', 'user', NULL),
(2, 'ajay', 'saicomputer@gmail.com', ' bdfgn', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `adminapi_adminsignup`
--
ALTER TABLE `adminapi_adminsignup`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `adminapi_blogcategory`
--
ALTER TABLE `adminapi_blogcategory`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `auth_group`
--
ALTER TABLE `auth_group`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  ADD KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`);

--
-- Indexes for table `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`);

--
-- Indexes for table `auth_user`
--
ALTER TABLE `auth_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  ADD KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`);

--
-- Indexes for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  ADD KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`);

--
-- Indexes for table `blogapi_addblog`
--
ALTER TABLE `blogapi_addblog`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  ADD KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`);

--
-- Indexes for table `django_content_type`
--
ALTER TABLE `django_content_type`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`);

--
-- Indexes for table `django_migrations`
--
ALTER TABLE `django_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `django_session`
--
ALTER TABLE `django_session`
  ADD PRIMARY KEY (`session_key`),
  ADD KEY `django_session_expire_date_a5c62663` (`expire_date`);

--
-- Indexes for table `userapi_usersignup`
--
ALTER TABLE `userapi_usersignup`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `adminapi_adminsignup`
--
ALTER TABLE `adminapi_adminsignup`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `adminapi_blogcategory`
--
ALTER TABLE `adminapi_blogcategory`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `auth_group`
--
ALTER TABLE `auth_group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_permission`
--
ALTER TABLE `auth_permission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT for table `auth_user`
--
ALTER TABLE `auth_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `blogapi_addblog`
--
ALTER TABLE `blogapi_addblog`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `django_content_type`
--
ALTER TABLE `django_content_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `django_migrations`
--
ALTER TABLE `django_migrations`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `userapi_usersignup`
--
ALTER TABLE `userapi_usersignup`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`);

--
-- Constraints for table `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`);

--
-- Constraints for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  ADD CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  ADD CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  ADD CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  ADD CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
