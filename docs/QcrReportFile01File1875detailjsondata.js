console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java 31 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "ConsumerRebalanceListener"
 , "c2" : "org.apache.kafka.streams.processor.internals.StreamsRebalanceListener"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.processor.internals.StreamsRebalanceListener" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "StreamsRebalanceListener"
 , "c2" : "StreamsRebalanceListener(Time;TaskManager;StreamThread;Logger;AtomicInteger)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "onPartitionsAssigned(Collection<TopicPartition>)"
 , "c3" : "10"
 , "c4" : "16"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "onPartitionsRevoked(Collection<TopicPartition>)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "onPartitionsLost(Collection<TopicPartition>)"
 , "c3" : "1"
 , "c4" : "4"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.svg" }

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
 , "c4" : "8"
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
 , "c4" : "17"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00016"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#16"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00016] The class StreamsRebalanceListener contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00037"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#37"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00037] For method onPartitionsAssigned arguments Collection&lt;TopicPartition &gt;  partitions"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsAssigned@POLYN175005 the MagicNumber/String  'Received error code {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00043] In method org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsAssigned@POLYN175005 the MagicNumber/String  'One or more source topics were missing during rebalance' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsAssigned@POLYN175005 the MagicNumber/String  'Received version probing code {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsAssigned@POLYN175005 the MagicNumber/String  'Received error code {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsAssigned@POLYN175005 the MagicNumber/String  'Hit an unexpected exception during task assignment phase of rebalance' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsAssigned@POLYN175005 the MagicNumber/String  'A Kafka Streams client in this Kafka Streams application is requesting to shutdown the application' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsAssigned@POLYN175005 the MagicNumber/String  'Received unknown error code {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsAssigned@POLYN175005 the MagicNumber/String  'Hit an unrecognized exception during rebalance' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00066"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#66"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00066] For method onPartitionsRevoked arguments Collection&lt;TopicPartition &gt;  partitions"
}} 
,
{ "ligne" : {
   "c1" : "00066"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#66"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00066] The argument partitions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsRevoked@POLYN176864 the MagicNumber/String  'Current state {}: revoked partitions {} because of consumer rebalance.\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsRevoked@POLYN176864 the MagicNumber/String  '\tcurrently assigned active tasks: {}\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsRevoked@POLYN176864 the MagicNumber/String  '\tcurrently assigned standby tasks: {}\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsRevoked@POLYN176864 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00082"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsRevoked@POLYN176864 the MagicNumber/String  'partition revocation took {} ms.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#88"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00088] For method onPartitionsLost arguments Collection&lt;TopicPartition &gt;  partitions"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsLost@POLYN177826 the MagicNumber/String  'at state {}: partitions {} lost due to missed rebalance.\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsLost@POLYN177826 the MagicNumber/String  '\tlost active tasks: {}\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsLost@POLYN177826 the MagicNumber/String  '\tlost assigned standby tasks: {}\n' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsLost@POLYN177826 the MagicNumber/String  'partitions lost took {} ms.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsAssigned@POLYN175005"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#41"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00041] In the recursive method org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsAssigned@POLYN175005 the MagicNumber/String 'Received error code {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#43"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00043] In the recursive method org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsAssigned@POLYN175005 the MagicNumber/String 'One or more source topics were missing during rebalance' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#45"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00045] In the recursive method org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsAssigned@POLYN175005 the MagicNumber/String 'Received version probing code {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#47"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00047] In the recursive method org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsAssigned@POLYN175005 the MagicNumber/String 'Received error code {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00049"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#49"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00049] In the recursive method org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsAssigned@POLYN175005 the MagicNumber/String 'Hit an unexpected exception during task assignment phase of rebalance' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#51"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00051] In the recursive method org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsAssigned@POLYN175005 the MagicNumber/String 'A Kafka Streams client in this Kafka Streams application is requesting to shutdown the application' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#56"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00056] In the recursive method org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsAssigned@POLYN175005 the MagicNumber/String 'Received unknown error code {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/StreamsRebalanceListener.java.html#57"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00057] In the recursive method org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsAssigned@POLYN175005 the MagicNumber/String 'Hit an unrecognized exception during rebalance' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
