console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerTask.java.html" 
 , "texte" : "File storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerTask.java 51 rule violations " 
 , "fic2"  : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerTask.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "Runnable"
 , "c2" : "org.apache.kafka.server.log.remote.metadata.storage.ConsumerTask"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.server.log.remote.metadata.storage.ConsumerTask" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "ConsumerTask"
 , "c2" : "ConsumerTask(KafkaConsumer<byte[],byte[]>;RemotePartitionMetadataEventHandler;RemoteLogMetadataTopicPartitioner;Path;Time;long)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "initializeConsumerAssignment(Path)"
 , "c3" : "3"
 , "c4" : "12"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "run()"
 , "c3" : "3"
 , "c4" : "11"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "processConsumerRecord(ConsumerRecord<byte[],byte[]>)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "maybeSyncCommittedDataAndOffsets(boolean)"
 , "c3" : "5"
 , "c4" : "11"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "closeConsumer()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "maybeWaitForPartitionsAssignment()"
 , "c3" : "6"
 , "c4" : "10"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "executeReassignment(Set<Integer>)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "addAssignmentsForPartitions(Set<TopicIdPartition>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "removeAssignmentsForPartitions(Set<TopicIdPartition>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "updateAssignmentsForPartitions(Set<TopicIdPartition>;Set<TopicIdPartition>)"
 , "c3" : "6"
 , "c4" : "17"
}} 
,
{ "ligne" : {
   "c1" : "Optional<Long>"
 , "c2" : "receivedOffsetForPartition(int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isPartitionAssigned(int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "close()"
 , "c3" : "2"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerTask.java.png" 

 , "ligneplantuml" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerTask.java.svg" }

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
 , "c4" : "5"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "4"
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
 , "c4" : "27"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "9"
}}
,
{ "ligne" : {
   "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "5"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00034"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerTask.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00034] The class ConsumerTask contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerTask.java.html#88"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00088] For method initializeConsumerAssignment arguments Path  committedOffsetsPath"
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerTask.java.html#88"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00088] The argument committedOffsetsPath is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00101"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerTask.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method org.apache.kafka.server.log.remote.metadata.storage.ConsumerTask.initializeConsumerAssignment@POLYN212247 the MagicNumber/String  'Encountered error while building committed offsets from the file. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00102"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerTask.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method org.apache.kafka.server.log.remote.metadata.storage.ConsumerTask.initializeConsumerAssignment@POLYN212247 the MagicNumber/String  'Consumer will consume from the earliest offset for the assigned partitions.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00133"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerTask.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00133] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00134"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerTask.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00134] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00126"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerTask.java.html#126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00126] In method org.apache.kafka.server.log.remote.metadata.storage.ConsumerTask.run@POLYN214130 the MagicNumber/String  'Started Consumer task thread.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerTask.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method org.apache.kafka.server.log.remote.metadata.storage.ConsumerTask.run@POLYN214130 the MagicNumber/String  'Polling consumer to receive remote log metadata topic records' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00138"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerTask.java.html#138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00138] In method org.apache.kafka.server.log.remote.metadata.storage.ConsumerTask.run@POLYN214130 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00141"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerTask.java.html#141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00141] In method org.apache.kafka.server.log.remote.metadata.storage.ConsumerTask.run@POLYN214130 the MagicNumber/String  'Error occurred in consumer task, close:[{}]' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00143"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerTask.java.html#143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00143] In method org.apache.kafka.server.log.remote.metadata.storage.ConsumerTask.run@POLYN214130 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00145"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerTask.java.html#145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00145] In method org.apache.kafka.server.log.remote.metadata.storage.ConsumerTask.run@POLYN214130 the MagicNumber/String  'Exiting from consumer task thread' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00149"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerTask.java.html#149"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00149] For method processConsumerRecord arguments ConsumerRecord&lt;byte[] ,byte[] &gt;  record"
}} 
,
{ "ligne" : {
   "c1" : "00149"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerTask.java.html#149"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00149] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00154"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerTask.java.html#154"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00154] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00158"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerTask.java.html#158"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00158] In method org.apache.kafka.server.log.remote.metadata.storage.ConsumerTask.processConsumerRecord@POLYN215312 the MagicNumber/String  'This event {} is skipped as the topic partition is not assigned for this instance.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00164"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerTask.java.html#164"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00164] For method maybeSyncCommittedDataAndOffsets arguments boolean  forceSync"
}} 
,
{ "ligne" : {
   "c1" : "00175"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerTask.java.html#175"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00175] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00178"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerTask.java.html#178"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00178] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00168"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerTask.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00168] In method org.apache.kafka.server.log.remote.metadata.storage.ConsumerTask.maybeSyncCommittedDataAndOffsets@POLYN216015 the MagicNumber/String  'Skip syncing committed offsets, noConsumedOffsetUpdates: {}, forceSync: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00179"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerTask.java.html#179"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00179] In method org.apache.kafka.server.log.remote.metadata.storage.ConsumerTask.maybeSyncCommittedDataAndOffsets@POLYN216015 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00182"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerTask.java.html#182"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00182] In method org.apache.kafka.server.log.remote.metadata.storage.ConsumerTask.maybeSyncCommittedDataAndOffsets@POLYN216015 the MagicNumber/String  'Skipping syncup of the remote-log-metadata-file for partition:{} , with remote log metadata partition{}, and no offset' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00195"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerTask.java.html#195"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00195] In method org.apache.kafka.server.log.remote.metadata.storage.ConsumerTask.maybeSyncCommittedDataAndOffsets@POLYN216015 the MagicNumber/String  'Error encountered while writing committed offsets to a local file' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00200"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerTask.java.html#200"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00200] In method org.apache.kafka.server.log.remote.metadata.storage.ConsumerTask.closeConsumer@POLYN217522 the MagicNumber/String  'Closing the consumer instance' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00202"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerTask.java.html#202"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00202] In method org.apache.kafka.server.log.remote.metadata.storage.ConsumerTask.closeConsumer@POLYN217522 the MagicNumber/String  30 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00204"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerTask.java.html#204"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00204] In method org.apache.kafka.server.log.remote.metadata.storage.ConsumerTask.closeConsumer@POLYN217522 the MagicNumber/String  'Error encountered while closing the consumer' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00210"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerTask.java.html#210"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00210] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00230"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerTask.java.html#230"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00230] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00219"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerTask.java.html#219"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00219] In method org.apache.kafka.server.log.remote.metadata.storage.ConsumerTask.maybeWaitForPartitionsAssignment@POLYN217911 the MagicNumber/String  'Waiting for assigned remote log metadata partitions..' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00240"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerTask.java.html#240"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00240] In method org.apache.kafka.server.log.remote.metadata.storage.ConsumerTask.maybeWaitForPartitionsAssignment@POLYN217911 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00249"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerTask.java.html#249"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00249] For method executeReassignment arguments Set&lt;Integer &gt;  assignedMetaPartitionsSnapshot"
}} 
,
{ "ligne" : {
   "c1" : "00249"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerTask.java.html#249"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00249] The argument assignedMetaPartitionsSnapshot is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00254"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerTask.java.html#254"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00254] In method org.apache.kafka.server.log.remote.metadata.storage.ConsumerTask.executeReassignment@POLYN219103 the MagicNumber/String  'Reassigning partitions to consumer task [{}]' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00258"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerTask.java.html#258"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00258] For method addAssignmentsForPartitions arguments Set&lt;TopicIdPartition &gt;  partitions"
}} 
,
{ "ligne" : {
   "c1" : "00262"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerTask.java.html#262"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00262] For method removeAssignmentsForPartitions arguments Set&lt;TopicIdPartition &gt;  partitions"
}} 
,
{ "ligne" : {
   "c1" : "00266"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerTask.java.html#266"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00266] For method updateAssignmentsForPartitions arguments Set&lt;TopicIdPartition &gt;  addedPartitions|Set&lt;TopicIdPartition &gt;  removedPartitions"
}} 
,
{ "ligne" : {
   "c1" : "00266"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerTask.java.html#266"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00266] The argument addedPartitions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00267"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerTask.java.html#267"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00267] The argument removedPartitions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00277"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerTask.java.html#277"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00277] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00268"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerTask.java.html#268"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00268] In method org.apache.kafka.server.log.remote.metadata.storage.ConsumerTask.updateAssignmentsForPartitions@POLYN220011 the MagicNumber/String  'Updating assignments for addedPartitions: {} and removedPartition: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00270"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerTask.java.html#270"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00270] In method org.apache.kafka.server.log.remote.metadata.storage.ConsumerTask.updateAssignmentsForPartitions@POLYN220011 the MagicNumber/String  'addedPartitions must not be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00271"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerTask.java.html#271"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00271] In method org.apache.kafka.server.log.remote.metadata.storage.ConsumerTask.updateAssignmentsForPartitions@POLYN220011 the MagicNumber/String  'removedPartitions must not be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00292"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerTask.java.html#292"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00292] In method org.apache.kafka.server.log.remote.metadata.storage.ConsumerTask.updateAssignmentsForPartitions@POLYN220011 the MagicNumber/String  'Assigned topic partitions: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00296"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerTask.java.html#296"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00296] In method org.apache.kafka.server.log.remote.metadata.storage.ConsumerTask.updateAssignmentsForPartitions@POLYN220011 the MagicNumber/String  'Assigned metadata topic partitions: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00298"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerTask.java.html#298"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00298] In method org.apache.kafka.server.log.remote.metadata.storage.ConsumerTask.updateAssignmentsForPartitions@POLYN220011 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00301"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerTask.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method org.apache.kafka.server.log.remote.metadata.storage.ConsumerTask.updateAssignmentsForPartitions@POLYN220011 the MagicNumber/String  'No change in assigned metadata topic partitions: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00306"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerTask.java.html#306"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00306] For method receivedOffsetForPartition arguments int  partition"
}} 
,
{ "ligne" : {
   "c1" : "00310"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerTask.java.html#310"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00310] For method isPartitionAssigned arguments int  partition"
}} 
,
{ "ligne" : {
   "c1" : "00316"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerTask.java.html#316"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00316] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00320"
 , "c1link" : "./qc/storage/src/main/java/org/apache/kafka/server/log/remote/metadata/storage/ConsumerTask.java.html#320"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00320] In method org.apache.kafka.server.log.remote.metadata.storage.ConsumerTask.close@POLYN222382 the MagicNumber/String  true should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
