console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/api/src/main/java/org/apache/kafka/connect/health/ConnectorHealth.java.html" 
 , "texte" : "File connect/api/src/main/java/org/apache/kafka/connect/health/ConnectorHealth.java 17 rule violations " 
 , "fic2"  : "./qc/connect/api/src/main/java/org/apache/kafka/connect/health/ConnectorHealth.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.connect.health.ConnectorHealth"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.health.ConnectorHealth" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "ConnectorHealth"
 , "c2" : "ConnectorHealth(String;ConnectorState;Map<Integer,TaskState>;ConnectorType)"
 , "c3" : "2"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "name()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ConnectorState"
 , "c2" : "connectorState()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<Integer,TaskState>"
 , "c2" : "tasksState()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ConnectorType"
 , "c2" : "type()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/health/ConnectorHealth.java.png" 

 , "ligneplantuml" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/health/ConnectorHealth.java.svg" }

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
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "14"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00010"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/health/ConnectorHealth.java.html#10"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00010] The class ConnectorHealth contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00023"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/health/ConnectorHealth.java.html#23"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00023] In method org.apache.kafka.connect.health.ConnectorHealth.ConnectorHealth@POLYN170150 the MagicNumber/String  'Connector name is required' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00025"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/health/ConnectorHealth.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00025] In method org.apache.kafka.connect.health.ConnectorHealth.ConnectorHealth@POLYN170150 the MagicNumber/String  'connectorState can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00026"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/health/ConnectorHealth.java.html#26"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00026] In method org.apache.kafka.connect.health.ConnectorHealth.ConnectorHealth@POLYN170150 the MagicNumber/String  'tasks can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00027"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/health/ConnectorHealth.java.html#27"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00027] In method org.apache.kafka.connect.health.ConnectorHealth.ConnectorHealth@POLYN170150 the MagicNumber/String  'type can't be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/health/ConnectorHealth.java.html#55"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00055] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/health/ConnectorHealth.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00058] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/health/ConnectorHealth.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method org.apache.kafka.connect.health.ConnectorHealth.equals@POLYN171801 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/health/ConnectorHealth.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method org.apache.kafka.connect.health.ConnectorHealth.equals@POLYN171801 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00059"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/health/ConnectorHealth.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.connect.health.ConnectorHealth.equals@POLYN171801 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/health/ConnectorHealth.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.connect.health.ConnectorHealth.toString@POLYN172697 the MagicNumber/String  'ConnectorHealth{' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/health/ConnectorHealth.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method org.apache.kafka.connect.health.ConnectorHealth.toString@POLYN172697 the MagicNumber/String  'name='' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/health/ConnectorHealth.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method org.apache.kafka.connect.health.ConnectorHealth.toString@POLYN172697 the MagicNumber/String  '\'' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/health/ConnectorHealth.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.connect.health.ConnectorHealth.toString@POLYN172697 the MagicNumber/String  ', connectorState=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/health/ConnectorHealth.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.connect.health.ConnectorHealth.toString@POLYN172697 the MagicNumber/String  ', tasks=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/health/ConnectorHealth.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.connect.health.ConnectorHealth.toString@POLYN172697 the MagicNumber/String  ', type=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/health/ConnectorHealth.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.connect.health.ConnectorHealth.toString@POLYN172697 the MagicNumber/String  '}' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
