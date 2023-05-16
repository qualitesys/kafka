console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java 66 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.clients.producer.internals.BuiltInPartitioner"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.producer.internals.BuiltInPartitioner" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00056"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#56"
 , "c1" : "BuiltInPartitioner"
 , "c2" : "BuiltInPartitioner(LogContext;String;int)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00065"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#65"
 , "c1" : "int"
 , "c2" : "nextPartition(Cluster)"
 , "c3" : "5"
 , "c4" : "16"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00117"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#117"
 , "c1" : "int"
 , "c2" : "loadStatsRangeEnd()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00138"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#138"
 , "c1" : "StickyPartitionInfo"
 , "c2" : "peekCurrentPartitionInfo(Cluster)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00159"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#159"
 , "c1" : "boolean"
 , "c2" : "isPartitionChanged(StickyPartitionInfo)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00172"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#172"
 , "c1" : "void"
 , "c2" : "updatePartitionInfo(StickyPartitionInfo;int;Cluster)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00197"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#197"
 , "c1" : "void"
 , "c2" : "updatePartitionLoadStats(int[];int[];int)"
 , "c3" : "8"
 , "c4" : "24"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00285"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#285"
 , "c1" : "int"
 , "c2" : "partitionForKey(byte[];int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.svg" }

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
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "18"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "2"
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
 , "c2" : "QC-JAVCWE493"
 , "c3" : "Critical public variable without final modifier"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "33"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAVCWE500"
 , "c3" : "Static public field not marked final"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE493[00048] Critical public variable without final modifier (see http://cwe.mitre.org/data/definitions/493.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#48"
 , "c2" : "MINOR"
 , "c3" : "QC-JAVCWE500[00048] Static public field not marked final (see http://cwe.mitre.org/data/definitions/500.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#56"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00056] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#65"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00065] For method nextPartition arguments Cluster  cluster"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#65"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00065] For method nextPartition list of called methods Object monObjet|java.util.List cluster_availablePartitionsForTopicN186269"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#65"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00065] The argument cluster is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.nextPartition@POLYN185762 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.nextPartition@POLYN185762 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.nextPartition@POLYN185762 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.nextPartition@POLYN185762 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.nextPartition@POLYN185762 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.nextPartition@POLYN185762 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.nextPartition@POLYN185762 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.nextPartition@POLYN185762 the MagicNumber/String  'Switching to partition {} in topic {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.loadStatsRangeEnd@POLYN187800 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.loadStatsRangeEnd@POLYN187800 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.loadStatsRangeEnd@POLYN187800 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00138"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#138"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00138] For method peekCurrentPartitionInfo arguments Cluster  cluster"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00138"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#138"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00138] For method peekCurrentPartitionInfo list of called methods Object monObjet|V stickyPartitionInfo_getN188603"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00140"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00140] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.peekCurrentPartitionInfo@POLYN188506 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00145"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.peekCurrentPartitionInfo@POLYN188506 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00159"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#159"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00159] For method isPartitionChanged arguments StickyPartitionInfo  partitionInfo"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00161"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00161] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.isPartitionChanged@POLYN189239 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00172"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#172"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00172] For method updatePartitionInfo arguments StickyPartitionInfo  partitionInfo|int  appendedBytes|Cluster  cluster"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00174"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#174"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00174] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionInfo@POLYN189643 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00197"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#197"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00197] For method updatePartitionLoadStats arguments int[]  queueSizes|int[]  partitionIds|int  length"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00198"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00198] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN190606 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00199"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#199"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00199] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN190606 the MagicNumber/String  'No load stats for topic {}, not using adaptive' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00200"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#200"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00200] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN190606 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00213"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#213"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00213] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN190606 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00213"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#213"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00213] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN190606 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00214"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#214"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00214] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN190606 the MagicNumber/String  'The number of partitions is too small: available={}, all={}, not using adaptive for topic {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00216"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#216"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00216] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN190606 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00237"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#237"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00237] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN190606 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00238"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#238"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00238] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN190606 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00239"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#239"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00239] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN190606 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00241"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#241"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00241] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN190606 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00251"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#251"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00251] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN190606 the MagicNumber/String  'All queue lengths are the same, not using adaptive for topic {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00252"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#252"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00252] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN190606 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00257"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#257"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00257] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN190606 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00257"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#257"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00257] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN190606 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00258"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#258"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00258] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN190606 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00259"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#259"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00259] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN190606 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00261"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#261"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00261] In method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN190606 the MagicNumber/String  'Partition load stats for topic {}: CFT={}, IDs={}, length={}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00285"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#285"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00285] For method partitionForKey arguments byte[]  serializedKey|int  numPartitions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#117"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00117] Public method loadStatsRangeEnd is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00285"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#285"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00285] Public method partitionForKey is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN190606"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00198"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#198"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00198] In the recursive method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN190606 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00199"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#199"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00199] In the recursive method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN190606 the MagicNumber/String 'No load stats for topic {}, not using adaptive' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00200"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#200"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00200] In the recursive method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN190606 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00213"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#213"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00213] In the recursive method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN190606 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00213"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#213"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00213] In the recursive method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN190606 the MagicNumber/String 2 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00214"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#214"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00214] In the recursive method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN190606 the MagicNumber/String 'The number of partitions is too small: available={}, all={}, not using adaptive for topic {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00216"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#216"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00216] In the recursive method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN190606 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00237"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#237"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00237] In the recursive method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN190606 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00238"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#238"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00238] In the recursive method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN190606 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00239"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#239"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00239] In the recursive method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN190606 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00241"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#241"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00241] In the recursive method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN190606 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00251"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#251"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00251] In the recursive method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN190606 the MagicNumber/String 'All queue lengths are the same, not using adaptive for topic {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00252"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#252"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00252] In the recursive method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN190606 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00257"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#257"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00257] In the recursive method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN190606 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00257"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#257"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00257] In the recursive method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN190606 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00258"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#258"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00258] In the recursive method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN190606 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00259"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#259"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00259] In the recursive method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN190606 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00261"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.html#261"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00261] In the recursive method org.apache.kafka.clients.producer.internals.BuiltInPartitioner.updatePartitionLoadStats@POLYN190606 the MagicNumber/String 'Partition load stats for topic {}: CFT={}, IDs={}, length={}' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/clients/producer/internals/BuiltInPartitioner.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
