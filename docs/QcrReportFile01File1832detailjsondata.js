console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java 91 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.processor.internals.PartitionGroup"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.processor.internals.PartitionGroup" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "PartitionGroup"
 , "c2" : "PartitionGroup(LogContext;Map<TopicPartition,RecordQueue>;Function<TopicPartition,OptionalLong>;Sensor;Sensor;Sensor;long)"
 , "c3" : "1"
 , "c4" : "11"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "readyToProcess(long)"
 , "c3" : "20"
 , "c4" : "32"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "partitionTimestamp(TopicPartition)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "updatePartitions(Set<TopicPartition>;Function<TopicPartition,RecordQueue>)"
 , "c3" : "4"
 , "c4" : "12"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "setPartitionTime(TopicPartition;long)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "StampedRecord"
 , "c2" : "nextRecord(RecordInfo;long)"
 , "c3" : "7"
 , "c4" : "15"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "addRawRecords(TopicPartition;Iterable<ConsumerRecord<byte[],byte[]>>)"
 , "c3" : "4"
 , "c4" : "12"
}} 
,
{ "ligne" : {
   "c1" : "Set<TopicPartition>"
 , "c2" : "partitions()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "streamTime()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Long"
 , "c2" : "headRecordOffset(TopicPartition)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "numBuffered(TopicPartition)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "Set<TopicPartition>"
 , "c2" : "getNonEmptyTopicPartitions()"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "numBuffered()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "totalBytesBuffered()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "clear()"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "close()"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "allPartitionsBufferedLocally()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.svg" }

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
 , "c4" : "10"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "5"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "5"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "54"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "8"
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
   "c1" : "00023"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#23"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00023] The class PartitionGroup contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00040] The class RecordInfo contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#56"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00056] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00057"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#57"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00057] The argument partitionQueues is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00071"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.streams.processor.internals.PartitionGroup.PartitionGroup@POLYN214244 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.streams.processor.internals.PartitionGroup.PartitionGroup@POLYN214244 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#76"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00076] For method readyToProcess arguments long  wallClockTime"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00102] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00103"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00103] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00111"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00111] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.streams.processor.internals.PartitionGroup.readyToProcess@POLYN215426 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.streams.processor.internals.PartitionGroup.readyToProcess@POLYN215426 the MagicNumber/String  'Ready for processing because max.task.idle.ms is disabled.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.streams.processor.internals.PartitionGroup.readyToProcess@POLYN215426 the MagicNumber/String  '\n\tThere may be out-of-order processing for this task as a result.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00090"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.streams.processor.internals.PartitionGroup.readyToProcess@POLYN215426 the MagicNumber/String  '\n\tBuffered partitions: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.streams.processor.internals.PartitionGroup.readyToProcess@POLYN215426 the MagicNumber/String  '\n\tNon-buffered partitions: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00095"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.streams.processor.internals.PartitionGroup.readyToProcess@POLYN215426 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method org.apache.kafka.streams.processor.internals.PartitionGroup.readyToProcess@POLYN215426 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00116"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method org.apache.kafka.streams.processor.internals.PartitionGroup.readyToProcess@POLYN215426 the MagicNumber/String  'Waiting to fetch data for {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00117"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method org.apache.kafka.streams.processor.internals.PartitionGroup.readyToProcess@POLYN215426 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00118"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00118] In method org.apache.kafka.streams.processor.internals.PartitionGroup.readyToProcess@POLYN215426 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method org.apache.kafka.streams.processor.internals.PartitionGroup.readyToProcess@POLYN215426 the MagicNumber/String  'Lag for {} is currently {}, but no data is buffered locally. Waiting to buffer some records.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00126"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00126] In method org.apache.kafka.streams.processor.internals.PartitionGroup.readyToProcess@POLYN215426 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00138"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00138] In method org.apache.kafka.streams.processor.internals.PartitionGroup.readyToProcess@POLYN215426 the MagicNumber/String  'Lag for {} is currently 0 and current time is {}. Waiting for new data to be produced for configured idle time {} (deadline is {}).' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00144"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00144] In method org.apache.kafka.streams.processor.internals.PartitionGroup.readyToProcess@POLYN215426 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00147"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00147] In method org.apache.kafka.streams.processor.internals.PartitionGroup.readyToProcess@POLYN215426 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00155"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00155] In method org.apache.kafka.streams.processor.internals.PartitionGroup.readyToProcess@POLYN215426 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00156"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00156] In method org.apache.kafka.streams.processor.internals.PartitionGroup.readyToProcess@POLYN215426 the MagicNumber/String  'All partitions were buffered locally, so this task is ready for processing.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00157"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00157] In method org.apache.kafka.streams.processor.internals.PartitionGroup.readyToProcess@POLYN215426 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00159"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00159] In method org.apache.kafka.streams.processor.internals.PartitionGroup.readyToProcess@POLYN215426 the MagicNumber/String  'No partitions were buffered locally, so this task is not ready for processing.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00160"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#160"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00160] In method org.apache.kafka.streams.processor.internals.PartitionGroup.readyToProcess@POLYN215426 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00162"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00162] In method org.apache.kafka.streams.processor.internals.PartitionGroup.readyToProcess@POLYN215426 the MagicNumber/String  1.0d should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00163"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#163"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00163] In method org.apache.kafka.streams.processor.internals.PartitionGroup.readyToProcess@POLYN215426 the MagicNumber/String  'Continuing to process although some partitions are empty on the broker.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00164"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#164"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00164] In method org.apache.kafka.streams.processor.internals.PartitionGroup.readyToProcess@POLYN215426 the MagicNumber/String  '\n\tThere may be out-of-order processing for this task as a result.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00165"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00165] In method org.apache.kafka.streams.processor.internals.PartitionGroup.readyToProcess@POLYN215426 the MagicNumber/String  '\n\tPartitions with local data: {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00166"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#166"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00166] In method org.apache.kafka.streams.processor.internals.PartitionGroup.readyToProcess@POLYN215426 the MagicNumber/String  '\n\tPartitions we gave up waiting for, with their corresponding deadlines: {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00167"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00167] In method org.apache.kafka.streams.processor.internals.PartitionGroup.readyToProcess@POLYN215426 the MagicNumber/String  '\n\tConfigured max.task.idle.ms: {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00168"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00168] In method org.apache.kafka.streams.processor.internals.PartitionGroup.readyToProcess@POLYN215426 the MagicNumber/String  '\n\tCurrent wall-clock time: {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00173"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#173"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00173] In method org.apache.kafka.streams.processor.internals.PartitionGroup.readyToProcess@POLYN215426 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00177"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#177"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00177] For method partitionTimestamp arguments TopicPartition  partition"
}} 
,
{ "ligne" : {
   "c1" : "00180"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#180"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00180] In method org.apache.kafka.streams.processor.internals.PartitionGroup.partitionTimestamp@POLYN219645 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00181"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#181"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00181] In method org.apache.kafka.streams.processor.internals.PartitionGroup.partitionTimestamp@POLYN219645 the MagicNumber/String  'Partition ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00181"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#181"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00181] In method org.apache.kafka.streams.processor.internals.PartitionGroup.partitionTimestamp@POLYN219645 the MagicNumber/String  ' not found.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00186"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#186"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00186] For method updatePartitions arguments Set&lt;TopicPartition &gt;  newInputPartitions|Function&lt;TopicPartition ,RecordQueue &gt;  recordQueueCreator"
}} 
,
{ "ligne" : {
   "c1" : "00186"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#186"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00186] For method updatePartitions list of called methods Object monObjet|long queueEntry_getValueN220979"
}} 
,
{ "ligne" : {
   "c1" : "00187"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#187"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00187] The argument newInputPartitions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00187"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#187"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00187] The argument recordQueueCreator is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00191"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#191"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00191] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00192"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00192] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00209"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#209"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00209] For method setPartitionTime arguments TopicPartition  partition|long  partitionTime"
}} 
,
{ "ligne" : {
   "c1" : "00211"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#211"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00211] In method org.apache.kafka.streams.processor.internals.PartitionGroup.setPartitionTime@POLYN221703 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00212"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#212"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00212] In method org.apache.kafka.streams.processor.internals.PartitionGroup.setPartitionTime@POLYN221703 the MagicNumber/String  'Partition ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00212"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#212"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00212] In method org.apache.kafka.streams.processor.internals.PartitionGroup.setPartitionTime@POLYN221703 the MagicNumber/String  ' not found.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00221"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#221"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00221] For method nextRecord arguments RecordInfo  info|long  wallClockTime"
}} 
,
{ "ligne" : {
   "c1" : "00221"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#221"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00221] For method nextRecord list of called methods Object monObjet|org.apache.kafka.streams.processor.internals.StampedRecord queue_getTotalBytesBufferedN222757|org.apache.kafka.streams.processor.internals.StampedRecord queue_pollN222831|org.apache.kafka.streams.processor.internals.StampedRecord queue_getTotalBytesBufferedN222930"
}} 
,
{ "ligne" : {
   "c1" : "00221"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#221"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00221] The argument info is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00222"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#222"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00222] In method org.apache.kafka.streams.processor.internals.PartitionGroup.nextRecord@POLYN222352 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00227"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#227"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00227] In method org.apache.kafka.streams.processor.internals.PartitionGroup.nextRecord@POLYN222352 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00235"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#235"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00235] In method org.apache.kafka.streams.processor.internals.PartitionGroup.nextRecord@POLYN222352 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00241"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#241"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00241] In method org.apache.kafka.streams.processor.internals.PartitionGroup.nextRecord@POLYN222352 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00249"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#249"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00249] In method org.apache.kafka.streams.processor.internals.PartitionGroup.nextRecord@POLYN222352 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00260"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#260"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00260] For method addRawRecords arguments TopicPartition  partition|Iterable&lt;ConsumerRecord&lt;byte[] ,byte[] &gt; &gt;  rawRecords"
}} 
,
{ "ligne" : {
   "c1" : "00260"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#260"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00260] For method addRawRecords list of called methods Object monObjet|int recordQueue_sizeN224496|long recordQueue_getTotalBytesBufferedN224576|int recordQueue_addRawRecordsN224656|long recordQueue_getTotalBytesBufferedN224755"
}} 
,
{ "ligne" : {
   "c1" : "00263"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#263"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00263] In method org.apache.kafka.streams.processor.internals.PartitionGroup.addRawRecords@POLYN223999 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00264"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#264"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00264] In method org.apache.kafka.streams.processor.internals.PartitionGroup.addRawRecords@POLYN223999 the MagicNumber/String  'Partition ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00264"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#264"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00264] In method org.apache.kafka.streams.processor.internals.PartitionGroup.addRawRecords@POLYN223999 the MagicNumber/String  ' not found.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00273"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#273"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00273] In method org.apache.kafka.streams.processor.internals.PartitionGroup.addRawRecords@POLYN223999 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00273"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#273"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00273] In method org.apache.kafka.streams.processor.internals.PartitionGroup.addRawRecords@POLYN223999 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00280"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#280"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00280] In method org.apache.kafka.streams.processor.internals.PartitionGroup.addRawRecords@POLYN223999 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00299"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#299"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00299] For method headRecordOffset arguments TopicPartition  partition"
}} 
,
{ "ligne" : {
   "c1" : "00302"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#302"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00302] In method org.apache.kafka.streams.processor.internals.PartitionGroup.headRecordOffset@POLYN225748 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00303"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#303"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00303] In method org.apache.kafka.streams.processor.internals.PartitionGroup.headRecordOffset@POLYN225748 the MagicNumber/String  'Partition ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00303"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#303"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00303] In method org.apache.kafka.streams.processor.internals.PartitionGroup.headRecordOffset@POLYN225748 the MagicNumber/String  ' not found.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00310"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#310"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00310] For method numBuffered arguments TopicPartition  partition"
}} 
,
{ "ligne" : {
   "c1" : "00313"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#313"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00313] In method org.apache.kafka.streams.processor.internals.PartitionGroup.numBuffered@POLYN226233 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00314"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#314"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00314] In method org.apache.kafka.streams.processor.internals.PartitionGroup.numBuffered@POLYN226233 the MagicNumber/String  'Partition ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00314"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#314"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00314] In method org.apache.kafka.streams.processor.internals.PartitionGroup.numBuffered@POLYN226233 the MagicNumber/String  ' not found.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00341"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#341"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00341] In method org.apache.kafka.streams.processor.internals.PartitionGroup.clear@POLYN227190 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.PartitionGroup.addRawRecords@POLYN223999"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.PartitionGroup.clear@POLYN227190"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.PartitionGroup.close@POLYN227548"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.processor.internals.PartitionGroup.partitionTimestamp@POLYN219645"
}} 
,
{ "ligne" : {
   "c1" : "00263"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#263"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00263] In the recursive method org.apache.kafka.streams.processor.internals.PartitionGroup.addRawRecords@POLYN223999 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00264"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#264"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00264] In the recursive method org.apache.kafka.streams.processor.internals.PartitionGroup.addRawRecords@POLYN223999 the MagicNumber/String ' not found.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00264"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#264"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00264] In the recursive method org.apache.kafka.streams.processor.internals.PartitionGroup.addRawRecords@POLYN223999 the MagicNumber/String 'Partition ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00273"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#273"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00273] In the recursive method org.apache.kafka.streams.processor.internals.PartitionGroup.addRawRecords@POLYN223999 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00273"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#273"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00273] In the recursive method org.apache.kafka.streams.processor.internals.PartitionGroup.addRawRecords@POLYN223999 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00280"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#280"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00280] In the recursive method org.apache.kafka.streams.processor.internals.PartitionGroup.addRawRecords@POLYN223999 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00341"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#341"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00341] In the recursive method org.apache.kafka.streams.processor.internals.PartitionGroup.clear@POLYN227190 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00180"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#180"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00180] In the recursive method org.apache.kafka.streams.processor.internals.PartitionGroup.partitionTimestamp@POLYN219645 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00181"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#181"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00181] In the recursive method org.apache.kafka.streams.processor.internals.PartitionGroup.partitionTimestamp@POLYN219645 the MagicNumber/String ' not found.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00181"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/PartitionGroup.java.html#181"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00181] In the recursive method org.apache.kafka.streams.processor.internals.PartitionGroup.partitionTimestamp@POLYN219645 the MagicNumber/String 'Partition ' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
