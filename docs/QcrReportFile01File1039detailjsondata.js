console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/OffsetSyncStore.java.html" 
 , "texte" : "File connect/mirror/src/main/java/org/apache/kafka/connect/mirror/OffsetSyncStore.java 14 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "AutoCloseable"
 , "c2" : "org.apache.kafka.connect.mirror.OffsetSyncStore"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.mirror.OffsetSyncStore" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00039"
 , "c5link" : "././qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/OffsetSyncStore.java.html#39"
 , "c1" : "OffsetSyncStore"
 , "c2" : "OffsetSyncStore(MirrorConnectorConfig)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00047"
 , "c5link" : "././qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/OffsetSyncStore.java.html#47"
 , "c1" : "OffsetSyncStore"
 , "c2" : "OffsetSyncStore(KafkaConsumer&lt;byte[],byte[]&gt;;TopicPartition)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00052"
 , "c5link" : "././qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/OffsetSyncStore.java.html#52"
 , "c1" : "OptionalLong"
 , "c2" : "translateDownstream(TopicPartition;long)"
 , "c3" : "4"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00067"
 , "c5link" : "././qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/OffsetSyncStore.java.html#67"
 , "c1" : "void"
 , "c2" : "update(Duration)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00075"
 , "c5link" : "././qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/OffsetSyncStore.java.html#75"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00080"
 , "c5link" : "././qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/OffsetSyncStore.java.html#80"
 , "c1" : "void"
 , "c2" : "handleRecord(ConsumerRecord&lt;byte[],byte[]&gt;)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00086"
 , "c5link" : "././qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/OffsetSyncStore.java.html#86"
 , "c1" : "Optional&lt;OffsetSync&gt;"
 , "c2" : "latestOffsetSync(TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/OffsetSyncStore.java.svg" }

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
 , "c2" : "QC-JAVCWE390"
 , "c3" : "Detection of error condition without action"
 , "c4" : "1"
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
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00039"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/OffsetSyncStore.java.html#39"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00039] The argument config is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/OffsetSyncStore.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method org.apache.kafka.connect.mirror.OffsetSyncStore.OffsetSyncStore@POLYN164033 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/OffsetSyncStore.java.html#52"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00052] For method translateDownstream arguments TopicPartition  sourceTopicPartition|long  upstreamOffset"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/OffsetSyncStore.java.html#52"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00052] For method translateDownstream list of called methods Object monObjet|java.util.Optional&lt;org.apache.kafka.connect.mirror.OffsetSync&gt; latestOffsetSyncN164951"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/OffsetSyncStore.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method org.apache.kafka.connect.mirror.OffsetSyncStore.translateDownstream@POLYN164806 the MagicNumber/String  1L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/OffsetSyncStore.java.html#67"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00067] Lock statement on synchronized method update"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/OffsetSyncStore.java.html#67"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00067] For method update arguments Duration  pollTimeout"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/OffsetSyncStore.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE390[00070] Detection of error condition without action (see http://cwe.mitre.org/data/definitions/390.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/OffsetSyncStore.java.html#75"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00075] Lock statement on synchronized method close"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/OffsetSyncStore.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.connect.mirror.OffsetSyncStore.close@POLYN165855 the MagicNumber/String  'offset sync store consumer' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/OffsetSyncStore.java.html#80"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00080] For method handleRecord arguments ConsumerRecord&lt;byte[] ,byte[] &gt;  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/OffsetSyncStore.java.html#80"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00080] For method handleRecord list of called methods Object monObjet|org.apache.kafka.connect.mirror.OffsetSync OffsetSync_deserializeRecordN166187|org.apache.kafka.common.TopicPartition offsetSync_topicPartitionN166283"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/OffsetSyncStore.java.html#86"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00086] For method latestOffsetSync arguments TopicPartition  topicPartition"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/OffsetSyncStore.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN165601"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/OffsetSyncStore.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
