console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/UUIDDeserializer.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/serialization/UUIDDeserializer.java 12 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "Deserializer<UUID>"
 , "c2" : "org.apache.kafka.common.serialization.UUIDDeserializer"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.serialization.UUIDDeserializer" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00034"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/serialization/UUIDDeserializer.java.html#34"
 , "c1" : "void"
 , "c2" : "configure(Map&lt;String,?&gt;;boolean)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00044"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/serialization/UUIDDeserializer.java.html#44"
 , "c1" : "UUID"
 , "c2" : "deserialize(String;byte[])"
 , "c3" : "3"
 , "c4" : "4"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/UUIDDeserializer.java.svg" }

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
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "8"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/UUIDDeserializer.java.html#34"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00034] For method configure arguments Map&lt;String ,? &gt;  configs|boolean  isKey"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/UUIDDeserializer.java.html#34"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00034] For method configure list of called methods Object monObjet|V configs_getN157215|V configs_getN157366"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/UUIDDeserializer.java.html#34"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00034] The argument configs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/UUIDDeserializer.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00035] In method org.apache.kafka.common.serialization.UUIDDeserializer.configure@POLYN156881 the MagicNumber/String  'key.deserializer.encoding' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/UUIDDeserializer.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00035] In method org.apache.kafka.common.serialization.UUIDDeserializer.configure@POLYN156881 the MagicNumber/String  'value.deserializer.encoding' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/UUIDDeserializer.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method org.apache.kafka.common.serialization.UUIDDeserializer.configure@POLYN156881 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/UUIDDeserializer.java.html#38"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00038] In method org.apache.kafka.common.serialization.UUIDDeserializer.configure@POLYN156881 the MagicNumber/String  'deserializer.encoding' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/UUIDDeserializer.java.html#44"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00044] For method deserialize arguments String  topic|byte[]  data"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/UUIDDeserializer.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.common.serialization.UUIDDeserializer.deserialize@POLYN157577 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/UUIDDeserializer.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method org.apache.kafka.common.serialization.UUIDDeserializer.deserialize@POLYN157577 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/UUIDDeserializer.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.common.serialization.UUIDDeserializer.deserialize@POLYN157577 the MagicNumber/String  'Error when deserializing byte[] to UUID due to unsupported encoding ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/UUIDDeserializer.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method org.apache.kafka.common.serialization.UUIDDeserializer.deserialize@POLYN157577 the MagicNumber/String  'Error parsing data into UUID' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/UUIDDeserializer.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
