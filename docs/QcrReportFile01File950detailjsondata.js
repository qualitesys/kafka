console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Timestamp.java.html" 
 , "texte" : "File connect/api/src/main/java/org/apache/kafka/connect/data/Timestamp.java 9 rule violations " 
 , "fic2"  : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Timestamp.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.connect.data.Timestamp"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.data.Timestamp" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "SchemaBuilder"
 , "c2" : "builder()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "fromLogical(Schema;java.util.Date)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "java.util.Date"
 , "c2" : "toLogical(Schema;long)"
 , "c3" : "2"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Timestamp.java.png" 

 , "ligneplantuml" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Timestamp.java.svg" }

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
 , "c4" : "3"
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
 , "c4" : "3"
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
   "c1" : "00007"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Timestamp.java.html#7"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00007] The class Timestamp contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00014"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Timestamp.java.html#14"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00014] In method org.apache.kafka.connect.data.Timestamp.builder@POLYN165978 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00020"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Timestamp.java.html#20"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00020] For method fromLogical arguments Schema  schema|java.util.Date  value"
}} 
,
{ "ligne" : {
   "c1" : "00020"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Timestamp.java.html#20"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00020] The argument schema is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00020"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Timestamp.java.html#20"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00020] The argument value is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00022"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Timestamp.java.html#22"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00022] In method org.apache.kafka.connect.data.Timestamp.fromLogical@POLYN166390 the MagicNumber/String  'Requested conversion of Timestamp object but the schema does not match.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00026"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Timestamp.java.html#26"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00026] For method toLogical arguments Schema  schema|long  value"
}} 
,
{ "ligne" : {
   "c1" : "00026"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Timestamp.java.html#26"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00026] The argument schema is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00028"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Timestamp.java.html#28"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00028] In method org.apache.kafka.connect.data.Timestamp.toLogical@POLYN166777 the MagicNumber/String  'Requested conversion of Timestamp object but the schema does not match.' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
