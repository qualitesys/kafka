console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Timestamp.java.html" 
 , "texte" : "File connect/api/src/main/java/org/apache/kafka/connect/data/Timestamp.java 8 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.connect.data.Timestamp"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.data.Timestamp" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00035"
 , "c5link" : "././qc/connect/api/src/main/java/org/apache/kafka/connect/data/Timestamp.java.html#35"
 , "c1" : "SchemaBuilder"
 , "c2" : "builder()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00048"
 , "c5link" : "././qc/connect/api/src/main/java/org/apache/kafka/connect/data/Timestamp.java.html#48"
 , "c1" : "long"
 , "c2" : "fromLogical(Schema;java.util.Date)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00054"
 , "c5link" : "././qc/connect/api/src/main/java/org/apache/kafka/connect/data/Timestamp.java.html#54"
 , "c1" : "java.util.Date"
 , "c2" : "toLogical(Schema;long)"
 , "c3" : "2"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Timestamp.java.svg" }

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
"data09a" : [
]
,
"data09b" : [
]
, 
"data10" : [
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
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Timestamp.java.html#38"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00038] In method org.apache.kafka.connect.data.Timestamp.builder@POLYN149954 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Timestamp.java.html#48"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00048] For method fromLogical arguments Schema  schema|java.util.Date  value"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Timestamp.java.html#48"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00048] The argument schema is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Timestamp.java.html#48"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00048] The argument value is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Timestamp.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method org.apache.kafka.connect.data.Timestamp.fromLogical@POLYN150366 the MagicNumber/String  'Requested conversion of Timestamp object but the schema does not match.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Timestamp.java.html#54"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00054] For method toLogical arguments Schema  schema|long  value"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Timestamp.java.html#54"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00054] The argument schema is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Timestamp.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.connect.data.Timestamp.toLogical@POLYN150753 the MagicNumber/String  'Requested conversion of Timestamp object but the schema does not match.' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Timestamp.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
