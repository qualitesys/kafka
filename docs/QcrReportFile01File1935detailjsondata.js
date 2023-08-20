console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java 30 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "ConsumerRebalanceListener"
 , "c2" : "org.apache.kafka.streams.processor.internals.StreamsRebalanceListener"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.processor.internals.StreamsRebalanceListener" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00039"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#39"
 , "c1" : "StreamsRebalanceListener"
 , "c2" : "StreamsRebalanceListener(Time;TaskManager;StreamThread;Logger;AtomicInteger)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00052"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#52"
 , "c1" : "void"
 , "c2" : "onPartitionsAssigned(Collection&lt;TopicPartition&gt;)"
 , "c3" : "10"
 , "c4" : "16"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00081"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#81"
 , "c1" : "void"
 , "c2" : "onPartitionsRevoked(Collection&lt;TopicPartition&gt;)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00103"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#103"
 , "c1" : "void"
 , "c2" : "onPartitionsLost(Collection&lt;TopicPartition&gt;)"
 , "c3" : "1"
 , "c4" : "4"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.svg" }

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
 , "c4" : "8"
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
 , "c4" : "17"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#52"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00052] For method onPartitionsAssigned arguments Collection&lt;TopicPartition&gt;  partitions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsAssigned@POLYN166775 the MagicNumber/String  'Received error code {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsAssigned@POLYN166775 the MagicNumber/String  'One or more source topics were missing during rebalance' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsAssigned@POLYN166775 the MagicNumber/String  'Received version probing code {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsAssigned@POLYN166775 the MagicNumber/String  'Received error code {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsAssigned@POLYN166775 the MagicNumber/String  'Hit an unexpected exception during task assignment phase of rebalance' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsAssigned@POLYN166775 the MagicNumber/String  'A Kafka Streams client in this Kafka Streams application is requesting to shutdown the application' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsAssigned@POLYN166775 the MagicNumber/String  'Received unknown error code {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsAssigned@POLYN166775 the MagicNumber/String  'Hit an unrecognized exception during rebalance' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#81"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00081] For method onPartitionsRevoked arguments Collection&lt;TopicPartition&gt;  partitions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#81"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00081] The argument partitions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsRevoked@POLYN168634 the MagicNumber/String  'Current state {}: revoked partitions {} because of consumer rebalance.\n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsRevoked@POLYN168634 the MagicNumber/String  '\tcurrently assigned active tasks: {}\n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsRevoked@POLYN168634 the MagicNumber/String  '\tcurrently assigned standby tasks: {}\n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsRevoked@POLYN168634 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00097] In method org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsRevoked@POLYN168634 the MagicNumber/String  'partition revocation took {} ms.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#103"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00103] For method onPartitionsLost arguments Collection&lt;TopicPartition&gt;  partitions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#104"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00104] In method org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsLost@POLYN169598 the MagicNumber/String  'at state {}: partitions {} lost due to missed rebalance.\n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsLost@POLYN169598 the MagicNumber/String  '\tlost active tasks: {}\n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00106"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00106] In method org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsLost@POLYN169598 the MagicNumber/String  '\tlost assigned standby tasks: {}\n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsLost@POLYN169598 the MagicNumber/String  'partitions lost took {} ms.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsAssigned@POLYN166775"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#56"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00056] In the recursive method org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsAssigned@POLYN166775 the MagicNumber/String 'Received error code {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#58"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00058] In the recursive method org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsAssigned@POLYN166775 the MagicNumber/String 'One or more source topics were missing during rebalance' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#60"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00060] In the recursive method org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsAssigned@POLYN166775 the MagicNumber/String 'Received version probing code {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#62"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00062] In the recursive method org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsAssigned@POLYN166775 the MagicNumber/String 'Received error code {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#64"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00064] In the recursive method org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsAssigned@POLYN166775 the MagicNumber/String 'Hit an unexpected exception during task assignment phase of rebalance' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#66"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00066] In the recursive method org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsAssigned@POLYN166775 the MagicNumber/String 'A Kafka Streams client in this Kafka Streams application is requesting to shutdown the application' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#71"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00071] In the recursive method org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsAssigned@POLYN166775 the MagicNumber/String 'Received unknown error code {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#72"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00072] In the recursive method org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsAssigned@POLYN166775 the MagicNumber/String 'Hit an unrecognized exception during rebalance' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
