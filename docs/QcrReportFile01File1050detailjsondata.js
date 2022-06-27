console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/converters/ByteArrayConverter.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/converters/ByteArrayConverter.java 22 rule violations " 
 , "fic2"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/converters/ByteArrayConverter.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "Converter"
 , "c2" : "org.apache.kafka.connect.converters.ByteArrayConverter"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.converters.ByteArrayConverter" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "ConfigDef"
 , "c2" : "config()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "configure(Map<String,?>)"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "configure(Map<String,?>;boolean)"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : {
   "c1" : "byte[]"
 , "c2" : "fromConnectData(String;Schema;Object)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "SchemaAndValue"
 , "c2" : "toConnectData(String;byte[])"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "byte[]"
 , "c2" : "fromConnectHeader(String;String;Schema;Object)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "SchemaAndValue"
 , "c2" : "toConnectHeader(String;String;byte[])"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "0"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/converters/ByteArrayConverter.java.png" 

 , "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/converters/ByteArrayConverter.java.svg" }

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
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000004"
 , "c3" : "You must segregate your interface"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000005"
 , "c3" : "Empty method"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
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
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "6"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00016"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/converters/ByteArrayConverter.java.html#16"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00016] The class ByteArrayConverter contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00026"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/converters/ByteArrayConverter.java.html#26"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00026] For method configure arguments Map&lt;String ,? &gt;  configs"
}} 
,
{ "ligne" : {
   "c1" : "00030"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/converters/ByteArrayConverter.java.html#30"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00030] For method configure arguments Map&lt;String ,? &gt;  configs|boolean  isKey"
}} 
,
{ "ligne" : {
   "c1" : "00034"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/converters/ByteArrayConverter.java.html#34"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00034] For method fromConnectData arguments String  topic|Schema  schema|Object  value"
}} 
,
{ "ligne" : {
   "c1" : "00035"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/converters/ByteArrayConverter.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00035] In method org.apache.kafka.connect.converters.ByteArrayConverter.fromConnectData@POLYN166243 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00036"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/converters/ByteArrayConverter.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00036] In method org.apache.kafka.connect.converters.ByteArrayConverter.fromConnectData@POLYN166243 the MagicNumber/String  'Invalid schema type for ByteArrayConverter: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00038"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/converters/ByteArrayConverter.java.html#38"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00038] In method org.apache.kafka.connect.converters.ByteArrayConverter.fromConnectData@POLYN166243 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/converters/ByteArrayConverter.java.html#39"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00039] In method org.apache.kafka.connect.converters.ByteArrayConverter.fromConnectData@POLYN166243 the MagicNumber/String  'ByteArrayConverter is not compatible with objects of type ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/converters/ByteArrayConverter.java.html#45"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00045] For method toConnectData arguments String  topic|byte[]  value"
}} 
,
{ "ligne" : {
   "c1" : "00050"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/converters/ByteArrayConverter.java.html#50"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00050] For method fromConnectHeader arguments String  topic|String  headerKey|Schema  schema|Object  value"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/converters/ByteArrayConverter.java.html#55"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00055] For method toConnectHeader arguments String  topic|String  headerKey|byte[]  value"
}} 
,
{ "ligne" : {
   "c1" : "00026"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/converters/ByteArrayConverter.java.html#26"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00026] Void method configure is empty or contains only a return."
}} 
,
{ "ligne" : {
   "c1" : "00026"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/converters/ByteArrayConverter.java.html#26"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00026] Void method configure is empty or contains only a return. Interface segregation"
}} 
,
{ "ligne" : {
   "c1" : "00030"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/converters/ByteArrayConverter.java.html#30"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00030] Void method configure is empty or contains only a return."
}} 
,
{ "ligne" : {
   "c1" : "00030"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/converters/ByteArrayConverter.java.html#30"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00030] Void method configure is empty or contains only a return. Interface segregation"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/converters/ByteArrayConverter.java.html#60"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00060] Void method close is empty or contains only a return."
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/converters/ByteArrayConverter.java.html#60"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00060] Void method close is empty or contains only a return. Interface segregation"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/converters/ByteArrayConverter.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.converters.ByteArrayConverter.fromConnectData@POLYN166243"
}} 
,
{ "ligne" : {
   "c1" : "00035"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/converters/ByteArrayConverter.java.html#35"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00035] In the recursive method org.apache.kafka.connect.converters.ByteArrayConverter.fromConnectData@POLYN166243 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00036"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/converters/ByteArrayConverter.java.html#36"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00036] In the recursive method org.apache.kafka.connect.converters.ByteArrayConverter.fromConnectData@POLYN166243 the MagicNumber/String 'Invalid schema type for ByteArrayConverter: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00038"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/converters/ByteArrayConverter.java.html#38"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00038] In the recursive method org.apache.kafka.connect.converters.ByteArrayConverter.fromConnectData@POLYN166243 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/converters/ByteArrayConverter.java.html#39"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00039] In the recursive method org.apache.kafka.connect.converters.ByteArrayConverter.fromConnectData@POLYN166243 the MagicNumber/String 'ByteArrayConverter is not compatible with objects of type ' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
