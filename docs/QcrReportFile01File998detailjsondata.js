console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/api/src/main/java/org/apache/kafka/connect/util/ConnectorUtils.java.html" 
 , "texte" : "File connect/api/src/main/java/org/apache/kafka/connect/util/ConnectorUtils.java 9 rule violations " 
 , "fic2"  : "./qc/connect/api/src/main/java/org/apache/kafka/connect/util/ConnectorUtils.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.connect.util.ConnectorUtils"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.util.ConnectorUtils" , "link" : "" , "methodes" : [ 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/util/ConnectorUtils.java.png" 

 , "ligneplantuml" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/util/ConnectorUtils.java.svg" }

] 
, 
"data04" : [
]
, 
"data05" : [
]
, 
"data06" : [
]
, 
"data07" : [
]
, 
"data08" : [
]
, 
"data11" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "6"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00008"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/util/ConnectorUtils.java.html#8"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00008] The class ConnectorUtils contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00010"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/util/ConnectorUtils.java.html#10"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00010] The argument elements is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00023"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/util/ConnectorUtils.java.html#23"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00023] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00011"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/util/ConnectorUtils.java.html#11"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00011] In method org.apache.kafka.connect.util.ConnectorUtils the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00012"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/util/ConnectorUtils.java.html#12"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00012] In method org.apache.kafka.connect.util.ConnectorUtils the MagicNumber/String  'Number of groups must be positive.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00020"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/util/ConnectorUtils.java.html#20"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00020] In method org.apache.kafka.connect.util.ConnectorUtils the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00021"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/util/ConnectorUtils.java.html#21"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00021] In method org.apache.kafka.connect.util.ConnectorUtils the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00022"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/util/ConnectorUtils.java.html#22"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00022] In method org.apache.kafka.connect.util.ConnectorUtils the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00024"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/util/ConnectorUtils.java.html#24"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00024] In method org.apache.kafka.connect.util.ConnectorUtils the MagicNumber/String  0 should be converted to const"
}} 
]
"data15" : [
   "fichierplantumlsvg" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/util/ConnectorUtils.java.svg" }

};
console.log('leListeStr 99 main end');
