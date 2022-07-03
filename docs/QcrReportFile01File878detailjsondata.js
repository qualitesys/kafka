console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/UUIDSerializer.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/serialization/UUIDSerializer.java 15 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/UUIDSerializer.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "Serializer<UUID>"
 , "c2" : "org.apache.kafka.common.serialization.UUIDSerializer"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.serialization.UUIDSerializer" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "void"
 , "c2" : "configure(Map<String,?>;boolean)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "byte[]"
 , "c2" : "serialize(String;UUID)"
 , "c3" : "3"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/UUIDSerializer.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/UUIDSerializer.java.svg" }

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
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
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
 , "c4" : "7"
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
   "c1" : "00012"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/UUIDSerializer.java.html#12"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00012] The class UUIDSerializer contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00016"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/UUIDSerializer.java.html#16"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00016] For method configure arguments Map&lt;String ,? &gt;  configs|boolean  isKey"
}} 
,
{ "ligne" : {
   "c1" : "00016"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/UUIDSerializer.java.html#16"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00016] The argument configs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00017"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/UUIDSerializer.java.html#17"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00017] In method org.apache.kafka.common.serialization.UUIDSerializer.configure@POLYN167597 the MagicNumber/String  'key.serializer.encoding' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00017"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/UUIDSerializer.java.html#17"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00017] In method org.apache.kafka.common.serialization.UUIDSerializer.configure@POLYN167597 the MagicNumber/String  'value.serializer.encoding' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00019"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/UUIDSerializer.java.html#19"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00019] In method org.apache.kafka.common.serialization.UUIDSerializer.configure@POLYN167597 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00020"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/UUIDSerializer.java.html#20"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00020] In method org.apache.kafka.common.serialization.UUIDSerializer.configure@POLYN167597 the MagicNumber/String  'serializer.encoding' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00026"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/UUIDSerializer.java.html#26"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00026] For method serialize arguments String  topic|UUID  data"
}} 
,
{ "ligne" : {
   "c1" : "00028"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/UUIDSerializer.java.html#28"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00028] In method org.apache.kafka.common.serialization.UUIDSerializer.serialize@POLYN168295 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00029"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/UUIDSerializer.java.html#29"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00029] In method org.apache.kafka.common.serialization.UUIDSerializer.serialize@POLYN168295 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00033"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/UUIDSerializer.java.html#33"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00033] In method org.apache.kafka.common.serialization.UUIDSerializer.serialize@POLYN168295 the MagicNumber/String  'Error when serializing UUID to byte[] due to unsupported encoding ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/UUIDSerializer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.common.serialization.UUIDSerializer.serialize@POLYN168295"
}} 
,
{ "ligne" : {
   "c1" : "00028"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/UUIDSerializer.java.html#28"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00028] In the recursive method org.apache.kafka.common.serialization.UUIDSerializer.serialize@POLYN168295 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00029"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/UUIDSerializer.java.html#29"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00029] In the recursive method org.apache.kafka.common.serialization.UUIDSerializer.serialize@POLYN168295 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00033"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/serialization/UUIDSerializer.java.html#33"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00033] In the recursive method org.apache.kafka.common.serialization.UUIDSerializer.serialize@POLYN168295 the MagicNumber/String 'Error when serializing UUID to byte[] due to unsupported encoding ' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
