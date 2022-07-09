console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java 75 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.clients.producer.internals.BuiltInPartitioner"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.producer.internals.BuiltInPartitioner" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "BuiltInPartitioner"
 , "c2" : "BuiltInPartitioner(LogContext;String;int)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "nextPartition(Cluster)"
 , "c3" : "5"
 , "c4" : "16"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "loadStatsRangeEnd()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "StickyPartitionInfo"
 , "c2" : "peekCurrentPartitionInfo(Cluster)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isPartitionChanged(StickyPartitionInfo)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "updatePartitionInfo(StickyPartitionInfo;int;Cluster)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "updatePartitionLoadStats(int[];int[];int)"
 , "c3" : "8"
 , "c4" : "24"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.svg" }

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
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "26"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAVCWE493"
 , "c3" : "Critical public variable without final modifier"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "33"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAVCWE500"
 , "c3" : "Static public field not marked final"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "5"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00018"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#18"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00018] The class BuiltInPartitioner contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00027"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#27"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE493[00027] Critical public variable without final modifier (see http://cwe.mitre.org/data/definitions/493.html)"
}} 
,
{ "ligne" : {
   "c1" : "00027"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#27"
 , "c2" : "MINOR"
 , "c3" : "QC-JAVCWE500[00027] Static public field not marked final (see http://cwe.mitre.org/data/definitions/500.html)"
}} 
,
{ "ligne" : {
   "c1" : "00030"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#30"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00030] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00037"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#37"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00037] For method nextPartition arguments Cluster  cluster"
}} 
,
{ "ligne" : {
   "c1" : "00037"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#37"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00037] For method nextPartition list of called methods Object monObjet|java.util.List&lt;org.apache.kafka.common.PartitionInfo&gt; cluster_availablePartitionsForTopicN180177|java.util.List&lt;org.apache.kafka.common.PartitionInfo&gt; cluster_partitionsForTopicN180559"
}} 
,
{ "ligne" : {
   "c1" : "00037"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#37"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00037] The argument cluster is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00038"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#38"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00038] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.nextPartition@POLYN179670 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.nextPartition@POLYN179670 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.nextPartition@POLYN179670 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.nextPartition@POLYN179670 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.nextPartition@POLYN179670 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.nextPartition@POLYN179670 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.nextPartition@POLYN179670 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.nextPartition@POLYN179670 the MagicNumber/String  'Switching to partition {} in topic {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.loadStatsRangeEnd@POLYN181708 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.loadStatsRangeEnd@POLYN181708 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.loadStatsRangeEnd@POLYN181708 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#93"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00093] For method peekCurrentPartitionInfo arguments Cluster  cluster"
}} 
,
{ "ligne" : {
   "c1" : "00095"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.peekCurrentPartitionInfo@POLYN182414 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.peekCurrentPartitionInfo@POLYN182414 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00108"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#108"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00108] For method isPartitionChanged arguments StickyPartitionInfo  partitionInfo"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#110"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00110] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.isPartitionChanged@POLYN183147 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00114"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#114"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00114] For method updatePartitionInfo arguments StickyPartitionInfo  partitionInfo|int  appendedBytes|Cluster  cluster"
}} 
,
{ "ligne" : {
   "c1" : "00116"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionInfo@POLYN183551 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00129"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#129"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00129] For method updatePartitionLoadStats arguments int[]  queueSizes|int[]  partitionIds|int  length"
}} 
,
{ "ligne" : {
   "c1" : "00130"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00130] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN184514 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00131"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#131"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00131] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN184514 the MagicNumber/String  'No load stats for topic {}, not using adaptive' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN184514 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00145"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN184514 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00145"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN184514 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00146"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00146] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN184514 the MagicNumber/String  'The number of partitions is too small: available={}, all={}, not using adaptive for topic {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00148"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00148] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN184514 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00169"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#169"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00169] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN184514 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00170"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00170] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN184514 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00171"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#171"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00171] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN184514 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00173"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#173"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00173] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN184514 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00183"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#183"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00183] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN184514 the MagicNumber/String  'All queue lengths are the same, not using adaptive for topic {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00184"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#184"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00184] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN184514 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00189"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#189"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00189] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN184514 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00189"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#189"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00189] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN184514 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00190"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00190] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN184514 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00191"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#191"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00191] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN184514 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00193"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00193] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN184514 the MagicNumber/String  'Partition load stats for topic {}: CFT={}, IDs={}, length={}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00199"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#199"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00199] The class StickyPartitionInfo contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00213"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#213"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00213] The class PartitionLoadStats contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00086"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#86"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00086] Public method loadStatsRangeEnd is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.internals.BuiltInPartitioner.nextPartition@POLYN179670"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN184514"
}} 
,
{ "ligne" : {
   "c1" : "00038"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#38"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00038] In the recursive method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.nextPartition@POLYN179670 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#44"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00044] In the recursive method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.nextPartition@POLYN179670 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#48"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00048] In the recursive method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.nextPartition@POLYN179670 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#58"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00058] In the recursive method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.nextPartition@POLYN179670 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#61"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00061] In the recursive method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.nextPartition@POLYN179670 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#65"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00065] In the recursive method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.nextPartition@POLYN179670 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#76"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00076] In the recursive method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.nextPartition@POLYN179670 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#81"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00081] In the recursive method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.nextPartition@POLYN179670 the MagicNumber/String 'Switching to partition {} in topic {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00130"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#130"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00130] In the recursive method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN184514 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00131"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#131"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00131] In the recursive method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN184514 the MagicNumber/String 'No load stats for topic {}, not using adaptive' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#132"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00132] In the recursive method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN184514 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00145"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#145"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00145] In the recursive method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN184514 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00145"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#145"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00145] In the recursive method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN184514 the MagicNumber/String 2 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00146"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#146"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00146] In the recursive method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN184514 the MagicNumber/String 'The number of partitions is too small: available={}, all={}, not using adaptive for topic {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00148"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#148"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00148] In the recursive method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN184514 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00169"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#169"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00169] In the recursive method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN184514 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00170"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#170"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00170] In the recursive method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN184514 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00171"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#171"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00171] In the recursive method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN184514 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00173"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#173"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00173] In the recursive method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN184514 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00183"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#183"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00183] In the recursive method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN184514 the MagicNumber/String 'All queue lengths are the same, not using adaptive for topic {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00184"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#184"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00184] In the recursive method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN184514 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00189"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#189"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00189] In the recursive method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN184514 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00189"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#189"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00189] In the recursive method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN184514 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00190"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#190"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00190] In the recursive method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN184514 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00191"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#191"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00191] In the recursive method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN184514 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00193"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#193"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00193] In the recursive method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN184514 the MagicNumber/String 'Partition load stats for topic {}: CFT={}, IDs={}, length={}' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
