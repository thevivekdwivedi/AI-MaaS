-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: localhost    Database: nodetut
-- ------------------------------------------------------
-- Server version	5.6.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `prospect_savings`
--

DROP TABLE IF EXISTS `prospect_savings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `prospect_savings` (
  `Prospect_ID` int(11) NOT NULL,
  `Enablement_Strategy` varchar(255) NOT NULL,
  `Supplier_Compliance_Savings_USD` float(16,2) DEFAULT NULL,
  `Invoice_Error_Reductions_Savings_USD` float(16,2) DEFAULT NULL,
  `PO_Requisition_Transmission_Savings_USD` float(16,2) DEFAULT NULL,
  `Invoice_Receipt_Processing_Savings_USD` float(16,2) DEFAULT NULL,
  PRIMARY KEY (`Prospect_ID`,`Enablement_Strategy`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prospect_savings`
--

LOCK TABLES `prospect_savings` WRITE;
/*!40000 ALTER TABLE `prospect_savings` DISABLE KEYS */;
INSERT INTO `prospect_savings` VALUES (1,'Important',0.01,0.00,0.00,0.00),(1,'Medium',0.00,0.00,0.00,0.00),(1,'Quick Win',0.01,0.01,0.00,0.00),(1,'Small',0.00,0.00,0.00,0.00),(2,'Important',0.00,0.00,0.00,0.00),(2,'Medium',0.00,0.00,0.00,0.00),(2,'Quick Win',0.00,0.00,0.00,0.00),(2,'Small',0.00,0.00,0.00,0.00),(3,'Quick Win',0.01,0.00,0.00,0.00);
/*!40000 ALTER TABLE `prospect_savings` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-07-25 16:34:24
