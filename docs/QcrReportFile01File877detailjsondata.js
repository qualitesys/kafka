console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/StringSerializer.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/serialization/StringSerializer.java 14 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "Serializer<String>"
 , "c2" : "org.apache.kafka.common.serialization.StringSerializer"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.serialization.StringSerializer" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00033"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/serialization/StringSerializer.java.html#33"
 , "c1" : "void"
 , "c2" : "configure(Map&lt;String,?&gt;;boolean)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00043"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/serialization/StringSerializer.java.html#43"
 , "c1" : "byte[]"
 , "c2" : "serialize(String;String)"
 , "c3" : "3"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/StringSerializer.java.svg" }

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
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00033"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/StringSerializer.java.html#33"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00033] For method configure arguments Map&lt;String ,? &gt;  configs|boolean  isKey"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00033"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/StringSerializer.java.html#33"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00033] The argument configs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/StringSerializer.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method org.apache.kafka.common.serialization.StringSerializer.configure@POLYN155739 the MagicNumber/String  'key.serializer.encoding' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/StringSerializer.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method org.apache.kafka.common.serialization.StringSerializer.configure@POLYN155739 the MagicNumber/String  'value.serializer.encoding' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00036"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/StringSerializer.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00036] In method org.apache.kafka.common.serialization.StringSerializer.configure@POLYN155739 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/StringSerializer.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method org.apache.kafka.common.serialization.StringSerializer.configure@POLYN155739 the MagicNumber/String  'serializer.encoding' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/StringSerializer.java.html#43"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00043] For method serialize arguments String  topic|String  data"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/StringSerializer.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method org.apache.kafka.common.serialization.StringSerializer.serialize@POLYN156441 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/StringSerializer.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.common.serialization.StringSerializer.serialize@POLYN156441 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/StringSerializer.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method org.apache.kafka.common.serialization.StringSerializer.serialize@POLYN156441 the MagicNumber/String  'Error when serializing string to byte[] due to unsupported encoding ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/StringSerializer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.serialization.StringSerializer.serialize@POLYN156441"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/StringSerializer.java.html#45"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00045] In the recursive method org.apache.kafka.common.serialization.StringSerializer.serialize@POLYN156441 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00046"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/StringSerializer.java.html#46"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00046] In the recursive method org.apache.kafka.common.serialization.StringSerializer.serialize@POLYN156441 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/StringSerializer.java.html#50"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00050] In the recursive method org.apache.kafka.common.serialization.StringSerializer.serialize@POLYN156441 the MagicNumber/String 'Error when serializing string to byte[] due to unsupported encoding ' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/StringSerializer.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
