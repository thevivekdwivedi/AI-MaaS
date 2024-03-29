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
INSERT INTO `prospect_savings` VALUES (1,'Important',100289.68,44319.93,406755.00,168960.59),(1,'Medium',28784.53,12720.43,233680.00,205730.20),(1,'Quick Win',81150.11,35861.79,550735.00,607288.00),(1,'Small',13693.91,6051.60,213900.00,518834.59),(2,'Important',1615009.00,713703.50,7927410.00,921195.12),(2,'Medium',460984.09,203717.73,3899478.00,516870.19),(2,'Quick Win',1351684.25,597335.19,9787374.00,1219189.62),(2,'Small',218809.80,96696.26,4835451.00,595367.38),(3,'Quick Win',656727.69,290220.59,11500000.00,804000.00),(4,'Important',1341800.75,592967.50,6131306.00,761656.00),(4,'Medium',379654.09,167776.42,3270485.00,398080.50),(4,'Quick Win',1141688.50,504534.09,7926456.00,950388.31),(4,'Small',182567.70,80680.18,4405558.00,527693.31),(5,'Important',1056687.00,466970.28,5030790.00,615242.19),(5,'Medium',302979.00,133892.23,2959399.00,264844.31),(5,'Quick Win',938368.00,414682.84,6881175.00,826495.88),(5,'Small',142847.20,63126.91,3416984.00,367819.31),(6,'Quick Win',300131.69,132633.91,13800000.00,1340000.00),(7,'Quick Win',541056.62,239103.30,9200000.00,1206000.00),(8,'Quick Win',466045.00,205954.20,9775000.00,1608000.00);
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

-- Dump completed on 2017-07-28  1:38:09
