console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/api/src/main/java/org/apache/kafka/connect/storage/SimpleHeaderConverter.java.html" 
 , "texte" : "File connect/api/src/main/java/org/apache/kafka/connect/storage/SimpleHeaderConverter.java 14 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "HeaderConverter"
 , "c2" : "org.apache.kafka.connect.storage.SimpleHeaderConverter"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.storage.SimpleHeaderConverter" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00045"
 , "c5link" : "././qc/connect/api/src/main/java/org/apache/kafka/connect/storage/SimpleHeaderConverter.java.html#45"
 , "c1" : "ConfigDef"
 , "c2" : "config()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00050"
 , "c5link" : "././qc/connect/api/src/main/java/org/apache/kafka/connect/storage/SimpleHeaderConverter.java.html#50"
 , "c1" : "void"
 , "c2" : "configure(Map&lt;String,?&gt;)"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00055"
 , "c5link" : "././qc/connect/api/src/main/java/org/apache/kafka/connect/storage/SimpleHeaderConverter.java.html#55"
 , "c1" : "SchemaAndValue"
 , "c2" : "toConnectHeader(String;String;byte[])"
 , "c3" : "3"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00074"
 , "c5link" : "././qc/connect/api/src/main/java/org/apache/kafka/connect/storage/SimpleHeaderConverter.java.html#74"
 , "c1" : "byte[]"
 , "c2" : "fromConnectHeader(String;String;Schema;Object)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00082"
 , "c5link" : "././qc/connect/api/src/main/java/org/apache/kafka/connect/storage/SimpleHeaderConverter.java.html#82"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "0"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/storage/SimpleHeaderConverter.java.svg" }

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
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000004"
 , "c3" : "You must segregate your interface"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000005"
 , "c3" : "Empty method"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "7"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/storage/SimpleHeaderConverter.java.html#50"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00050] For method configure arguments Map&lt;String ,? &gt;  configs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/storage/SimpleHeaderConverter.java.html#55"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00055] For method toConnectHeader arguments String  topic|String  headerKey|byte[]  value"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/storage/SimpleHeaderConverter.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.connect.storage.SimpleHeaderConverter.toConnectHeader@POLYN162354 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/storage/SimpleHeaderConverter.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.connect.storage.SimpleHeaderConverter.toConnectHeader@POLYN162354 the MagicNumber/String  'Failed to deserialize value for header '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/storage/SimpleHeaderConverter.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.connect.storage.SimpleHeaderConverter.toConnectHeader@POLYN162354 the MagicNumber/String  '' on topic '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/storage/SimpleHeaderConverter.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.connect.storage.SimpleHeaderConverter.toConnectHeader@POLYN162354 the MagicNumber/String  ''' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/storage/SimpleHeaderConverter.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.connect.storage.SimpleHeaderConverter.toConnectHeader@POLYN162354 the MagicNumber/String  'Failed to deserialize value for header '{}' on topic '{}', so using byte array' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/storage/SimpleHeaderConverter.java.html#74"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00074] For method fromConnectHeader arguments String  topic|String  headerKey|Schema  schema|Object  value"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/storage/SimpleHeaderConverter.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method org.apache.kafka.connect.storage.SimpleHeaderConverter.fromConnectHeader@POLYN163514 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/storage/SimpleHeaderConverter.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.connect.storage.SimpleHeaderConverter.fromConnectHeader@POLYN163514 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/storage/SimpleHeaderConverter.java.html#50"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00050] Void method configure is empty or contains only a return."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/storage/SimpleHeaderConverter.java.html#50"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00050] Void method configure is empty or contains only a return. Interface segregation"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/storage/SimpleHeaderConverter.java.html#82"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00082] Void method close is empty or contains only a return."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/storage/SimpleHeaderConverter.java.html#82"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00082] Void method close is empty or contains only a return. Interface segregation"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/storage/SimpleHeaderConverter.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
