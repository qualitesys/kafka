console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/UUIDSerializer.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/serialization/UUIDSerializer.java 15 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "Serializer<UUID>"
 , "c2" : "org.apache.kafka.common.serialization.UUIDSerializer"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.serialization.UUIDSerializer" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00034"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/serialization/UUIDSerializer.java.html#34"
 , "c1" : "void"
 , "c2" : "configure(Map&lt;String,?&gt;;boolean)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00044"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/serialization/UUIDSerializer.java.html#44"
 , "c1" : "byte[]"
 , "c2" : "serialize(String;UUID)"
 , "c3" : "3"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/UUIDSerializer.java.svg" }

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
"data12a" : [
]
,
"data12b" : [
]
,
"data12c" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
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
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/UUIDSerializer.java.html#34"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00034] For method configure arguments Map&lt;String ,? &gt;  configs|boolean  isKey"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/UUIDSerializer.java.html#34"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00034] For method configure list of called methods Object monObjet|V configs_getN156487|V configs_getN156638"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/UUIDSerializer.java.html#34"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00034] The argument configs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/UUIDSerializer.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00035] In method org.apache.kafka.common.serialization.UUIDSerializer.configure@POLYN156153 the MagicNumber/String  'key.serializer.encoding' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/UUIDSerializer.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00035] In method org.apache.kafka.common.serialization.UUIDSerializer.configure@POLYN156153 the MagicNumber/String  'value.serializer.encoding' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/UUIDSerializer.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method org.apache.kafka.common.serialization.UUIDSerializer.configure@POLYN156153 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/UUIDSerializer.java.html#38"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00038] In method org.apache.kafka.common.serialization.UUIDSerializer.configure@POLYN156153 the MagicNumber/String  'serializer.encoding' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/UUIDSerializer.java.html#44"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00044] For method serialize arguments String  topic|UUID  data"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/UUIDSerializer.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.common.serialization.UUIDSerializer.serialize@POLYN156855 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/UUIDSerializer.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method org.apache.kafka.common.serialization.UUIDSerializer.serialize@POLYN156855 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/UUIDSerializer.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.common.serialization.UUIDSerializer.serialize@POLYN156855 the MagicNumber/String  'Error when serializing UUID to byte[] due to unsupported encoding ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/UUIDSerializer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.serialization.UUIDSerializer.serialize@POLYN156855"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/UUIDSerializer.java.html#46"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00046] In the recursive method org.apache.kafka.common.serialization.UUIDSerializer.serialize@POLYN156855 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/UUIDSerializer.java.html#47"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00047] In the recursive method org.apache.kafka.common.serialization.UUIDSerializer.serialize@POLYN156855 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/UUIDSerializer.java.html#51"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00051] In the recursive method org.apache.kafka.common.serialization.UUIDSerializer.serialize@POLYN156855 the MagicNumber/String 'Error when serializing UUID to byte[] due to unsupported encoding ' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/UUIDSerializer.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
