console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html" 
 , "texte" : "File connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java 79 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "org.apache.kafka.connect.mirror.MirrorSourceTask"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.mirror.MirrorSourceTask" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00068"
 , "c5link" : "././qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#68"
 , "c1" : "MirrorSourceTask"
 , "c2" : "MirrorSourceTask()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00071"
 , "c5link" : "././qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#71"
 , "c1" : "MirrorSourceTask"
 , "c2" : "MirrorSourceTask(KafkaConsumer&lt;byte[],byte[]&gt;;MirrorMetrics;String;ReplicationPolicy;long)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00082"
 , "c5link" : "././qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#82"
 , "c1" : "void"
 , "c2" : "start(Map&lt;String,String&gt;)"
 , "c3" : "1"
 , "c4" : "19"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00107"
 , "c5link" : "././qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#107"
 , "c1" : "void"
 , "c2" : "commit()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00112"
 , "c5link" : "././qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#112"
 , "c1" : "void"
 , "c2" : "stop()"
 , "c3" : "1"
 , "c4" : "9"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00128"
 , "c5link" : "././qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#128"
 , "c1" : "String"
 , "c2" : "version()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00133"
 , "c5link" : "././qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#133"
 , "c1" : "List&lt;SourceRecord&gt;"
 , "c2" : "poll()"
 , "c3" : "6"
 , "c4" : "18"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00172"
 , "c5link" : "././qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#172"
 , "c1" : "void"
 , "c2" : "commitRecord(SourceRecord;RecordMetadata)"
 , "c3" : "3"
 , "c4" : "12"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00195"
 , "c5link" : "././qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#195"
 , "c1" : "void"
 , "c2" : "maybeSyncOffsets(TopicPartition;long;long)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00205"
 , "c5link" : "././qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#205"
 , "c1" : "void"
 , "c2" : "sendOffsetSync(TopicPartition;long;long)"
 , "c3" : "4"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00225"
 , "c5link" : "././qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#225"
 , "c1" : "Map&lt;TopicPartition,Long&gt;"
 , "c2" : "loadOffsets(Set&lt;TopicPartition&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00229"
 , "c5link" : "././qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#229"
 , "c1" : "Long"
 , "c2" : "loadOffset(TopicPartition)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00236"
 , "c5link" : "././qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#236"
 , "c1" : "SourceRecord"
 , "c2" : "convertRecord(ConsumerRecord&lt;byte[],byte[]&gt;)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00248"
 , "c5link" : "././qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#248"
 , "c1" : "Headers"
 , "c2" : "convertHeaders(ConsumerRecord&lt;byte[],byte[]&gt;)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00256"
 , "c5link" : "././qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#256"
 , "c1" : "String"
 , "c2" : "formatRemoteTopic(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00260"
 , "c5link" : "././qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#260"
 , "c1" : "int"
 , "c2" : "byteSize(byte[])"
 , "c3" : "3"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.svg" }

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
 , "c4" : "21"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "2"
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
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "11"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.connect.mirror.MirrorSourceTask.MirrorSourceTask@POLYN197926 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#82"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00082] For method start arguments Map&lt;String ,String &gt;  props"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#82"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00082] For method start list of called methods Object monObjet|KafkaConsumer&lt;byte[],byte[]&gt; MirrorUtils_newConsumerN199503|KafkaProducer&lt;byte[],byte[]&gt; MirrorUtils_newProducerN199616|java.util.Map&lt;org.apache.kafka.common.TopicPartition,java.lang.Long&gt; loadOffsetsN199867"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.connect.mirror.MirrorSourceTask.start@POLYN198566 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method org.apache.kafka.connect.mirror.MirrorSourceTask.start@POLYN198566 the MagicNumber/String  'Starting with {} previously uncommitted partitions.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method org.apache.kafka.connect.mirror.MirrorSourceTask.start@POLYN198566 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.connect.mirror.MirrorSourceTask.start@POLYN198566 the MagicNumber/String  'Seeking offsets: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.connect.mirror.MirrorSourceTask.start@POLYN198566 the MagicNumber/String  '{} replicating {} topic-partitions {}-&amp;gt;{}: {}.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.connect.mirror.MirrorSourceTask.stop@POLYN200790 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00119] In method org.apache.kafka.connect.mirror.MirrorSourceTask.stop@POLYN200790 the MagicNumber/String  'Interrupted waiting for access to consumer. Will try closing anyway.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method org.apache.kafka.connect.mirror.MirrorSourceTask.stop@POLYN200790 the MagicNumber/String  'source consumer' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00122"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method org.apache.kafka.connect.mirror.MirrorSourceTask.stop@POLYN200790 the MagicNumber/String  'offset producer' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00123] In method org.apache.kafka.connect.mirror.MirrorSourceTask.stop@POLYN200790 the MagicNumber/String  'metrics' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method org.apache.kafka.connect.mirror.MirrorSourceTask.stop@POLYN200790 the MagicNumber/String  'Stopping {} took {} ms.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00144"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00144] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00146"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00146] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00135"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00135] In method org.apache.kafka.connect.mirror.MirrorSourceTask.poll@POLYN201875 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00138"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00138] In method org.apache.kafka.connect.mirror.MirrorSourceTask.poll@POLYN201875 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00152"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00152] In method org.apache.kafka.connect.mirror.MirrorSourceTask.poll@POLYN201875 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00154"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00154] In method org.apache.kafka.connect.mirror.MirrorSourceTask.poll@POLYN201875 the MagicNumber/String  'Polled {} records from {}.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00158"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method org.apache.kafka.connect.mirror.MirrorSourceTask.poll@POLYN201875 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00160"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#160"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00160] In method org.apache.kafka.connect.mirror.MirrorSourceTask.poll@POLYN201875 the MagicNumber/String  'Failure during poll.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00161"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00161] In method org.apache.kafka.connect.mirror.MirrorSourceTask.poll@POLYN201875 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#163"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00163] In method org.apache.kafka.connect.mirror.MirrorSourceTask.poll@POLYN201875 the MagicNumber/String  'Failure during poll.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00172"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#172"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00172] For method commitRecord arguments SourceRecord  record|RecordMetadata  metadata"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00172"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#172"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00172] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00172"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#172"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00172] The argument metadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00178"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#178"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00178] In method org.apache.kafka.connect.mirror.MirrorSourceTask.commitRecord@POLYN203997 the MagicNumber/String  'RecordMetadata has no offset -- can't sync offsets for {}.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00190"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00190] In method org.apache.kafka.connect.mirror.MirrorSourceTask.commitRecord@POLYN203997 the MagicNumber/String  'Failure committing record.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00195"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#195"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00195] For method maybeSyncOffsets arguments TopicPartition  topicPartition|long  upstreamOffset|long  downstreamOffset"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00205"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#205"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00205] For method sendOffsetSync arguments TopicPartition  topicPartition|long  upstreamOffset|long  downstreamOffset"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00212"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#212"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00212] In method org.apache.kafka.connect.mirror.MirrorSourceTask.sendOffsetSync@POLYN205895 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00215"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#215"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00215] In method org.apache.kafka.connect.mirror.MirrorSourceTask.sendOffsetSync@POLYN205895 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00216"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#216"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00216] In method org.apache.kafka.connect.mirror.MirrorSourceTask.sendOffsetSync@POLYN205895 the MagicNumber/String  'Failure sending offset sync.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00218"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#218"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00218] In method org.apache.kafka.connect.mirror.MirrorSourceTask.sendOffsetSync@POLYN205895 the MagicNumber/String  'Sync'd offsets for {}: {}=={}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00225"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#225"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00225] For method loadOffsets arguments Set&lt;TopicPartition &gt;  topicPartitions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00225"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#225"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00225] The argument topicPartitions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00229"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#229"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00229] For method loadOffset arguments TopicPartition  topicPartition"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00229"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#229"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00229] For method loadOffset list of called methods Object monObjet|java.util.Map&lt;java.lang.String,java.lang.Object&gt; MirrorUtils_wrapPartitionN207475"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00232"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#232"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00232] In method org.apache.kafka.connect.mirror.MirrorSourceTask.loadOffset@POLYN207339 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00236"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#236"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00236] For method convertRecord arguments ConsumerRecord&lt;byte[] ,byte[] &gt;  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00236"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#236"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00236] For method convertRecord list of called methods Object monObjet|java.lang.String formatRemoteTopicN207961|org.apache.kafka.connect.header.Headers convertHeadersN208069"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00236"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#236"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00236] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00248"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#248"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00248] For method convertHeaders arguments ConsumerRecord&lt;byte[] ,byte[] &gt;  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00248"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#248"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00248] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00256"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#256"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00256] For method formatRemoteTopic arguments String  topic"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00260"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#260"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00260] For method byteSize arguments byte[]  bytes"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00261"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#261"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00261] In method org.apache.kafka.connect.mirror.MirrorSourceTask.byteSize@POLYN209355 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00262"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#262"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00262] In method org.apache.kafka.connect.mirror.MirrorSourceTask.byteSize@POLYN209355 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00280"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#280"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00280] For method update arguments long  upstreamOffset|long  downstreamOffset"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00281"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#281"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00281] In method org.apache.kafka.connect.mirror.MirrorSourceTask.PartitionState.update@POLYN210076 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00284"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#284"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00284] In method org.apache.kafka.connect.mirror.MirrorSourceTask.PartitionState.update@POLYN210076 the MagicNumber/String  1L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00286"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#286"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00286] In method org.apache.kafka.connect.mirror.MirrorSourceTask.PartitionState.update@POLYN210076 the MagicNumber/String  1L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00290"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#290"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00290] In method org.apache.kafka.connect.mirror.MirrorSourceTask.PartitionState.update@POLYN210076 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.mirror.MirrorSourceTask.commitRecord@POLYN203997"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.mirror.MirrorSourceTask.poll@POLYN201875"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.mirror.MirrorSourceTask.start@POLYN198566"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.mirror.MirrorSourceTask.stop@POLYN200790"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00178"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#178"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00178] In the recursive method org.apache.kafka.connect.mirror.MirrorSourceTask.commitRecord@POLYN203997 the MagicNumber/String 'RecordMetadata has no offset -- can't sync offsets for {}.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00190"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#190"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00190] In the recursive method org.apache.kafka.connect.mirror.MirrorSourceTask.commitRecord@POLYN203997 the MagicNumber/String 'Failure committing record.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00135"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#135"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00135] In the recursive method org.apache.kafka.connect.mirror.MirrorSourceTask.poll@POLYN201875 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00138"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#138"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00138] In the recursive method org.apache.kafka.connect.mirror.MirrorSourceTask.poll@POLYN201875 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00152"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#152"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00152] In the recursive method org.apache.kafka.connect.mirror.MirrorSourceTask.poll@POLYN201875 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00154"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#154"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00154] In the recursive method org.apache.kafka.connect.mirror.MirrorSourceTask.poll@POLYN201875 the MagicNumber/String 'Polled {} records from {}.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00158"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#158"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00158] In the recursive method org.apache.kafka.connect.mirror.MirrorSourceTask.poll@POLYN201875 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00160"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#160"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00160] In the recursive method org.apache.kafka.connect.mirror.MirrorSourceTask.poll@POLYN201875 the MagicNumber/String 'Failure during poll.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00161"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#161"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00161] In the recursive method org.apache.kafka.connect.mirror.MirrorSourceTask.poll@POLYN201875 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#163"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00163] In the recursive method org.apache.kafka.connect.mirror.MirrorSourceTask.poll@POLYN201875 the MagicNumber/String 'Failure during poll.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#85"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00085] In the recursive method org.apache.kafka.connect.mirror.MirrorSourceTask.start@POLYN198566 the MagicNumber/String 1 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#98"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00098] In the recursive method org.apache.kafka.connect.mirror.MirrorSourceTask.start@POLYN198566 the MagicNumber/String 'Starting with {} previously uncommitted partitions.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#99"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00099] In the recursive method org.apache.kafka.connect.mirror.MirrorSourceTask.start@POLYN198566 the MagicNumber/String 0L MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#100"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00100] In the recursive method org.apache.kafka.connect.mirror.MirrorSourceTask.start@POLYN198566 the MagicNumber/String 'Seeking offsets: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#102"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00102] In the recursive method org.apache.kafka.connect.mirror.MirrorSourceTask.start@POLYN198566 the MagicNumber/String '{} replicating {} topic-partitions {}-&amp;gt;{}: {}.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#114"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00114] In the recursive method org.apache.kafka.connect.mirror.MirrorSourceTask.stop@POLYN200790 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00119"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#119"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00119] In the recursive method org.apache.kafka.connect.mirror.MirrorSourceTask.stop@POLYN200790 the MagicNumber/String 'Interrupted waiting for access to consumer. Will try closing anyway.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#121"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00121] In the recursive method org.apache.kafka.connect.mirror.MirrorSourceTask.stop@POLYN200790 the MagicNumber/String 'source consumer' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00122"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#122"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00122] In the recursive method org.apache.kafka.connect.mirror.MirrorSourceTask.stop@POLYN200790 the MagicNumber/String 'offset producer' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00123"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#123"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00123] In the recursive method org.apache.kafka.connect.mirror.MirrorSourceTask.stop@POLYN200790 the MagicNumber/String 'metrics' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.html#124"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00124] In the recursive method org.apache.kafka.connect.mirror.MirrorSourceTask.stop@POLYN200790 the MagicNumber/String 'Stopping {} took {} ms.' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/connect/mirror/src/main/java/org/apache/kafka/connect/mirror/MirrorSourceTask.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
