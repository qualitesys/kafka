console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGrouper.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGrouper.java 27 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.processor.internals.PartitionGrouper"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.processor.internals.PartitionGrouper" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00053"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGrouper.java.html#53"
 , "c1" : "Map&lt;TaskId,Set&lt;TopicPartition&gt;&gt;"
 , "c2" : "partitionGroups(Map&lt;Subtopology,Set&lt;String&gt;&gt;;Cluster)"
 , "c3" : "5"
 , "c4" : "11"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00081"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGrouper.java.html#81"
 , "c1" : "int"
 , "c2" : "maxNumPartitions(Cluster;Set&lt;String&gt;)"
 , "c3" : "4"
 , "c4" : "7"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGrouper.java.svg" }

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
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "10"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "4"
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
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGrouper.java.html#53"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00053] For method partitionGroups arguments Map&lt;Subtopology ,Set&lt;String &gt; &gt;  topicGroups|Cluster  metadata"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGrouper.java.html#53"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00053] For method partitionGroups list of called methods Object monObjet|java.util.Map metadata_partitionsForTopicN162063"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGrouper.java.html#53"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00053] The argument topicGroups is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGrouper.java.html#53"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00053] The argument metadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGrouper.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00057] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGrouper.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00058] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGrouper.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00063] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGrouper.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00065] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGrouper.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00066] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGrouper.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00063] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGrouper.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00065] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGrouper.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00066] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGrouper.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00066] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGrouper.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.streams.processor.internals.PartitionGrouper.partitionGroups@POLYN160860 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGrouper.java.html#81"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00081] For method maxNumPartitions arguments Cluster  metadata|Set&lt;String &gt;  topics"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGrouper.java.html#81"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00081] For method maxNumPartitions list of called methods Object monObjet|int metadata_partitionsForTopicN163036|int partitions_sizeN163397"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGrouper.java.html#81"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00081] The argument metadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGrouper.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00084] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGrouper.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.streams.processor.internals.PartitionGrouper.maxNumPartitions@POLYN162727 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGrouper.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.streams.processor.internals.PartitionGrouper.maxNumPartitions@POLYN162727 the MagicNumber/String  'Empty partitions for topic {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGrouper.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.streams.processor.internals.PartitionGrouper.maxNumPartitions@POLYN162727 the MagicNumber/String  'Empty partitions for topic ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGrouper.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.PartitionGrouper.maxNumPartitions@POLYN162727"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGrouper.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.PartitionGrouper.partitionGroups@POLYN160860"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGrouper.java.html#82"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00082] In the recursive method org.apache.kafka.streams.processor.internals.PartitionGrouper.maxNumPartitions@POLYN162727 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGrouper.java.html#86"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00086] In the recursive method org.apache.kafka.streams.processor.internals.PartitionGrouper.maxNumPartitions@POLYN162727 the MagicNumber/String 'Empty partitions for topic {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGrouper.java.html#87"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00087] In the recursive method org.apache.kafka.streams.processor.internals.PartitionGrouper.maxNumPartitions@POLYN162727 the MagicNumber/String 'Empty partitions for topic ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGrouper.java.html#62"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00062] In the recursive method org.apache.kafka.streams.processor.internals.PartitionGrouper.partitionGroups@POLYN160860 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGrouper.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
