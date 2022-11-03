console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/api/src/main/java/org/apache/kafka/connect/storage/SimpleHeaderConverter.java.html" 
 , "texte" : "File connect/api/src/main/java/org/apache/kafka/connect/storage/SimpleHeaderConverter.java 15 rule violations " 
 , "fic2"  : "./qc/connect/api/src/main/java/org/apache/kafka/connect/storage/SimpleHeaderConverter.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "HeaderConverter"
 , "c2" : "org.apache.kafka.connect.storage.SimpleHeaderConverter"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.storage.SimpleHeaderConverter" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00027"
 , "c5link" : "././qc/connect/api/src/main/java/org/apache/kafka/connect/storage/SimpleHeaderConverter.java.html#27"
 , "c1" : "ConfigDef"
 , "c2" : "config()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00032"
 , "c5link" : "././qc/connect/api/src/main/java/org/apache/kafka/connect/storage/SimpleHeaderConverter.java.html#32"
 , "c1" : "void"
 , "c2" : "configure(Map<String,?>)"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00037"
 , "c5link" : "././qc/connect/api/src/main/java/org/apache/kafka/connect/storage/SimpleHeaderConverter.java.html#37"
 , "c1" : "SchemaAndValue"
 , "c2" : "toConnectHeader(String;String;byte[])"
 , "c3" : "3"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00056"
 , "c5link" : "././qc/connect/api/src/main/java/org/apache/kafka/connect/storage/SimpleHeaderConverter.java.html#56"
 , "c1" : "byte[]"
 , "c2" : "fromConnectHeader(String;String;Schema;Object)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00064"
 , "c5link" : "././qc/connect/api/src/main/java/org/apache/kafka/connect/storage/SimpleHeaderConverter.java.html#64"
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
   {"ligne" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/storage/SimpleHeaderConverter.java.png" 

 , "ligneplantuml" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/storage/SimpleHeaderConverter.java.svg" }

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
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
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
 , "c1" : "00019"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/storage/SimpleHeaderConverter.java.html#19"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00019] The class SimpleHeaderConverter contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/storage/SimpleHeaderConverter.java.html#32"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00032] For method configure arguments Map&lt;String ,? &gt;  configs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/storage/SimpleHeaderConverter.java.html#37"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00037] For method toConnectHeader arguments String  topic|String  headerKey|byte[]  value"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/storage/SimpleHeaderConverter.java.html#38"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00038] In method org.apache.kafka.connect.storage.SimpleHeaderConverter.toConnectHeader@POLYN151990 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/storage/SimpleHeaderConverter.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method org.apache.kafka.connect.storage.SimpleHeaderConverter.toConnectHeader@POLYN151990 the MagicNumber/String  'Failed to deserialize value for header '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/storage/SimpleHeaderConverter.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method org.apache.kafka.connect.storage.SimpleHeaderConverter.toConnectHeader@POLYN151990 the MagicNumber/String  '' on topic '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/storage/SimpleHeaderConverter.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method org.apache.kafka.connect.storage.SimpleHeaderConverter.toConnectHeader@POLYN151990 the MagicNumber/String  ''' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/storage/SimpleHeaderConverter.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method org.apache.kafka.connect.storage.SimpleHeaderConverter.toConnectHeader@POLYN151990 the MagicNumber/String  'Failed to deserialize value for header '{}' on topic '{}', so using byte array' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/storage/SimpleHeaderConverter.java.html#56"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00056] For method fromConnectHeader arguments String  topic|String  headerKey|Schema  schema|Object  value"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/storage/SimpleHeaderConverter.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method org.apache.kafka.connect.storage.SimpleHeaderConverter.fromConnectHeader@POLYN153148 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/storage/SimpleHeaderConverter.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method org.apache.kafka.connect.storage.SimpleHeaderConverter.fromConnectHeader@POLYN153148 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/storage/SimpleHeaderConverter.java.html#32"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00032] Void method configure is empty or contains only a return."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/storage/SimpleHeaderConverter.java.html#32"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00032] Void method configure is empty or contains only a return. Interface segregation"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/storage/SimpleHeaderConverter.java.html#64"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00064] Void method close is empty or contains only a return."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/storage/SimpleHeaderConverter.java.html#64"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00064] Void method close is empty or contains only a return. Interface segregation"
}} 
]
"data15" : [
   "fichierplantumlsvg" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/storage/SimpleHeaderConverter.java.svg" }

};
console.log('leListeStr 99 main end');
