console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Date.java.html" 
 , "texte" : "File connect/api/src/main/java/org/apache/kafka/connect/data/Date.java 13 rule violations " 
 , "fic2"  : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Date.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.connect.data.Date"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.data.Date" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "SchemaBuilder"
 , "c2" : "builder()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "fromLogical(Schema;java.util.Date)"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "java.util.Date"
 , "c2" : "toLogical(Schema;int)"
 , "c3" : "2"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Date.java.png" 

 , "ligneplantuml" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Date.java.svg" }

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
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "2"
}}
,
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
 , "c4" : "8"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Date.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00046] The class Date contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Date.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.connect.data.Date.builder@POLYN169924 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Date.java.html#46"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00046] For method fromLogical arguments Schema  schema|java.util.Date  value"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Date.java.html#46"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00046] The argument schema is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Date.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.connect.data.Date.fromLogical@POLYN170336 the MagicNumber/String  'Requested conversion of Date object but the schema does not match.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Date.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.connect.data.Date.fromLogical@POLYN170336 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Date.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.connect.data.Date.fromLogical@POLYN170336 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Date.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.connect.data.Date.fromLogical@POLYN170336 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Date.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.connect.data.Date.fromLogical@POLYN170336 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Date.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.connect.data.Date.fromLogical@POLYN170336 the MagicNumber/String  'Kafka Connect Date type should not have any time fields set to non-zero values.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Date.java.html#46"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00046] For method toLogical arguments Schema  schema|int  value"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Date.java.html#46"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00046] The argument schema is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Date.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.connect.data.Date.toLogical@POLYN171481 the MagicNumber/String  'Requested conversion of Date object but the schema does not match.' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
