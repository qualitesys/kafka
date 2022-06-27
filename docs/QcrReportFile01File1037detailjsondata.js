console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/OffsetSync.java.html" 
 , "texte" : "File connect/mirror/src/main/java/org/apache/kafka/connect/mirror/OffsetSync.java 7 rule violations " 
 , "fic2"  : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/OffsetSync.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.connect.mirror.OffsetSync"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.mirror.OffsetSync" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "OffsetSync"
 , "c2" : "OffsetSync(TopicPartition;long;long)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "TopicPartition"
 , "c2" : "topicPartition()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "upstreamOffset()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "downstreamOffset()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ByteBuffer"
 , "c2" : "serializeValue()"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "ByteBuffer"
 , "c2" : "serializeKey()"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "OffsetSync"
 , "c2" : "deserializeRecord(ConsumerRecord<byte[],byte[]>)"
 , "c3" : "1"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "Struct"
 , "c2" : "valueStruct()"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "Struct"
 , "c2" : "keyStruct()"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "byte[]"
 , "c2" : "recordKey()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "byte[]"
 , "c2" : "recordValue()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/OffsetSync.java.png" 

 , "ligneplantuml" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/OffsetSync.java.svg" }

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
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00013"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/OffsetSync.java.html#13"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00013] The class OffsetSync contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/OffsetSync.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.connect.mirror.OffsetSync.toString@POLYN174788 the MagicNumber/String  'OffsetSync{topicPartition=%s, upstreamOffset=%d, downstreamOffset=%d}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/OffsetSync.java.html#55"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00055] For method serializeValue list of called methods Object monObjet|org.apache.kafka.common.protocol.types.Struct valueStructN175051"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/OffsetSync.java.html#63"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00063] For method serializeKey list of called methods Object monObjet|org.apache.kafka.common.protocol.types.Struct keyStructN175477"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/OffsetSync.java.html#71"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00071] For method deserializeRecord arguments ConsumerRecord&lt;byte[] ,byte[] &gt;  record"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/OffsetSync.java.html#71"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00071] For method deserializeRecord list of called methods Object monObjet|org.apache.kafka.common.protocol.types.Struct KEY_SCHEMA_readN175984|String keyStruct_getStringN176137|Integer keyStruct_getIntN176231|org.apache.kafka.common.protocol.types.Struct VALUE_SCHEMA_readN176325|Long valueStruct_getLongN176478|Long valueStruct_getLongN176572"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/OffsetSync.java.html#71"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00071] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
]
};
console.log('leListeStr 99 main end');
