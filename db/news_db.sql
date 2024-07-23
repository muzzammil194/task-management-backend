-- MySQL dump 10.13  Distrib 8.0.32, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: news_db
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'News'),(2,'Opinion'),(3,'Legal'),(4,'Health'),(5,'Faith'),(6,'Women'),(7,'Youth'),(8,'Life'),(9,'Culture');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `news`
--

DROP TABLE IF EXISTS `news`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `news` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category_id` int DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `news_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news`
--

LOCK TABLES `news` WRITE;
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
INSERT INTO `news` VALUES (1,1,'Breaking News: Market Hits Record High','John Smith','Today the market reached an all-time high...','2024-07-01 10:00:00'),(2,2,'Opinion: The Future of Technology','Alice Johnson','In my opinion, the future of technology is bright...','2024-07-02 11:00:00'),(3,3,'Legal Update: New Law Passed','Robert Brown','A new law has been passed which will affect...','2024-07-03 12:00:00'),(4,4,'Health Tips: Staying Fit During Summer','Emily Davis','Here are some tips to stay fit during the hot summer months...','2024-07-04 09:00:00'),(5,5,'Faith and Spirituality in Modern Times','Michael Wilson','Faith remains an important part of many people\'s lives...','2024-07-05 08:00:00'),(6,6,'Women in Leadership: Breaking Barriers','Sophia Garcia','Women continue to break barriers in various fields...','2024-07-06 07:00:00'),(7,7,'Youth: The Leaders of Tomorrow','William Martinez','Today\'s youth are tomorrow\'s leaders...','2024-07-07 06:00:00'),(8,8,'Life Hacks: Simplify Your Daily Routine','Olivia Anderson','Here are some life hacks to simplify your daily routine...','2024-07-08 05:00:00'),(9,9,'Culture: The Evolution of Art','Isabella Thomas','Art has evolved significantly over the years...','2024-07-09 04:00:00'),(10,1,'Breaking News: Local Election Results','Liam Taylor','The local election results are in and...','2024-07-10 03:00:00'),(11,2,'Opinion: Climate Change is Real','Ava Harris','Climate change is a pressing issue that needs...','2024-07-11 02:00:00'),(12,3,'Legal Update: Court Ruling on Privacy','Noah White','A recent court ruling on privacy rights...','2024-07-12 01:00:00'),(13,1,'Breaking News: Major Earthquake Strikes','Jane Doe','A major earthquake has struck the region...','2024-07-13 10:00:00'),(14,2,'Opinion: The Importance of Voting','David Green','Voting is a fundamental right and responsibility...','2024-07-14 11:00:00'),(15,3,'Legal Analysis: Recent Supreme Court Decisions','Laura King','The Supreme Court has recently made several...','2024-07-15 12:00:00'),(16,4,'Health Alert: New Virus Outbreak','Sarah Clark','Health officials have announced a new virus outbreak...','2024-07-16 09:00:00'),(17,5,'Faith: Understanding Different Religions','Chris Moore','Understanding different religions can help foster...','2024-07-17 08:00:00'),(18,6,'Women in Tech: Achievements and Challenges','Lisa Lee','Women in tech face unique challenges...','2024-07-18 07:00:00'),(19,7,'Youth: Balancing School and Extracurriculars','Mark Allen','Balancing schoolwork and extracurricular activities...','2024-07-19 06:00:00'),(20,8,'Life Tips: Managing Stress Effectively','Nancy Perez','Here are some effective ways to manage stress...','2024-07-20 05:00:00'),(21,9,'Culture: The Renaissance Art Movement','Sophia Rodriguez','The Renaissance was a pivotal period in art history...','2024-07-21 04:00:00'),(22,1,'Breaking News: Government Shutdown','Tom Baker','The government has officially entered a shutdown...','2024-07-22 03:00:00'),(23,2,'Opinion: The Role of Social Media in Society','Emma Scott','Social media has a significant impact on our daily lives...','2024-07-23 02:00:00'),(24,3,'Legal Insights: Understanding Intellectual Property','Kevin Adams','Intellectual property law is crucial in protecting...','2024-07-24 01:00:00'),(25,4,'Health Study: Benefits of a Plant-Based Diet','Rachel Wright','A new study shows the benefits of a plant-based diet...','2024-07-25 10:00:00'),(26,5,'Faith: Meditation Practices for Beginners','Jack Harris','Meditation can bring peace and clarity...','2024-07-26 11:00:00'),(27,6,'Women in Science: Pioneering Research','Olivia Lewis','Women have made significant contributions to science...','2024-07-27 12:00:00'),(28,7,'Youth Programs: Opportunities for Growth','William Young','Youth programs provide essential opportunities...','2024-07-28 09:00:00'),(29,8,'Life Skills: Financial Planning for Young Adults','Emily Hall','Financial planning is crucial for young adults...','2024-07-29 08:00:00'),(30,9,'Culture: The Influence of Music on Society','James Walker','Music has a profound influence on society...','2024-07-30 07:00:00'),(31,1,'Breaking News: International Trade Agreement','Ava Robinson','A new international trade agreement has been signed...','2024-07-31 06:00:00'),(32,2,'Opinion: Education Reform is Needed','Mason Hernandez','Education reform is essential for future generations...','2024-08-01 05:00:00'),(33,3,'Legal Perspective: Data Privacy Laws','Sophia Martinez','Data privacy laws are becoming increasingly important...','2024-08-02 04:00:00'),(34,4,'Health Advice: Importance of Regular Exercise','Daniel Johnson','Regular exercise is key to maintaining good health...','2024-08-03 03:00:00'),(35,5,'Faith: The Power of Prayer','Lucas Thompson','Prayer can be a powerful tool for many...','2024-08-04 02:00:00'),(36,6,'Women in Business: Leadership and Success','Mia Clark','Women leaders in business share their success stories...','2024-08-05 01:00:00'),(37,7,'Youth Engagement: Volunteering in the Community','Charlotte Lopez','Volunteering is a great way for youth to engage...','2024-08-06 10:00:00'),(38,8,'Life Advice: Balancing Work and Family','Benjamin Hill','Balancing work and family life is crucial for well-being...','2024-08-07 11:00:00'),(39,9,'Culture: Celebrating Diverse Traditions','Ella Scott','Celebrating diverse traditions enriches our lives...','2024-08-08 12:00:00'),(43,1,'test-1','test-2','test-3','2024-07-23 19:01:06');
/*!40000 ALTER TABLE `news` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'news_db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-24  0:01:37
